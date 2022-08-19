import React from "react";
import "./Muscles.css";
import manImage from "../images/man.png";
import manChestImage from "../images/man-chest.jpg";
import manTrapsImage from "../images/man-traps.jpg";

const Muscles = () =>{

    const [image, setImage] = React.useState(0);

    return(

        <div className="muscles">

            {
                <div>
                    {image === 0 && <img src={manImage} alt="muscles" className="image-muscles"/>}
                    {image === 1 && <img src={manChestImage} alt="muscles" className="image-muscles"/>}
                    {image === 2 && <img src={manTrapsImage} alt="muscles" className="image-muscles"/>}
                </div>
            }

            <div className="center-muscles">

                <div className="inline-muscles">

                    <button 
                        className="button-muscle" 
                        onMouseEnter={() => setImage(1)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Chest
                    </button>

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(2)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Traps
                    </button>

                    <button 
                        className="button-muscle"
                    >
                        Lower traps
                    </button>

                    <button 
                        className="button-muscle"
                    >
                        Lats
                    </button>

                    <button 
                        className="button-muscle"
                    >
                        Lower back
                    </button>

                    <button 
                        className="button-muscle"
                    >
                        Abdominals
                    </button>

                </div>

                <div className="inline-muscles">

                    <button className="button-muscle">Shoulders</button>
                    <button className="button-muscle">Biceps</button>
                    <button className="button-muscle">Triceps</button>
                    <button className="button-muscle">Forearms</button>

                </div>

                <div className="inline-muscles">

                    <button className="button-muscle">Quadriceps</button>
                    <button className="button-muscle">Hamstrings</button>
                    <button className="button-muscle">Glutes</button>
                    <button className="button-muscle">Calves</button>

                </div>

            </div>


        </div>

    );
};

export default Muscles;