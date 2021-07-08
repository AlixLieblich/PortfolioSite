import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import profilepic from '../imgs/alix.jpg';
import Social from '../components/Social'
import UserHeader from '../components/UserHeader';
import Clock from '../components/Clock';
import SnakeApp from '../snakeGame/SnakeIndex';
import Game from './Game';

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
                <h3>Welcome to my Portfolio! Feel free to stay a while!</h3>
                <ColoredLine />
                <p>React Digital Clock:</p>
                <div><Clock/></div>
            <br></br>
            <br></br>
            <ColoredLine />
            <p>React Tic Tac Toe</p>
            <Game />
            {/* <div><SnakeApp /></div> */}
            {/* <ReactTypingEffect className="typingeffect" text={["Hi, I'm Alix Lieblich!",'I am a Software Engineer']} speed={100} eraseDelay={700}/> */}
            <Social />
            </div>
            )
        }
    }
    
    export default Home