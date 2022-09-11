import React from "react";
import "../style/Glutes.css";

const Glutes = ({displayMuscles}) =>{
    return(

        <div className="glutes">

            <p className="title-glutes">Glutes Exercises</p>

            <div className="info-glutes">
                <p className="title-info-glutes">Barbells</p>
                <p>

                </p>
            </div>

            <div className="inline-glutes">
                <img src="" alt="glutes" height="300" width="400" />
                <img src="" alt="glutes" height="300" width="400" />
            </div>

            <div className="info-glutes">
                <p className="title-info-glutes">Dumbbells</p>
                <p>

                </p>
            </div>

            <div className="inline-glutes">
                <img src="" alt="glutes" width="400" height="350" />
                <img src="" alt="glutes" width="400" height="350" />
            </div>

            <div className="info-glutes">
                <p className="title-info-glutes">Bodyweight</p>
                <p>

                </p>
            </div>

            <div className="inline-glutes">
                <img src="" alt="glutes" width="400" height="350"/>
                <img src="" alt="glutes" width="500" height="350" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>

    );
};

export default Glutes;