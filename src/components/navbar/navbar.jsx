import React, { Component } from 'react';
import './navbar.css';
class Navbar extends Component {
    state = {  }
    render() { 
        return ( <div className="navbar">
                <nav>
                    
                <input type="checkbox" id= "check"/>
                    <label for="check" className="checkbtn">
                        <i class= "fas fa-bars" />
                        </label>


                <ul>
               
                    <li> <a href= "#"> Home </a></li>
                    <li> <a href= "#"> Places to vist </a></li>
                    <li> <a href= "#"> Things to do </a></li>
                    <li> <a href= "#"> Plan your trip </a></li>
                    
                    <li> <a href= "#"> Guidelines </a></li>
                    <li> <a href= "#"> Contact us </a></li>
                    
                    </ul>

                 </nav>
              
            






            </div> 
            
            
            
            
            
            );
    }
}
 
export default Navbar;