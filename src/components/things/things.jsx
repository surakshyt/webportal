import React, { Component } from 'react';
import './things.css';
import PlaceBlock from '../places-block/places-block';
import cycle from '../../images/cyclingjpg.jpg';
import food from '../../images/food.jpg';
import meditation from '../../images/meditation.jpg';
import zoo from '../../images/zoo.jpg';
import camp from '../../images/camping.jpg';
import shop from '../../images/thamel.jpg';
class Things extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (<section id="things">
                <h1>Things to do in Kathmandu</h1>
            <div className="things-list">
                <PlaceBlock src={cycle} heading="cycling" title="" />
                <PlaceBlock src={shop} heading="shopping" title=""/>
                <PlaceBlock src={meditation} heading="meditation" title="" />
                <PlaceBlock src={zoo} heading="zoo" title=""/>
                <PlaceBlock src={camp} heading="camping" title="" />
                <PlaceBlock src={food} heading="street food" title=""/>


                </div>

        </section> );
    }
}
 
export default Things;