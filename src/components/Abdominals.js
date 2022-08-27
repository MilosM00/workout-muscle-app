import React from "react";
import "../style/Abdominals.css";

const Abdominals = ({displayMuscles}) =>{
    return(

        <div className="abs">

            <p className="title-abs">Abdominals Exercises</p>

            <div className="info-abs">
                <p className="title-info-abs">Barbells</p>
                <p>
                    The best abdominals exercises with barbells are landmine twists and barbell rollouts. <br />
                    Both of the exercises stikes very well. And this is for advanced exercisers.
                </p>
            </div>

            <div className="inline-abs">
                <img src="https://www.fitliferegime.com/wp-content/uploads/2021/09/Landmine-Twists.gif" alt="abs" width="500" height="300" />
                <img src="https://i.makeagif.com/media/10-08-2015/0JkO-3.gif" alt="abs" width="400" height="300" />
            </div>

            <div className="info-abs">
                <p className="title-info-abs">Dumbbells</p>
                <p>
                    The best abdominals exercises with dumbbells are these two exercises. <br />
                    These are good exercises for intermediate exercisers.
                </p>
            </div>

            <div className="inline-abs">
                <img src="https://www.gymguider.com/wp-content/uploads/2020/10/RUSSIAN-TWISTS.gif" alt="abs" width="400" height="300" />
                <img src="https://www.gymguider.com/wp-content/uploads/2020/10/V-SITS.gif" alt="abs" width="400" height="300" />
            </div>

            <div className="info-abs">
                <p className="title-info-abs">Bodyweight</p>
                <p>
                    The best exercises with bodyweight are pull-up barbell abdominal exercise and basic abdominal exercise. <br />
                    These two exercises strike very well, and this is for beginners. <br />
                    Of course, you can add some weight to the exercise to be harder and much more effective if you are an advanced exercirser.
                </p>
            </div>

            <div className="inline-abs">
                <img src="https://media.gq.com/photos/55828be51177d66d68d52b41/master/w_1600%2Cc_limit/style-blogs-the-gq-eye-toe-to-bar.gif" alt="abs" width="400" height="300" />
                <img src="https://flabfix.com/wp-content/uploads/2019/05/Sit-Ups.gif" alt="abs" width="400" height="300" />
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

export default Abdominals;