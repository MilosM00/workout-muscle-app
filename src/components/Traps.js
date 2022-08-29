import React from "react";
import "../style/Traps.css";

const Traps = ({displayMuscles}) =>{
    return(

        <div className="traps">

            <p className="title-traps">Traps Exercises</p>

            <div className="info-traps">
                <p className="title-info-traps">Barbells</p>
                <p>
                    The best traps exercises with barbells are barbell shrugs and upright row. <br />
                    Both of the exercises stikes very well. And this is for advanced exercisers.
                </p>
            </div>

            <div className="inline-traps">
                <img src="http://www.shreddedcore.com/wp-content/uploads/2017/11/upright-row.gif" alt="traps" width="500" height="350" />
                <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Barbell-Shrug.gif?fit=600%2C600&ssl=1" alt="traps" width="400" height="350" />
            </div>

            <div className="info-traps">
                <p className="title-info-traps">Dumbbells</p>
                <p>
                    The best dumbbell exercises for traps are dumbbell flys. <br />
                    These are good exercises for intermediate exercisers.
                </p>
            </div>

            <div className="inline-traps">
                <img src="https://i.pinimg.com/originals/d6/14/30/d6143055e18e5d92be24606884893313.gif" alt="traps" width="350" height="400" />
                <img src="https://global-uploads.webflow.com/5d1d0d3f53ced35a29dbe169/5e4bf4d4e0db2f05a53de957_lateral-raise-trap-squeeze-dumbbells-exercise-anabolic-aliens.gif" alt="traps" width="350" height="400" />
            </div>

            <div className="info-traps">
                <p className="title-info-traps">Bodyweight</p>
                <p>
                    The best exercises with bodyweight are these two exercises. <br />
                    These two exercises strike very well, and this is for beginners.
                </p>
            </div>

            <div className="inline-traps">
                <img src="https://cdn.shopify.com/s/files/1/0250/0362/2496/files/1486.gif?v=1644928324" alt="traps" width="400" height="300" />
                <img src="https://cdn.shopify.com/s/files/1/0250/0362/2496/files/1782.gif?v=1645002945" alt="traps" width="300" height="350" />
            </div>

            <button
                className="choose-button"
                onClick={displayMuscles}
            >
                Choose Other Muscle
            </button>

        </div>

    );
};

export default Traps;