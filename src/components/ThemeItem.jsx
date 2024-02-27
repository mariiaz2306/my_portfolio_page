import React from 'react'

const ThemeItem = ({color, img, changeColor}) => {
  return (
   <img src={img}
    alt="" 
    onClick={() => changeColor(color)} className="theme__img" />
  )
}

export default ThemeItem