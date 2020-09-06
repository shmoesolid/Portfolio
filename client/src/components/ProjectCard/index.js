import React from "react";
import { Card, CardThumb, CardTitle, CardText } from "../Card";

function ProjectCard(props)
{
    return (
        <Card extClass="force-white">
            <CardThumb href={props.data.hrefDeployed} src={props.data.thumb} />
            <hr />
            <CardTitle extClass="text-center" title={props.data.title} />
            <CardText>
                <p>{props.data.text}</p>
                {
                    (props.data.hrefGithub !== "") 
                    && <a href={props.data.hrefGithub} target="_blank" rel="noopener noreferrer">Link to GitHub Repo</a>
                }
            </CardText>
        </Card>
    );
}

export default ProjectCard;
