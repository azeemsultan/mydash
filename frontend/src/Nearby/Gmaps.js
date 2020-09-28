import React, {Component} from 'react';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';

class Gmaps extends Component {
    
    render(){
    return ( 
        <div>
        <Map
        containerStyle = {{
              
       
        }}
         google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
        <InfoWindow onClose={this.onInfoWindowClose}>
           
        </InfoWindow>
      </Map>
      </div>
    );
}
}
 

export default GoogleApiWrapper({
    apiKey: ("AIzaSyDNVggQ3tnLiKjb9PtZKhMpBkfwuZdbFiQ")
  })(Gmaps)