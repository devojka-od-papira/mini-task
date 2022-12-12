import React from "react";
import './Link.scss'

const CustomLink = ({ children, link}) =>{

  return(
    <div className='wrapper'>
      <a className='link' href={link} target='_blank'>{children}</a>
    </div>
  )
}
export default CustomLink;