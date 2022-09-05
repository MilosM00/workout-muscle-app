import React from "react";
import "../style/Triceps.css";

const Triceps = ({displayMuscles}) =>{
    return(

        <div className="triceps">
            
            <p className="title-triceps">Triceps Exercises</p>

            <div className="info-triceps">
                <p className="title-info-triceps">Barbells</p>
                <p>
                    The best exercises with barbells for triceps are short grip bench press and press on the forehead with a Z bar. <br />
                    Both of the exercises strike very well and those are for advanced exercisers.
                </p>
            </div>

            <div className="inline-triceps">
                <img src="https://i.pinimg.com/originals/04/f1/81/04f1816ffdf34208d060fdef5fdcc844.gif" alt="triceps" height="300" width="400" />
                <img src="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/skullcrushergif.gif" alt="triceps" height="300" width="400" />
            </div>

            <div className="info-triceps">
                <p className="title-info-triceps">Dumbbells</p>
                <p>
                    The best exercises with dumbbells for triceps are these two exercises. <br />
                    Both of the exercises strike very well and those are for intermediate exercisers.
                </p>
            </div>

            <div className="inline-triceps">
                <img src="https://i0.wp.com/media.giphy.com/media/vy0dSbGvjFKZQfqFHI/giphy.gif?resize=480%2C270&ssl=1" alt="triceps" width="400" height="300" />
                <img src="https://i0.wp.com/media.giphy.com/media/1zhszhFAu88C0mjJWR/giphy.gif?resize=480%2C270&ssl=1" alt="triceps" width="400" height="300" />
            </div>

            <div className="info-triceps">
                <p className="title-info-triceps">Bodyweight</p>
                <p>
                    The best exercises with bodyweight for triceps are these two exercises. <br />
                    Both of the exercises strike very well and those are for beginner exercisers. <br />
                    You can also do dips, those stikes your triceps pretty good.
                </p>
            </div>

            <div className="inline-triceps">
                <img src="https://i.pinimg.com/originals/b3/50/f4/b350f4973aba2093f715cccd26bcc995.gif" alt="triceps" width="400" height="300"/>
                <img src="https://thumbs.gfycat.com/SparseLightheartedEagle-max-1mb.gif" alt="triceps" width="400" height="300" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>

    );
};

export default Triceps;