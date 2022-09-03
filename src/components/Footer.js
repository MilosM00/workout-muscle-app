import React from "react";
import "../style/Footer.css";

const Footer = ({muscles}) =>{
    return(

        <div 
            className="footer" 
            style={muscles === true ? {position: "absolute"} : {postion: "relative"}}
        >

            <p className="info-footer">
                Designed and Developed by <a href="https://github.com/MilosM00" target="_blank" rel="noreferrer">MM</a>.
            </p>

        </div>

    );
};

export default Footer;