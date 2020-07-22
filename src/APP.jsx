import React from 'react';
import './index.css';
import Header from './Header';
import Card from './Card';
import Sdata from './Sdata';

const APP = () => (
    <>
    <Header/>
  {Sdata.map((val,index) => {
    return(
      <Card  
    imgsrc = {val.imgsrc}
    title = {val.title}
    sname = {val.sname}
    link = {val.link}
  />
    );
  })}
  </>
)

export default APP;