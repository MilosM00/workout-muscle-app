import React from "react";
import "../style/Quadriceps.css";

const Quadriceps = ({displayMuscles}) =>{
    return(

        <div className="quadriceps">

            <p className="title-quadriceps">Quadriceps Exercises</p>

            <div className="info-quadriceps">
                <p className="title-info-quadriceps">Barbells</p>
                <p>
                    The best barbell exercises for quadriceps are squats - back and front grip. <br />
                    Both of the exercises strike very well and those are for advanced exercisers.
                </p>
            </div>

            <div className="inline-quadriceps">
                <img src="https://i.imgur.com/IBLtK6y.gif?noredirect" alt="quadriceps" width="400" height="350" />
                <img src="https://img.gymshark.com/image/fetch/q_auto,f_auto,w_480/https://images.ctfassets.net/8urtyqugdt2l/6tgKk5SjfppvOrv9EmgDav/b609ef6a7b0905828f2ee120fd5a2a4a/_uploads_1571143586-front-squat-demo.gif" alt="quadriceps" width="300" height="350" />
            </div>

            <div className="info-quadriceps">
                <p className="title-info-quadriceps">Dumbbells</p>
                <p>
                    The best exercises with dumbbells for quadriceps are Bulgarian splits and step-ups. <br />
                    Both of the exercises strike very well and those are for intermediate exercisers.
                </p>
            </div>

            <div className="inline-quadriceps">
                <img src="https://cdn.shopify.com/s/files/1/1950/1891/files/lunge2_large.gif" alt="quadriceps" width="400" height="400" />
                <img src="https://bodybuilding-wizard.com/wp-content/uploads/2015/05/bulgarian-solit-squoat-animation-8-1-1.gif" alt="quadriceps" width="500" height="400" />
            </div>

            <div className="info-quadriceps">
                <p className="title-info-quadriceps">Bodyweight</p>
                <p>
                    The best exercises with bodyweight for forearms are those two exercises. <br />
                    Both of the exercises strike very well and those are for beginners exercisers.
                </p>
            </div>

            <div className="inline-quadriceps">
                <img src="https://i.pinimg.com/originals/8c/9a/52/8c9a52570b9bae16ac9c90d18bfc152b.gif" alt="quadriceps" width="450" height="350" />
                <img src="https://c.tenor.com/meIUZZ_2oZMAAAAC/lunge-jump.gif" alt="quadriceps" width="450" height="350" />
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

export default Quadriceps;