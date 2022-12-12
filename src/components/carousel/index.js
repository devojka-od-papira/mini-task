import React, { useState } from 'react';
import { useBreakpoint } from 'light-react-grid'
import { ChevronLeft, ChevronRight } from 'react-feather'
import Card from "../card";
import "./Carousel.scss";
import Button from "../button";

const Carousel = ({data}) => {
  const [position, setPosition] = useState(0)
  const breakpoint = useBreakpoint()

  const right = () => {
   if(position < data.length) {
     setPosition(position + 1)
   }
  }
  const left = () => {
    if(position > 0) {
      setPosition(position - 1)
    }
  };
  const divideNum = breakpoint === 'sm' ? 3 : 2;

  return (
        <div className='inner-wrapper'>
          <div className='button-wrapper'>
            <Button onClick={left}><ChevronLeft size={30}/></Button>
            <Button onClick={right}><ChevronRight size={30}/></Button>
          </div>
          <div className='carousel' style={{ transform: `translateX(-${position * (window.innerWidth / divideNum )}px)`}}>
            {data.map((item, i)=>{
              return(
                <div key={i} className='box' style={{ width: window.innerWidth / divideNum}}>
                  <Card
                    alt={item.alt}
                    src={item.src}
                    link={item.link}
                    isLarge={item.isLarge}
                    headline={item.headline}
                    subheadline={item.subheadline} />
                </div>
              )
            })}
          </div>
        </div>
  )
}
export default Carousel;