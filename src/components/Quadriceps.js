import React from "react";
import "../style/Quadriceps.css";

const Quadriceps = ({displayMuscles}) =>{
    return(

        <div className="quadriceps">

            <p className="title-quadriceps">Quadriceps Exercises</p>

            <div className="info-quadriceps">
                <p className="title-info-quadriceps">Barbells</p>
                <p>

                </p>
            </div>

            <div className="inline-quadriceps">
                <img src="" alt="quadriceps" width="500" height="350" />
                <img src="" alt="quadriceps" width="400" height="350" />
            </div>

            <div className="info-quadriceps">
                <p className="title-info-quadriceps">Dumbbells</p>
                <p>

                </p>
            </div>

            <div className="inline-quadriceps">
                <img src="" alt="quadriceps" width="350" height="400" />
                <img src="" alt="quadriceps" width="350" height="400" />
            </div>

            <div className="info-quadriceps">
                <p className="title-info-quadriceps">Bodyweight</p>
                <p>

                </p>
            </div>

            <div className="inline-quadriceps">
                <img src="" alt="quadriceps" width="400" height="300" />
                <img src="" alt="quadriceps" width="300" height="350" />
            </div>

            <button
                className="choose-button"
                onClick={displayMuscles}
            >
                Choose Other Muscle
            </button>

        </div>

    );
};

export default Quadriceps;