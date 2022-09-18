import React from "react";
import "../style/Hamstrings.css";

const Hamstrings = ({displayMuscles}) =>{
    return(

        <div className="hamstrings">

            <p className="title-hamstrings">Hamstrings Exercises</p>

            <div className="info-hamstrings">
                <p className="title-info-hamstrings">Barbells</p>
                <p>
                    The best exercises with dumbbells for hamstrings are those two exercises. <br />
                    Both of the exercises strike very well and those are for advanced exercisers.
                </p>
            </div>

            <div className="inline-hamstrings">
                <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/11/Romanian-deadlift.gif?resize=600%2C600&ssl=1" alt="hamstrings" height="300" width="350" />
                <img src="https://i.imgur.com/IBLtK6y.jpg" alt="hamstrings" height="300" width="400" />
            </div>

            <div className="info-hamstrings">
                <p className="title-info-hamstrings">Dumbbells</p>
                <p>
                    The best exercises with dumbbells for hamstrings are those two exercises. <br />
                    Both of the exercises strike very well and those are for intermediate exercisers.
                </p>
            </div>

            <div className="inline-hamstrings">
                <img src="https://thumbs.gfycat.com/AltruisticBothAmericantoad-size_restricted.gif" alt="hamstrings" width="400" height="350" />
                <img src="https://i.imgur.com/ygy5ie3.gif" alt="hamstrings" width="350" height="350" />
            </div>

            <div className="info-hamstrings">
                <p className="title-info-hamstrings">Bodyweight</p>
                <p>
                    The best exercises with dumbbells for hamstrings are those two exercises. <br />
                    Both of the exercises strike very well and those are for beginners exercisers.
                </p>
            </div>

            <div className="inline-hamstrings">
                <img src="https://i.pinimg.com/originals/bd/78/80/bd78802d06f3a74df2311a66e9b89a34.gif" alt="hamstrings" width="400" height="350"/>
                <img src="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/bodyweight-squat.gif?resize=480:*" alt="hamstrings" width="400" height="350" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>

    );
};

export default Hamstrings;