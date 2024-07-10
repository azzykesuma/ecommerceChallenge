import React from "react";
import {motion} from "framer-motion";

import ImageSlider from "./ui/ImageSlider";

const ProductImageModal = ({
  imgId,
  close,
}: {
  imgId: number;
  close: () => void;
}) => {

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      close();
    }
  };


  return (
    <motion.div
      initial={{opacity: 0, y: 30}}
      animate={{opacity: 1, y: 0}}
      exit={{opacity: 0, y: 30}}
      className="fixed inset-0 bg-black bg-opacity-75 z-50 flex justify-center items-center"
      onClick={handleBackgroundClick}
    >
      <div className="p-5 rounded-lg relative">
        <button
          className="absolute top-[-20px] right-3 text-white rounded-full p-2"
          onClick={() => close()}
        >
          <motion.svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              initial={{fill: 'white'}}
              whileHover={{fill: 'orange'}}
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              
            />
          </motion.svg>
        </button>
        <ImageSlider 
            onThumbnailClick={() => {}}
            selectedImageId={imgId}
            isModal={true}
        />
      </div>
    </motion.div>
  );
};

export default ProductImageModal;
