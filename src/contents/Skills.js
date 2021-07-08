import React, { Component } from 'react';
import UserHeader from '../components/UserHeader';
import Social from '../components/Social';

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: color,
            backgroundColor: color,
            height: 0
        }}
    />
);

class Skills extends Component {
    constructor(props)
    {
        super(props);
        this.state={
            'myskills':['PYTHON','HTML','CSS','JS','REACT JS','FLASK','JQUERY','BOOTSTRAP','JINJA','SQL','R','RAXML',
            'REVBAYES','RADEX', 'ASTROPY']
        };
    }

    render() {
        return (
            <div className="condiv skills">
                <div><UserHeader /></div>
                <div className="condiv-bullets">
            <h1 className="subtopic">Skills</h1>
            <ColoredLine />
            <br>
            </br>
            <br></br>
            <ul>
            {this.state.myskills.map((value)=>{
                return <li>{value}</li>
            })}
            </ul>
            </div>
            <Social />
            </div>
            )
        }
    }
    
    export default Skills