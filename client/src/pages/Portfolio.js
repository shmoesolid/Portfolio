import React from "react";
import { Col, Row } from "../components/Grid";
import { Card, CardTitle, CardText } from "../components/Card";
import projectData from "../projectData";
import ProjectCard from "../components/ProjectCard";


function Portfolio() {

    var rows = [];
    var columns = [];

    function renderRow(_columns)
    {
        columns = []; // reset columns
        return <Row>{_columns}</Row>;
    }

    projectData.forEach( 
        (data, index) => {
            var even = (index % 2 === 0) ? true : false;

            columns.push(
                <Col size="md-6" >
                    <ProjectCard data={data} />
                </Col>
            );

            if (!even || index === (projectData.length-1)) 
                rows.push( renderRow(columns) );
        }
    );

    return (
        <Card>
            <CardTitle title="Portfolio" extClass="text-left" />
            <hr />
            <CardText>
                {rows}
            </CardText>
        </Card>
    );
}

export default Portfolio;
