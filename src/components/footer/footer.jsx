import React, { Component } from 'react';
import './footer.css';
class Footer extends Component {
    state = {  }
    render() { 
        return ( <section id="footer">
                <ul>
                    <li> <a href="#mainpage">Home</a> </li>
                    <li> <a href="#things">Things to do</a> </li>
                    <li> <a href="#places"> Places to visit</a> </li>
                    <li> <a href="#guidelines"> Guidelines</a> </li>




                    </ul>
                    <div className="icons">
                   <a href=""><i class="fab fa-facebook"></i></a>
                   <a href=""><i class="fab fa-youtube"></i></a>
                    <a href=""><i class="fab fa-instagram"></i></a>
                   <a href=""><i class="fab fa-github"></i></a>
                    </div>
                 <p>   &copy; Copyright 2021 Online portal
                     </p>

                






        </section> );
    }
}
 
export default Footer;