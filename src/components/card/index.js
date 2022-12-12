import React from 'react';
import './Card.scss';
import CustomLink from "../link";
import { ArrowUpRight } from "react-feather";
import {useBreakpoint} from "light-react-grid";
const Card = ({link, subheadline, headline , src, alt, isLarge}) => {

  const breakpoint =useBreakpoint();
  return(
    <div className='card'>
        <img className={isLarge ? "largeImg" : 'smallImg'} src={src} alt={alt}/>
        <div>
          {isLarge && <h3>{subheadline}</h3>}
          <h2>{headline}</h2>
          <CustomLink link={link}>More read... <ArrowUpRight size={ breakpoint === 'lg' ? 18 : breakpoint === 'md' ? 15 : 9} /></CustomLink>
        </div>
    </div>
  )
}
export default Card;