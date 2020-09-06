import React from "react";
import "./style.css";

export function Card({children, title})
{
    return (
        <div className="card">
            <CardBody>
                <CardTitle title={title} />
                <CardText>
                    {children}
                </CardText>
            </CardBody>
        </div>
    );
}

export function CardBody({children})
{
    return <div className="card-body">{children}</div>;
}

export function CardTitle(props)
{
    return (
        <div>
            <h5 className="card-title">{props.title}</h5>
            <hr />
        </div>
    );
}

export function CardText({children})
{
    return <div className="card-text">{children}</div>;
}
