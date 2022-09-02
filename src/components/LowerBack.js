import React from "react";
import "../style/LowerBack.css";

const LowerBack = ({displayMuscles}) =>{
    return(

        <div className="lower-back">

            <p className="title-lower-back">Lower Back Exercises</p>

            <div className="info-lower-back">
                <p className="title-info-lower-back">Barbells</p>
                <p>

                </p>
            </div>

            <div className="inline-lower-back">
                <img src="https://www.gymguider.com/wp-content/uploads/2017/10/deadlift-gif.gif" alt="lower-back" height="350" width="400" />
                <img src="https://www.strengthlog.com/wp-content/uploads/2020/10/Sumo-deadlift.gif" alt="lower-back" height="350" width="400" />
            </div>

            <div className="info-lower-back">
                <p className="title-info-lower-back">Dumbbells</p>
                <p>

                </p>
            </div>

            <div className="inline-lower-back">
                <img src="https://medxr.com/wp-content/uploads/2018/11/dumbbelldeadlift-1457044319.gif" alt="lower-back" width="350" height="400" />
                <img src="https://bobbyberk.com/wp-content/uploads/2020/07/KB-Sumo-Deadlift.gif" alt="lower-back" width="350" height="400" />
            </div>

            <div className="info-lower-back">
                <p className="title-info-lower-back">Bodyweight</p>
                <p>

                </p>
            </div>

            <div className="inline-lower-back">
                <img src="http://themusclecouple.files.wordpress.com/2009/05/lower-back-exercises-hyperextensions-back-extensions1.gif?w=320&h=240" alt="lower-back" width="400" height="350"/>
                <img src="https://www.yomeentreno.com/wp-content/uploads/2019/05/Superman-Hold.gif" alt="lower-back" width="500" height="350" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>

    );
}; 

export default LowerBack;