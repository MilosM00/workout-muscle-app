import React from "react";
import "../style/Hamstrings.css";

const Hamstrings = ({displayMuscles}) =>{
    return(

        <div className="hamstrings">

            <p className="title-hamstrings">Hamstrings Exercises</p>

            <div className="info-hamstrings">
                <p className="title-info-hamstrings">Barbells</p>
                <p>

                </p>
            </div>

            <div className="inline-hamstrings">
                <img src="" alt="hamstrings" height="300" width="400" />
                <img src="" alt="hamstrings" height="300" width="400" />
            </div>

            <div className="info-hamstrings">
                <p className="title-info-hamstrings">Dumbbells</p>
                <p>

                </p>
            </div>

            <div className="inline-hamstrings">
                <img src="" alt="hamstrings" width="400" height="350" />
                <img src="" alt="hamstrings" width="400" height="350" />
            </div>

            <div className="info-hamstrings">
                <p className="title-info-hamstrings">Bodyweight</p>
                <p>

                </p>
            </div>

            <div className="inline-hamstrings">
                <img src="" alt="hamstrings" width="400" height="350"/>
                <img src="" alt="hamstrings" width="500" height="350" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>

    );
};

export default Hamstrings;