import React from "react";
import "../style/Lats.css";

const Lats = ({displayMuscles}) =>{
    return(

        <div className="lats">

            <p className="title-lats">Lats Exercises</p>

            <div className="info-lats">
                <p className="title-info-lats">Barbells</p>
                <p>

                </p>
            </div>

            <div className="inline-lats">
                <img src="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bent-over-row.gif?crop=1.00xw:0.845xh;0,0.130xh&resize=320:*" alt="lats" height="300" width="400" />
                <img src="https://fitlifefanatics.com/wp-content/uploads/2020/12/The-T-Bar-Row-How-to-Do-the-T-Bar-Row.gif" alt="lats" height="300" width="400" />
            </div>

            <div className="info-lats">
                <p className="title-info-lats">Dumbbells</p>
                <p>

                </p>
            </div>

            <div className="inline-lats">
                <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Dumbbell-Row.gif?resize=600%2C600&ssl=1" alt="lats" width="400" height="350" />
                <img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_520,h_293/https://builtwithscience.com/wp-content/uploads/2022/05/Chest-Supported-Dumbbell-Row-Lat-Focused-without-bench.gif" alt="lats" width="400" height="350" />
            </div>

            <div className="info-lats">
                <p className="title-info-lats">Bodyweight</p>
                <p>

                </p>
            </div>

            <div className="inline-lats">
                <img src="https://media.giphy.com/media/jVZFKDqkbxDEkbfGUA/giphy.gif" alt="lats" width="400" height="350"/>
                <img src="https://thumbs.gfycat.com/AnnualCostlyBlacknorwegianelkhound-size_restricted.gif" alt="lats" width="500" height="350" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>

    );
};

export default Lats;