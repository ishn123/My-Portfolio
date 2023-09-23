import React from 'react'
import './Cards.css'
function WorkCards({title,para,imageurl,cardText,backcolor}) {
  return (
    <div>
       <div class="card-container-product">
        <div class="card">
          <h2>{title}</h2>
          <i class="fas fa-arrow-right"></i>
          <p>{para}</p>
          <div class="pic" style={{backgroundImage:`url(${imageurl})`}}></div>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
         
          <button style={{backgroundColor:`${backcolor}`}}>
          </button>
        </div>
          <div class="card card2">
            <div class="card-text">{cardText}</div>
            <div class="card-tags">
                <div class="card-tag-text">HTML</div>
                <div class="card-tag-text">CSS</div>
                <div class="card-tag-text">JavaScript</div>
                <div class="card-tag-text">MERN</div>
                <div class="card-tag-text">Responsive</div>
             </div>
            <ul>   
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
        </div>
    </div>
    </div>
  )
}

export default WorkCards;
