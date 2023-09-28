import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './Swiper.css';

import { Navigation,Autoplay } from 'swiper/modules';

export default function Swipe(props) {
  const arr = [props.link1,props.link2,props.link3,props.link4,props.link5 ];
 
  return (
    <>
      <Swiper navigation={false} autoplay={true} modules={[Navigation,Autoplay]} className="mySwiper">

        {
          arr.map((value,index)=>(
            value?
            
              <SwiperSlide><img src={value} alt="" /></SwiperSlide> : ""
          ))
        }


      </Swiper>
    </>
  );
}
