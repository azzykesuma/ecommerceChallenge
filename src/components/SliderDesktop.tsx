// SliderDesktop.tsx
import { useState } from "react";
import ImageSlider from "../components/ui/ImageSlider";
import ProductImageModal from "./ProductImageModal";
import { createPortal } from "react-dom";

const SliderDesktop = () => {
  const [selectedImageId, setSelectedImageId] = useState(1);
  const [showModal, setShowModal] = useState(false);

  const handleChangeMainImage = (id: number) => {
    setSelectedImageId(id);
  };

  return (
    <div>
      <ImageSlider
        onThumbnailClick={handleChangeMainImage}
        selectedImageId={selectedImageId}
        showModal={() => setShowModal(true)}
      />

      {showModal &&
        createPortal(
          <ProductImageModal
            imgId={selectedImageId}
            close={() => setShowModal(false)}
          />,
          document.getElementById("modalImage") as HTMLElement
        )}

    </div>
  );
};

export default SliderDesktop;
