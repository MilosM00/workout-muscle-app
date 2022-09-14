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
                <img src="https://thumbs.gfycat.com/BleakDistortedCrocodile-size_restricted.gif" alt="calves" height="300" width="500" />
                <img src="https://miro.medium.com/max/1400/1*l-A7PP7r1NNlrKd2sF4jRg.gif" alt="calves" height="300" width="500" />
            </div>

            <div className="info-calves">
                <p className="title-info-calves">Dumbbells</p>
                <p>

                </p>
            </div>

            <div className="inline-calves">
                <img src="https://thumbs.gfycat.com/HarmlessSophisticatedFairyfly-size_restricted.gif" alt="calves" width="400" height="350" />
                <img src="https://thumbs.gfycat.com/NearShamelessFlee-max-1mb.gif" alt="calves" width="400" height="350" />
            </div>

            <div className="info-calves">
                <p className="title-info-calves">Bodyweight</p>
                <p>

                </p>
            </div>

            <div className="inline-calves">
                <img src="https://thumbs.gfycat.com/EntireThatGazelle-max-1mb.gif" alt="calves" width="400" height="350"/>
                <img src="https://i.pinimg.com/originals/ff/17/23/ff1723a0aafc3cd3054cefb2cde3f417.gif" alt="calves" width="500" height="350" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>
            
        </div>

    );
};

export default Calves;