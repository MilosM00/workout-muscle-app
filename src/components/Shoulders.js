import React from "react";
import "../style/Shoulders.css";

const Shoulders = ({displayMuscles}) =>{
    return(

        <div className="shoulders">

            <p className="title-shoulders">Shoulders Exercises</p>

            <div className="info-shoulders">
                <p className="title-info-shoulders">Barbells</p>
                <p>
                    The best exercises with barbells for shoulders are shoulder press and smith machine shoulder press. <br />
                    Both of the exercises strike very well and it is for advanced exercisers.
                </p>
            </div>

            <div className="inline-shoulders">
                <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/12/Overhead-press-exercise.gif?resize=600%2C600&ssl=1" alt="shoulders" height="400" width="400" />
                <img src="https://bodybuilding-wizard.com/wp-content/uploads/2018/09/smith-machine-shoulder-press-exercise-bodybuilding.gif" alt="shoulders" height="400" width="400" />
            </div>

            <div className="info-shoulders">
                <p className="title-info-shoulders">Dumbbells</p>
                <p>
                    The best exercises with dumbbells for shoulders are shoulder press and shoulder flys. <br />
                    Both of the exercises strike very well and it is for intermediate exercisers.
                </p>
            </div>

            <div className="inline-shoulders">
                <img src="https://thumbs.gfycat.com/HeftyShyHarpseal-size_restricted.gif" alt="shoulders" width="450" height="400" />
                <img src="https://thumbs.gfycat.com/FlimsyArcticHart-size_restricted.gif" alt="shoulders" width="450" height="400" />
            </div>

            <div className="info-shoulders">
                <p className="title-info-shoulders">Bodyweight</p>
                <p>
                    The best exercises with bodyweight for shoulders are dips and shoulder pike. <br />
                    Both of the exercises strike very well and it is for beginners exercisers.
                </p>
            </div>

            <div className="inline-shoulders">
                <img src="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dips.gif" alt="shoulders" width="400" height="350"/>
                <img src="https://thumbs.gfycat.com/AllAbleAnura-size_restricted.gif" alt="shoulders" width="500" height="350" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>

    );
};

export default Shoulders;