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
                <img src="https://qph.cf2.quoracdn.net/main-qimg-045cebcdaaaa5029198cc6c6f64bd29f" alt="glutes" height="300" width="400" />
                <img src="https://i.imgur.com/IBLtK6y.gif?noredirect" alt="glutes" height="300" width="400" />
            </div>

            <div className="info-glutes">
                <p className="title-info-glutes">Dumbbells</p>
                <p>

                </p>
            </div>

            <div className="inline-glutes">
                <img src="https://i.pinimg.com/originals/be/62/6e/be626e0cfe7063c6afcf429d67bbc508.gif" alt="glutes" width="400" height="350" />
                <img src="https://images.squarespace-cdn.com/content/v1/5b99e55396d455ee78c764fc/1568762859950-US1PZ3YGX2IS8HAODBKI/one-leg-deadlift.gif" alt="glutes" width="400" height="350" />
            </div>

            <div className="info-glutes">
                <p className="title-info-glutes">Bodyweight</p>
                <p>

                </p>
            </div>

            <div className="inline-glutes">
                <img src="https://i.pinimg.com/originals/bd/78/80/bd78802d06f3a74df2311a66e9b89a34.gif" alt="glutes" width="400" height="350"/>
                <img src="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bodyweight-squat.gif?resize=480:*" alt="glutes" width="500" height="350" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>

    );
};

export default Glutes;