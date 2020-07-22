import React from 'react';
import './index.css'
import Images from './Images';

function Card(props){
    return(
        <>
        <div className="cards">
            <div className="card">
               <Images imgsrc = {props.imgsrc} />
                <div className="card_info">
                    <h3 className="card_catigery">{props.title}</h3>
                    <span className="card_title">{props.sname}</span><br></br>
                    <a href={props.link} target="_blank"><button>Watch Now</button></a>
                </div>
            </div>
        </div>
        
</>
    );
}

export default Card;