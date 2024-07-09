import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import imageOne from '../assets/images/image-product-1.jpg'
import imageTwo from '../assets/images/image-product-2.jpg'
import imageThree from '../assets/images/image-product-3.jpg'
import imageFour from '../assets/images/image-product-4.jpg'
import { Navigation } from 'swiper/modules';
import {SwiperButtonNext, SwiperButtonPrev} from './ui/SwiperButtons';

const SliderImage = () => {
    const images = [imageOne, imageTwo, imageThree, imageFour]
return (
    <Swiper
        slidesPerView={1}
        modules={[Navigation]}
        className='relative h-[300px] z-0'
    >
        {images.map((image, index) => (
            <SwiperSlide key={index}>
                <img src={image} alt="product" className='' />
                <div className="absolute inset-0 flex items-center justify-between px-4">
                    <SwiperButtonPrev />
                    <SwiperButtonNext />
                </div>
            </SwiperSlide>
        ))}
    </Swiper>
)
}

export default SliderImage
