import React, { Component } from 'react';
import Widecard from '../components/Widecard';
import UserHeader from '../components/UserHeader';
import Social from '../components/Social';
import hb from '../imgs/hb.png';
import uh from '../imgs/uh.jpg';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0,
            // width: 100%
        }}
    />
);

class Education extends Component {
    render() {
        return (
            <div className="condiv">
            <div><UserHeader /></div>
            <br></br>
            <ColoredLine />
                <h1 className="subtopic">Education</h1>
            <ColoredLine />
            <img src={hb} alt="HB" className="logo"></img>
            <Widecard title="Certificate in Software Engineering" where="Hackbright Academy" from="February" to="May 2021"/>
            <ColoredLine />
            <img src={uh} alt="UH" className="logo"></img>
            <Widecard title="BS Biology | Minor Astronomy" where="University of Hawaiʻi at Mānoa" from="2016" to="2020"/>
            <div><Social /></div>
        </div>
        )
    }
}
export default Education