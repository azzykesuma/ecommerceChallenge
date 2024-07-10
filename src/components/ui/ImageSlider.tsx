// ImageSlider.tsx
import { useState } from "react";
import {motion} from "framer-motion";
import mainImageOne from "../../assets/images/image-product-1.jpg";
import mainImageTwo from "../../assets/images/image-product-2.jpg";
import mainImageThree from "../../assets/images/image-product-3.jpg";
import mainImageFour from "../../assets/images/image-product-4.jpg";
// Thumbnail images
import thumb1 from "../../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../../assets/images/image-product-4-thumbnail.jpg";

import nextIcon from "../../assets/images/icon-next.svg";
import prevIcon from "../../assets/images/icon-previous.svg";

const mainImages = [
  { id: 1, src: mainImageOne },
  { id: 2, src: mainImageTwo },
  { id: 3, src: mainImageThree },
  { id: 4, src: mainImageFour },
];

const thumbnailImages = [
  { id: 1, src: thumb1 },
  { id: 2, src: thumb2 },
  { id: 3, src: thumb3 },
  { id: 4, src: thumb4 },
];

type ImageSliderProps = {
  onThumbnailClick: (id: number) => void;
  selectedImageId: number;
  isModal?: boolean;
  showModal?: () => void;
};

const ImageSlider = ({
  onThumbnailClick,
  selectedImageId,
  isModal,
  showModal,
}: ImageSliderProps) => {
  const [mainImage, setMainImage] = useState(mainImages[0].src);
  const [currentThumbnail, setCurrentThumbnail] = useState(mainImages[0].id);

  const handleChangeMainImage = (id: number) => {
    const image = mainImages.find((image) => image.id === id);
    if (image) {
      setMainImage(image.src);
      onThumbnailClick(id);
      setCurrentThumbnail(id);
    }
  };
  const handleMainClick = (id: number) => {
    if (isModal) return;
    handleChangeMainImage(id);
    showModal && showModal();
  };
  const handlePrev = () => {
    const currIndex = mainImages.findIndex((image) => image.src === mainImage);
    let prevIndex = currIndex - 1;
    if(prevIndex < 0) {
      prevIndex = mainImages.length - 1;
    }
    handleChangeMainImage(mainImages[prevIndex].id);
  };
  const handleNext = () => {
    const currIndex = mainImages.findIndex((image) => image.src === mainImage);
    let nextIndex = currIndex + 1;
    if (nextIndex === mainImages.length) {
      nextIndex = 0;
    }

    handleChangeMainImage(mainImages[nextIndex].id);
  };
  

  return (
    <div>
      <div className="relative">
        <img
          src={mainImage}
          className={`rounded-lg ${
            isModal ? "w-[400px] h-[400px]" : "w-[400px] h-[400px] mb-5"
          }`}
          onClick={isModal ? undefined : () => handleMainClick(selectedImageId)}
        />
        {isModal && (
          <div className="flex justify-between absolute top-1/2 transform -translate-y-1/2  w-full">
            <button
              onClick={handlePrev}
              className="flex items-center justify-center bg-white h-8 w-8 rounded-full ml-[-10px]"
            >
              <img className="w-2" src={prevIcon} alt="prev" />
            </button>
            <button
              onClick={handleNext}
              className="flex items-center justify-center bg-white h-8 w-8 rounded-full mr-[-10px]"
            >
              <img className="w-2" src={nextIcon} alt="next" />
            </button>
          </div>
        )}
      </div>
      <div
        className={`flex gap-2 rounded-lg w-[400px] justify-between ${
          isModal ? "mt-6" : undefined
        }`}
      >
        {thumbnailImages.map((image) => (
          <button
            key={image.id}
            onClick={() => handleChangeMainImage(image.id)}
            className={`w-20 h-20 rounded-lg ${
              currentThumbnail === image.id
                ? "border-2 border-orange"
                : undefined
            }`}
          >
            <motion.img
              src={image.src}
              alt="product"
              className={`w-20 h-20 rounded-md hover:brightness-125 ${
                currentThumbnail === image.id ? "opacity-30" : undefined
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
