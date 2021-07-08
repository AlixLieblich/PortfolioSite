import React, { Component } from 'react';
import UserHeader from '../components/UserHeader';
import ReactPlayer from "react-player";
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


class Projects extends Component {
    render() {
        return (
            <div className="condiv">
                <div><UserHeader /></div>
                <br></br>
                <ColoredLine />
            <h1 className="subtopic">My Projects</h1>
            <br></br>
            <ColoredLine />
            <h2>National Treasures</h2>
            <h3>May 2021</h3>
            <h4>Hackbright Academy Fullstack Capstone Project</h4>

            <br></br>
            <h4>Project Description</h4>
            <p>National Treasures gives users a tool and community in which to pursue hiking endeavors throughout the United States National Parks. With the usage of SQLAlchemy queries, users have the option to make friends, make hiking goals, and find trails to add to trail wishlists and hiking logs. Using the Twilio, Google Maps, and WeatherMap API's, users are able to receive text message information about their wishlist trails and view the current weather and location of trails of interest. By using National Treasures, users are able to to organize their National Park experience in a one stop shop web application.
            </p>
            <br></br>
            <h4>Tech Stack Used</h4>
            <p>Python, Javascript, HTML, CSS, SQLAlchemy, Bootstrap, Flask, Flask Login, PostgresSQL, Jinja</p>
            <br></br>
            <h4>National Treasures Demo</h4>
            <div>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=mHVrbK1xJJw"
                />
            </div>
            <h4>Deployment for National Treasures under construction!</h4>
            <h4> Visit the GitHub Repo Here:</h4>
            <a
              href={`https://github.com/AlixLieblich/hb-fullstack-hike-project`}
              target="_blank"
              rel="noreferrer noopener"
            >
              National Treasures GitHub Repo
            </a>
            <br></br>
            <br></br>

            <ColoredLine />
            <h2>Astronomical Images Reprojection</h2>
            <h3>Fall 2020</h3>
            <h4>Astronomy class Python project</h4>
            <br></br>
            <h4>Project Description</h4>
            <p>Semester long project to process raw astronomical images into reprojected images for astronomy class.</p>
            <br></br>
            <h4>Tech Stack</h4>
            <p>Python, Astropy, Matplotlib</p>
            <br></br>
            <h4>GitHub Repo:</h4>
            <a
              href={`https://github.com/AlixLieblich/Astronomical_Images_Reproject_Project`}
              target="_blank"
              rel="noreferrer noopener"
            >Image Reprojection Repo</a>
            <br></br>
            <br></br>

            <ColoredLine />
            <h2>Photosynthesis Bioinformatics Research Project</h2>
            <h3>January- December 2020</h3>
            <h4>Undergraduate Research Project studying evolution of CAM photosynthesis.</h4>
            <br></br>
            <h4>Project Description</h4>
            <p>Working in R in order to analyze data to determine evolution of specific type of photosynthesis.</p>
            <br></br>
            <h4>Tech Stack</h4>
            <p>R, RAxML, REVBAYES</p>
            <br></br>
            <h4>Published Paper:</h4>
            <p>Under construction, will be published in the near future!</p>
            <br></br>
            <h4>GitHub Repo:</h4>
            <a
              href={`https://github.com/AlixLieblich/CAM-Research-stats_work_in_R`}
              target="_blank"
              rel="noreferrer noopener"
            >Bioinformatics Project Repo</a>
            <br></br>
            <br></br>

            <ColoredLine />
            <h2>Evolution of Distant Galaxies Research Project</h2>
            <h3>Fall 2020</h3>
            <h4>Undergraduate Research Project analyzing data to study the evolution of distant galaxies.</h4>
            <br></br>
            <h4>Project Description</h4>
            <p>Working in Python / Astropy with packages RADEX and Python wrapper, SEDFitter.</p>
            <br></br>
            <h4>Tech Stack</h4>
            <p>Python, Astropy, RADEX, SEDFitter</p>
            <br></br>
            <h4>Published Paper:</h4>
            <p>Under construction, will be published in the near future!</p>
            <br></br>

            <ColoredLine />
            <h2>Choose Your Own Adventure Terminal Game</h2>
            <h3>February 2021</h3>
            <h4>Hackbright Acadmey Prep Course Final Project</h4>
            <a
              href={`https://github.com/AlixLieblich/hb-PrepCourse-FinalProject-ChooseYourOwnAdventureGame`}
              target="_blank"
              rel="noreferrer noopener"
            >Terminal Game</a>
            <br></br>
            <br></br>

            <ColoredLine />
            <h2>Java Donkey Kong Game</h2>
            <h3>Spring 2018</h3>
            <h4>Final project for ICS College course.</h4>
            <a
              href={`https://github.com/AlixLieblich/ICS-111-JavaGame`}
              target="_blank"
              rel="noreferrer noopener"
            >Java Game</a>
            <br></br>
            <br></br>
            
            <ColoredLine />
            <h2>This Portfolio Site!</h2>
            <h3>July 2021</h3>
            <h4>Made with love using React!</h4>
            <a
              href={`https://github.com/AlixLieblich/hb-fullstack-hike-project`}
              target="_blank"
              rel="noreferrer noopener"
            ></a>
            <Social />
            </div>
            )
        }
    }
    
export default Projects