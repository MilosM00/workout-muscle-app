import React from "react";
import "../style/Chest.css";

const Chest = ({displayMuscles}) =>{
    return(
        <div className="chest">

            <p className="title-chest">Chest Exercises</p>

            <div className="info-chest">
                <p className="title-info-chest">Barbells</p>
                <p>
                    The best chest exercises with barbells are bench press and incline bench press. <br />
                    The bench press strikes your middle chest and a little of the bottom chest. <br />
                    However, the incline bench press strikes your top chest.
                </p>
            </div>

            <div className="inline-chest">
                <img src="https://i.imgur.com/VVP2kFa.gif" alt="chest" height="400" width="500" />
                <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Incline-Bench-Press.gif?resize=600%2C600&ssl=1" alt="chest" height="400" width="500" />
            </div>

            <div className="info-chest">
                <p className="title-info-chest">Dumbbells</p>
                <p>
                    The best chest exercises with dumbbells are bench press with dumbbells and dumbbell flys. <br />
                    The good thing is that you can position the bench however you want. <br />
                    With that, the bench press with dumbbells strikes every part of your chest. <br />
                    The exercise dumbbell flys is very good and it works with a lower weight. This exercise stretches your chest and that is so special about it.
                </p>
            </div>

            <div className="inline-chest">
                <img src="https://images.ctfassets.net/8urtyqugdt2l/5uwkcgODlkP6YEzzpLiWUX/2b8e95c60226f7728acc80b4fbac3eb0/_uploads_1570110367-ezgifcom-video-to-gif-4.gif" alt="chest" width="300" height="400" />
                <img src="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/fly-dumbbell-incline.gif?resize=480:*" alt="chest" width="450" height="400" />
            </div>

            <div className="info-chest">
                <p className="title-info-chest">Bodyweight</p>
                <p>
                    The best chest exercises with bodyweight are push-ups and dips. <br />
                    Both exercises strike every part of your chest but the main thing about push-ups is the top and middle chest. <br />
                    And for dips, the main part is the middle and lower chest.
                </p>
            </div>

            <div className="inline-chest">
                <img src="https://images.squarespace-cdn.com/content/v1/5ef36da663cc604ee0e0796b/1606759782564-TNOPD08O2M0YIR7NQXD6/widegrippushup-1508248881.gif" alt="chest" width="400" height="350"/>
                <img src="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dips.gif" alt="chest" width="500" height="350" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>
    );
};

export default Chest;