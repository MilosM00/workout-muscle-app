import React from "react";
import "../style/Chest.css";

const Chest = () =>{
    return(
        <div className="chest">

            <p className="title-chest">Chest Exercises</p>

            <div className="left-chest">
                <p>Barbells</p>
            </div>

            <div className="inline-chest">
                <img src="https://i.imgur.com/VVP2kFa.gif" alt="chest" height="400" width="500" />
                <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2020/03/Incline-Bench-Press.gif?resize=600%2C600&ssl=1" alt="chest" height="400" width="500" />
            </div>

            <p>Dumbbells</p>

            <div className="inline-chest">
                <img src="https://images.ctfassets.net/8urtyqugdt2l/5uwkcgODlkP6YEzzpLiWUX/2b8e95c60226f7728acc80b4fbac3eb0/_uploads_1570110367-ezgifcom-video-to-gif-4.gif" alt="chest" width="300" height="400" />
                <img src="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/fly-dumbbell-incline.gif?resize=480:*" alt="chest" width="450" height="400" />
            </div>

            <p>Bodyweight</p>

            <div className="inline-chest">
                <img src="https://images.squarespace-cdn.com/content/v1/5ef36da663cc604ee0e0796b/1606759782564-TNOPD08O2M0YIR7NQXD6/widegrippushup-1508248881.gif" alt="chest" width="400" height="350"/>
                <img src="https://hips.hearstapps.com/ame-prod-menshealth-assets.s3.amazonaws.com/main/assets/dips.gif" alt="chest" width="600" height="400" />
            </div>

        </div>
    );
};

export default Chest;