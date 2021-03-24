import React from "react";
import { Card, CardTitle, CardText } from "../components/Card";

function About() {
    return (
        <Card>
            <CardTitle title="About" extClass="text-left" />
            <hr />
            <CardText>
                <img 
                    className ="float-left rounded" 
                    alt = "Shane Koehler"
                    src="img/thumb_me.jpg" 
                    style={{
                        height: "150px",
                        width: "150px",
                        marginRight: "20px"
                    }}
                />
                <p style={{fontSize: "40px"}} >
                    <a href="https://www.linkedin.com/in/shane-koehler-0033091a4/" target="_blank"><i className="fab fa-linkedin p-1"></i></a>
                    <a href="https://github.com/shmoesolid/" target="_blank"><i className="fab fa-github-square p-1"></i></a>
                    <a href="shane_koehler_resume.pdf" target="_blank"><i className="far fa-file p-1"></i></a>
                    <a href="mailto:shmoesolid@gmail.com" target="_blank"><i className="far fa-envelope p-1"></i></a>
                </p>
                <p>
                    I'm currently a deputy constable with Bexar County. I've been in law enforcement for over 10 years.  
                    I am also a self-taught programming hobbyist for 20 years.
                </p>
                <p>
                    I've performed a lot of free-lance work over the years.  I've developed many types of software and 
                    websites in various languages and have a video game developed currently in the alpha stage. It is set 
                    to release on Steam soon (links to the Steam page will soon be displayed).
                </p>
                <p>
                    Up until now, all my knowledge has been self-taught with no formal education.  Due to this, I 
                    enrolled in UTSA's full-stack web development certificate program, which is set to be completed 
                    in September 2020.
                </p>
            </CardText>
        </Card>
    );
}

export default About;
