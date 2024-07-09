interface ProductIMageModalProps {
    img: string;
    close: React.Dispatch<React.SetStateAction<boolean>>
}

const ProductImageModal = ({ img , close}: ProductIMageModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center">
      <div className="bg-white p-5 rounded-lg">
        <img src={img} alt="product" className="w-[400px] h-[400px]" />
      </div>
    </div>
  );
};

export default ProductImageModal;
