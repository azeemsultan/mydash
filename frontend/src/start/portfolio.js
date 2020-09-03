import React from 'react';

import image4 from '../assets/img/port.jpeg';
import image5 from '../assets/img/lap.jpg';
import image6 from '../assets/img/graphic.jpg';
import styles from './port.css';

let Portfolio = ({portfolioLinks}) =>{

    return(
        <div>
  <div className="container">
    <div className="row">
         {portfolioLinks && portfolioLinks.map(({title,caption},index)=>
         <div className="col-md-4 col-sm-6 portfolio-item">
         <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1">
           <div className="portfolio-hover">
             <div className="portfolio-hover-content">
               <i className="fa fa-plus fa-3x"></i>
             </div>
           </div>
           <img className="img-fluid" src={image5} alt=""/>
         </a>
         <div className="portfolio-caption">
           <h4>{title}</h4>
    <p className="text-muted">{caption}</p>
         </div>
       </div>
       )
         }
       
  </div>
  </div>
</div>
    )
    }

    export default Portfolio;

    