import { useSwiper } from 'swiper/react'
import iconNext from '../../assets/images/icon-next.svg'
import iconPrev from '../../assets/images/icon-previous.svg'

const buttonClass = 'flex items-center justify-center rounded-full bg-white h-8 w-8'
export const SwiperButtonNext = () => {
    const swiper = useSwiper()
  return (
    <button className={buttonClass} onClick={() => swiper.slideNext()}> 
        <img className='w-2' src={iconNext} alt='next-slide' />
    </button>
  )
}


export const SwiperButtonPrev = () => {
  const swiper = useSwiper()
return (
  <button className={buttonClass} onClick={() => swiper.slidePrev()}> 
      <img className='w-2' src={iconPrev} alt='next-slide' />
  </button>
)
}

