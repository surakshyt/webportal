import React, { Component } from 'react';
import PlacesBlock from '../places-block/places-block';
import pashupati from '../../images/pashupati.jpg';
import kritipur from '../../images/kritipur.jpg';
import shambhu from '../../images/swayambhu.jpeg';
import pds from '../../images/pds.jpeg';
import bds from '../../images/bds.jpg';
import kds from '../../images/kds.jpg';
import './places.css';

class Places extends Component {
    state = {  }
    render() { 
        return (<section id="places">
                
                <h1>Places to visit in Kathmandu</h1>


                <div className="places-list">
                <PlacesBlock heading="PashupatiNath" src={pashupati} title= " View Offline Map" link="https://cutt.ly/tbvNvHb" />
               <PlacesBlock heading="kritipur" src={kritipur} title= " View Offline Map"link="https://cutt.ly/HbvNRBU"/>
               <PlacesBlock heading="Swayambhunath" src ={shambhu} title= " View Offline Map"link="https://cutt.ly/YbvNATP" />
               <PlacesBlock heading="Swayambhunath" src ={bds} title= " View Offline Map"link="https://cutt.ly/YbvNATP" />
               <PlacesBlock heading="Patan Durbar" src ={pds}title= " View Offline Map" link="https://cutt.ly/3bvNLP0"/>
               <PlacesBlock heading="Kathmandu Durbar" src ={kds} title= " View Offline Map"link="https://cutt.ly/hbvNBmn"/>
            

                </div>
            



        </section>  );
    }
}
 
export default Places;



