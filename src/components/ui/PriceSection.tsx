const isMobile = window.matchMedia("(max-width: 768px)").matches;
const PriceSection = () => {
  return (
    <div className={`flex justify-between  ${isMobile ? 'items-center' : 'flex-col'}`}>
      <div className="flex gap-2 items-center">
        <h6 className="text-2xl font-bold text-very-dark-blue">$125.00</h6>
        <span className="bg-very-dark-blue text-white py-1 px-2 font-bold rounded-lg">50%</span>
      </div>
      <p className="line-through text-dark-grayish-blue font-bold">$250.00</p>
    </div>
  );
};

export default PriceSection;
