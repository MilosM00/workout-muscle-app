import React from "react";
import "../style/Calves.css";

const Calves = ({displayMuscles}) =>{
    return(

        <div className="calves">

            <p className="title-calves">Calves Exercises</p>

            <div className="info-calves">
                <p className="title-info-calves">Barbells</p>
                <p>

                </p>
            </div>

            <div className="inline-calves">
                <img src="" alt="calves" height="300" width="400" />
                <img src="" alt="calves" height="300" width="400" />
            </div>

            <div className="info-calves">
                <p className="title-info-calves">Dumbbells</p>
                <p>

                </p>
            </div>

            <div className="inline-calves">
                <img src="" alt="calves" width="400" height="350" />
                <img src="" alt="calves" width="400" height="350" />
            </div>

            <div className="info-calves">
                <p className="title-info-calves">Bodyweight</p>
                <p>

                </p>
            </div>

            <div className="inline-calves">
                <img src="" alt="calves" width="400" height="350"/>
                <img src="" alt="calves" width="500" height="350" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>
            
        </div>

    );
};

export default Calves;