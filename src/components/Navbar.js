import React from "react";
import "../style/Navbar.css";

const Navbar = ({displayMuscles}) =>{
    return(

        <div className="navbar">
            <p 
                className="navbar-logo"
                onClick={displayMuscles}
            >
                WMA 💪
            </p>

            <div className="inline-navbar">
                <input className="navbar-search" type="text" placeholder="Search" />
                <button className="button-search"><i className="fa fa-search"></i></button>
            </div>
        </div>

    );
};

export default Navbar;