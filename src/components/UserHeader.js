import React, { Component } from 'react';
import './UserHeader.css'
import profilepic from '../imgs/alix.jpg';

class UserHeader extends Component {
    render() {
        return (
            <div>
            <div><img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <div class="header-text">
            <h1 className="subtopic">Alix Lieblich</h1>
            <a
              href={`alixlieblich@gmail.com`}
              target="_blank"
              rel="noreferrer noopener"
            >
              alixlieblich@gmail.com
            </a>
            <h4>Coding in the San Francisco Bay Area</h4>
            <h4>2021 Hackbright Academy Graduate</h4>
            <h5>Following passion for software development.</h5>
            </div>
            </div>
            </div>
            )
        }
    }
    
    export default UserHeader