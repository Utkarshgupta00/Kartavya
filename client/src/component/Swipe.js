import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import './Swiper.css';

import { Navigation } from 'swiper/modules';

export default function Swipe(props) {
  const arr = [props.link1,props.link2 ];
 
  return (
    <>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">

        {
          arr.map((value,index)=>(
              <SwiperSlide><img src={value} alt="" /></SwiperSlide>
          ))
        }


      </Swiper>
    </>
  );
}
