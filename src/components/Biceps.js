import React from "react";
import "../style/Biceps.css";

const Biceps = ({displayMuscles}) =>{
    return(

        <div className="biceps">

            <p className="title-biceps">Biceps Exercises</p>

            <div className="info-biceps">
                <p className="title-info-biceps">Barbells</p>
                <p>
                    The best exercises with barbells for the biceps are those two exercises. <br />
                    Both of the exercises strike very well and those are for advanced exercisers.
                </p>
            </div>

            <div className="inline-biceps">
                <img src="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/1curl.gif?resize=480:*" alt="biceps" height="400" width="500" />
                <img src="https://c.tenor.com/nLodhTy5DjwAAAAC/bodybuilding-biceps.gif" alt="biceps" height="400" width="400" />
            </div>

            <div className="info-biceps">
                <p className="title-info-biceps">Dumbbells</p>
                <p>
                    The best exercises with dumbbells for the biceps are those two exercises. <br />
                    Both of the exercises strike very well and those are for intermediate exercisers.
                </p>
            </div>

            <div className="inline-biceps">
                <img src="https://i.pinimg.com/originals/cf/62/37/cf623769e8f9a19c467b04818332edbd.gif" alt="biceps" width="500" height="400" />
                <img src="https://thumbs.gfycat.com/AnnualQuerulousHen-size_restricted.gif" alt="biceps" width="500" height="400" />
            </div>

            <div className="info-biceps">
                <p className="title-info-biceps">Bodyweight</p>
                <p>
                    The best exercises with bodyweight for the biceps are those two exercises. <br />
                    Both of the exercises strike very well and those are for beginer exercisers. <br />
                    You can hold some weight to make it harder.
                </p>
            </div>

            <div className="inline-biceps">
                <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/chinup-1457101678.gif?resize=480:*" alt="biceps" width="350" height="400"/>
                <img src="https://hips.hearstapps.com/hmg-prod/images/workouts/2016/03/closegripchinup-1456956391.gif" alt="biceps" width="350" height="400" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>

    );
};

export default Biceps;