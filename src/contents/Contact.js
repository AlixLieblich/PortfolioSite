import React, { Component } from 'react';
import Social from '../components/Social';
import UserHeader from '../components/UserHeader';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0
        }}
    />
);

class Contact extends Component {
    render() {
        return (
            <div className="condiv">
                <div><UserHeader /></div>
            <h1 className="subtopic">Contact Me</h1>
            <ColoredLine />
            <h3>Email  :   alixlieblich@gmail.com</h3>
            <Social />
            </div>
            )
        }
    }
    
    export default Contact
