import mainImageOne from "../assets/images/image-product-1.jpg";
import mainImageTwo from "../assets/images/image-product-2.jpg";
import mainImageThree from "../assets/images/image-product-3.jpg";
import mainImageFour from "../assets/images/image-product-4.jpg";
// Thumbnail images
import thumb1 from "../assets/images/image-product-1-thumbnail.jpg";
import thumb2 from "../assets/images/image-product-2-thumbnail.jpg";
import thumb3 from "../assets/images/image-product-3-thumbnail.jpg";
import thumb4 from "../assets/images/image-product-4-thumbnail.jpg";
import { createPortal } from "react-dom";
import { useState } from "react";
import ProductImageModal from "./ProductImageModal";

const SliderDesktop = () => {
  const mainImages = [
    {
      id: 1,
      src: mainImageOne,
    },
    {
      id: 2,
      src: mainImageTwo,
    },
    {
      id: 3,
      src: mainImageThree,
    },
    {
      id: 4,
      src: mainImageFour,
    },
  ];
  const imagesThumbnail = [
    {
      id: 1,
      src: thumb1,
    },
    {
      id: 2,
      src: thumb2,
    },
    {
      id: 3,
      src: thumb3,
    },
    {
      id: 4,
      src: thumb4,
    },
  ];
  
  const [mainImage, setMainImage] = useState(mainImages[0].src);
  const [selectedImageId, setSelectedImageId] = useState(mainImages[0].id);
  const [showModal, setShowModal] = useState(false);

  const handleChangeMainImage = (id: number) => {
    const image = mainImages.find((image) => image.id === id);
    if (image) {
      setMainImage(image.src);
      setSelectedImageId(id);
    }
  };
  const openModalImage = () => {
    setShowModal(true);
  }

  return (
    <div>
      <div>
        {/* main images */}
        <button onClick={openModalImage}>
            <img src={mainImage} className="rounded-lg w-[400px] h-[400px] mb-5" />
        </button>
      </div>
      {/* thumbnails */}
      <div className="flex gap-2 rounded-lg w-[400px] justify-between">
        {imagesThumbnail.map((image) => (
          <button
            key={image.id}
            onClick={() => handleChangeMainImage(image.id)}
            className={`w-20 h-20 rounded-lg ${
                selectedImageId === image.id ? "border-2 border-orange" : undefined
              }`}
          >
            <img
              src={image.src}
              alt="product"
              className={`w-20 h-20 rounded-lg ${
                selectedImageId === image.id ? "opacity-30" : undefined
              }`}
            />
          </button>
        ))}
      </div>
      {showModal && createPortal(
        <ProductImageModal img={mainImage} close={setShowModal} />,
        document.getElementById("modalImage") as HTMLElement
    )}
    </div>
  );
};

export default SliderDesktop;
