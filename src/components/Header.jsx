import React from "react";

export default function Header({ name="Your Name", profession="profession", src}) {
    


    return (
        <div className="header-container">
            <div className="header-left">
                <img src="{src}" alt="picture" />
            </div>
            <div className="header-right">
            <h1>{name}</h1>   
            <h2>{profession}</h2>
            </div>
        </div>
    )
}