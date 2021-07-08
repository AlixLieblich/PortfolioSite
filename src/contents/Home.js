import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../imgs/alix.jpg';
import Social from '../components/Social'
import UserHeader from '../components/UserHeader';
import Clock from '../components/Clock';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0
        }}
    />
);

class Home extends Component {
    render() {
        return (
            
            <div className="condiv home">
                <div><UserHeader /></div>
                <ColoredLine />
                <h3>Alix Lieblich's Portfolio Site</h3>
                <p>Fun bit of React:</p>
                <div><Clock/></div>
            <img src={profilepic} alt="ProfilePic" className="profilepic"></img>
            <br></br>
            <ReactTypingEffect className="typingeffect" text={["Hi, I'm Alix Lieblich!",'I am a Software Engineer']} speed={100} eraseDelay={700}/>
            <Social />
            </div>
            )
        }
    }
    
    export default Home