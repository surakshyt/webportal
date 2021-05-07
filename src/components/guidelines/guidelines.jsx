import React, { Component } from 'react';
import './guidelines.css';
import enjoy from '../../images/tourist-enjoy.jpg';
class Guidelines extends Component {
    state = {  }
    render() { 
        return ( <section id="guidelines">
            <h2>Guidelines to ease your visit in Nepal</h2>
            <img src={enjoy} alt=""/>
            <div className="desc">
            <p> Nepal is one of  the most loved country by the tourist from all around the world
            Many people from all around the world visit people every year.  It is one of the major tourist destination in the world.
            <br/>
            Nepal is one of the country in South Asia. We have different culture and lifestyle from that of western countries
            We follow eastern culture so tourist should careful with the activities that may hurt people. So this guideline 
            suppose to provid the information with the things-to-do and to-not-do in Nepal and also guidelines for your different
            trips and adventures.
            </p>
            <a href="https://nepal.gov.np:8443/NationalPortal/view-page?id=16">
    <button>Guidelines official website</button>
            </a>
            </div>
        </section> );
    }
}
 
export default Guidelines;