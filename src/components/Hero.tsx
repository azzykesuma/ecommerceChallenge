import SliderImage from "./SliderImage"
import SliderDesktop from "./SliderDesktop";

const Hero = () => {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  return (
    <section className={isMobile ? undefined : 'w-1/2'}>
      {isMobile ? <SliderImage /> : <SliderDesktop />}
    </section>
  )
}

export default Hero
