import React, { Component } from 'react';

import './places-block.css';
class PlacesBlock extends Component {
    state = {  }
    render() { 
        return ( <div className='image'>
            <img className="image-img"src={this.props.src} alt=""/>
            <div className="image-overlay">
                <div className="image-title">{this.props.heading}</div>
                <p className="image-description">
                    <a href={this.props.link}>{this.props.title}</a>
                    <a href="#"> Information</a>
                </p>
            </div>
            

        </div> );
    }
}
 
export default PlacesBlock;