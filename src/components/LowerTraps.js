import React from "react";
import "../style/LowerTraps.css";

const LowerTraps = ({displayMuscles}) =>{
    return(

        <div className="lower-traps">
            
            <p className="title-lower-traps">Lower Traps Exercises</p>

            <div className="info-lower-traps">
                <p className="title-info-lower-traps">Barbells</p>
                <p>
                    The best barbell exercises for lower traps are barbell rear delt row and lat pull-down, behind the head. <br />
                    Both exercises strike lower traps, however, the lat pull-down behind the head strike more part of the back.
                </p>
            </div>

            <div className="inline-lower-traps">
                <img src="https://www.strengthlog.com/wp-content/uploads/2021/01/Barbell-Rear-Delt-Row.gif" alt="lower-traps" height="350" width="400" />
                <img src="https://thumbs.gfycat.com/DrearyDefenselessBeardeddragon-max-1mb.gif" alt="lower-traps" height="350" width="450" />
            </div>

            <div className="info-lower-traps">
                <p className="title-info-lower-traps">Dumbbells</p>
                <p>
                    The best exercises for lower traps are dumbbell rear delt row and dumbbell flys. <br />
                    Both exercises strike very well.
                </p>
            </div>

            <div className="inline-lower-traps">
                <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/01/Dumbbell-Rear-Delt-Row.gif?fit=600%2C600&ssl=1" alt="lower-traps" width="400" height="350" />
                <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/02/Reverse-dumbbell-flyes.gif?resize=600%2C600&ssl=1" alt="lower-traps" width="400" height="350" />
            </div>

            <div className="info-lower-traps">
                <p className="title-info-lower-traps">Bodyweight</p>
                <p>
                    The best exercises for lower traps with bodyweight are pull-ups with a shorter grip. <br />
                    This is the best bodyweight exercise for the back. It strikes every part of the back.
                </p>
            </div>

            <div className="inline-lower-traps">
                <img src="https://i.pinimg.com/originals/96/5a/5f/965a5fe98ccabca32682569f4f1e4b87.gif" alt="lower-traps" width="300" height="350"/>
                <img src="https://qph.cf2.quoracdn.net/main-qimg-218562f7e8fef0197b9dfa0183a3e9d9" alt="lower-traps" width="450" height="350" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>

    );
};

export default LowerTraps;