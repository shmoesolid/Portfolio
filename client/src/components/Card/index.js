import React from "react";
import "./style.css";

export function Card({children, extClass=""})
{
    return (
        <div className={"card " + extClass} >
            <CardBody>
                {children}
            </CardBody>
        </div>
    );
}

export function CardBody({children})
{
    return <div className="card-body">{children}</div>;
}

export function CardTitle({title, extClass})
{
    return <h5 className={"card-text " + extClass}>{title}</h5>;
}

export function CardThumb(props)
{
    return (
        <div className="card-text text-center">
            <a href={props.href || props.src} target="_blank" rel="noopener noreferrer">
                <img 
                    class="rounded-lg border border-dark" 
                    alt="thumb to related project"
                    src={props.src} 
                    style={{ width:"240px", height:"240px" }} 
                />
            </a>
        </div>
    );
}

export function CardText({children, left=true})
{
    return <div className={"card-text" + ((left) && " text-left")}>{children}</div>;
}
