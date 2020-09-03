import React from 'react';
import image1 from '../assets/img/electrician.png';
import image2 from '../assets/img/maid.png';


let Services = ({servicesLinks}) =>{

    return(
        <div>
  <div className="container">
    <div className="row">
      <div className="col-lg-12 text-center">
        <h2 className="section-heading text-uppercase">Services</h2>
        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
      </div>
    </div>
    <div className="row">
    {servicesLinks && servicesLinks.map(({title,caption,image},index)=>
        <div className="col-sm-4">
          <div className="team-member">
            <img className="mx-auto rounded-circle" src={image2} alt=""/>
            <h4>{title}</h4>
            <p className="text-muted">{caption}</p>
          </div>
        </div>
  
    )}
    </div>
  </div>
        </div>
    )
}

export default Services;