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
            <h1 className="subtopic">About Alix</h1>
            <ColoredLine />
            <h2>Hey there!</h2>
            <br></br>
            <h2>Alix Lieblich</h2>
            {/* <br></br> */}
            <h3>Full Stack Software Engineer</h3>
            <br></br>
            <h4>Bio</h4>
            <p>When her childhood dream job of Interplanetary Stewardess (for traveling to vacation homes on different planets) was still not available in time, Alix decided to pursue scientific interests in the fields of biology and astronomy at the University of Hawaiʻi at Mānoa. From conducting analytical research on plant microscope slides, to conducting research on data for the evolution of distant galaxies, Alix fell in love with the computer science aspect of her work. While her dream position working in space tourism is still yet to be created, Alix is determined to shoot for stars by developing a career in the field of Software Engineering combining the skills from her past to creative problem solve for her future. Alix is exctied to continue her career by finding her second software engineering position.
            </p>
            <br></br>
            <h4>Expereince</h4>
            <h3>Software Engineer I  <h2>March 2023-September 2023</h2></h3>
            <p>
            <li>Developed and implemented Service Level Agreement Bot (SLAB) which communicated service level agreement (SLA) goals to engineers using Slack API and Jira API via Typescript in React app and within Slack workspace, with focus on setting new company standards of 100% project wide testing and documentation. Implementation led to robust tracking and ticket progress in Jira and clear, reliable, standard ticket SLA reminding system in Slack company workspace.</li>
            <li>Managed and led daily team standups supporting collaboration between on-call supporting engineers and my own platform support engineering team successfully streamlining workflows to fix platform wide bugs or outages.</li>
            <li>Increased company wide code documentation standards via Coda and Asana resulting in 10% increased  coverage.</li>
            <li>Assisted in code translation of dozens of files of the company codebase during transition from Javascript to Typescript.</li>
            <li>Trusted to make direct updates to database.</li>

            </p>
            <h3>Production Support Engineer <h2>September 2021-March 2023</h2></h3>
            <p>
            <li>Met 99% of ticket service level agreement goals.</li>
            <li>Led redesign of ticket triaging system in collaboration with senior engineering management in transition from Linear to Jira resulting in 25%  improved ticket response times. Additionally, created transparent Slack communication channels between engineers and greater company resulting in improved project relations across the entire organization.</li>
            <li>Resolved ~6,000 tickets including ~1,000 software bugs throughout the entire Divvy Homes codebase supporting all engineering teams and collaborating with fellow software engineers and employees across the company. </li>
            <li>Recognized personally by both CEO and CTO, both founders of Divvy Homes, as an approachable and appreciated asset to the entire company for assisting one on one with any engineering related issues with company technology.</li>

            </p>
            <h4>Previous Tech Experience</h4>
            <p>For her Biology research projects, Alix learned R and the programs RevBayes and RAxML. For her Astronomy research, she learned community specific RADEX and Python wrappers. Relevant coursework included a Java course and Observational Astronomy (with a focus on Python and Astropy). Notably, she has completed the Hackbright Software Engineering bootcamp with the skills for a career in full stack including Python, JavaScript, HTML, CSS, SQL, Flask, jQuery, Bootstrap, Jinja, React, and more.</p>
            {/* <a href="https://www.flaticon.com/free-icons/monstera-leaf" title="monstera leaf icons">Monstera leaf icons created by Roksana Beczarska - Flaticon</a> */}
           <h3>For Fun</h3>
           <p>
            Avid:
            <li>Crocheter</li>
            <li>Rock climber</li>
            <li>Snowboarder</li>
            <li>Hiker</li>
            <li>Reader</li>
           </p>
            <Social />
            </div>
            )
        }
    }

export default About