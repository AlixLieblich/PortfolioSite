import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Social from '../components/Social'
import UserHeader from '../components/UserHeader';
import Clock from '../components/Clock';


const ColoredLine = ({ color }) => (
    <hr
        style={{
            backgroundColor: color,
            height: 0
        }}
    />
);

class About extends Component {
    render() {
        return (
            <div className="condiv">
                <div><UserHeader /></div>
                {/* <div><Clock/></div>
                <ReactTypingEffect className="typingeffect" text={["Hi, I'm Alix Lieblich!",'I am a Software Engineer']} speed={100} eraseDelay={700}/> */}
            <br></br>
            <ColoredLine />
            <h1 className="subtopic">About Me</h1>
            <ColoredLine />
            <h2>Hey there!</h2>
            <br></br>
            <h2>I'm Alix Lieblich</h2>
            {/* <br></br> */}
            <h3>Full Stack Software Engineer</h3>
            <br></br>
            <h4>Bio</h4>
            <p>When her childhood dream job of Interplanetary Stewardess (for traveling to vacation homes on different planets) was still not available in time, Alix decided to pursue scientific interests in the fields of biology and astronomy at the University of Hawaiʻi at Mānoa. From conducting analytical research on plant microscope slides, to conducting research on data for the evolution of distant galaxies, Alix fell in love with the computer science aspect of her work. While her dream position working in space tourism is still yet to be created, Alix is determined to shoot for stars by developing a career in the field of Software Engineering combining the skills from her past to creative problem solve for her future.
            </p>
            <br></br>
            <h4>Tech Experience</h4>
            <p>For her Biology research projects, Alix learned R and the programs RevBayes and RAxML. For her Astronomy research, she learned community specific RADEX and Python wrappers. Relevant coursework included a Java course and Observational Astronomy (with a focus on Python and Astropy). Notably, she has completed the Hackbright Software Engineering bootcamp with the skills for a career in full stack including Python, JavaScript, HTML, CSS, SQL, Flask, jQuery, Bootstrap, Jinja, React, and more.</p>
            <Social />
            </div>
            )
        }
    }

export default About