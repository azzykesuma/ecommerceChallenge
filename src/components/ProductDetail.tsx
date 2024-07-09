
import PriceSection from "./ui/PriceSection";

const ProductDetail = () => {
  return (
    <section>
      <h3 className="font-bold text-dark-grayish-blue">SNEAKER COMPANY</h3>
      <h4 className="text-3xl font-bold text-very-dark-blue my-4" aria-roledescription="product title">
        Fall Limited Edition Sneakers
      </h4>
      <p className="text-dark-grayish-blue mb-4" aria-roledescription="product-description">
        Collections Men Women About Contact Sneaker Company Fall Limited Edition
        Sneakers These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they’ll withstand
        everything the weather can offer.
      </p>
      <PriceSection />
    </section>
  );
};

export default ProductDetail;
