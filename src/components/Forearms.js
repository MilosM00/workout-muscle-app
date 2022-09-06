import React from "react";
import "../style/Forearms.css";

const Forearms = ({displayMuscles}) =>{
    return(

        <div className="forearms">

            <p className="title-forearms">Forearms Exercises</p>

            <div className="info-forearms">
                <p className="title-info-forearms">Barbells</p>
                <p>

                </p>
            </div>

            <div className="inline-forearms">
                <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/01/Barbell-Wrist-Curl.gif?fit=600%2C600&ssl=1" alt="forearms" height="400" width="400" />
                <img src="https://i0.wp.com/www.strengthlog.com/wp-content/uploads/2021/01/Barbell-Wrist-Curl-Behind-the-Back.gif?fit=600%2C600&ssl=1" alt="forearms" height="400" width="400" />
            </div>

            <div className="info-forearms">
                <p className="title-info-forearms">Dumbbells</p>
                <p>

                </p>
            </div>

            <div className="inline-forearms">
                <img src="https://i.pinimg.com/originals/fa/6f/f9/fa6ff9033ad801e1387583c7dea5c709.gif" alt="forearms" width="400" height="400" />
                <img src="https://i.makeagif.com/media/5-01-2015/zx9LWj.gif" alt="forearms" width="400" height="400" />
            </div>

            <div className="info-forearms">
                <p className="title-info-forearms">Bodyweight</p>
                <p>

                </p>
            </div>

            <div className="inline-forearms">
                <img src="https://cdn.shopify.com/s/files/1/0250/0362/2496/files/483.gif?v=1644663144" alt="forearms" width="350" height="400"/>
                <img src="https://cdn.shopify.com/s/files/1/0250/0362/2496/files/484.gif?v=1644663177" alt="forearms" width="350" height="400" />
            </div>

            <button 
                className="choose-button"
                onClick={displayMuscles}
            >Choose Other Muscle</button>

        </div>

    );
};

export default Forearms;