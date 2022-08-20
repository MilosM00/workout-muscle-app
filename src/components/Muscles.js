import React from "react";
import "./Muscles.css";
import manImage from "../images/man.png";
import manChestImage from "../images/man-chest.jpg";
import manTrapsImage from "../images/man-traps.jpg";
import manLowerTrapsImage from "../images/man-lower-traps.jpg";
import manLatsImage from "../images/man-lats.jpg";
import manLowerBackImage from "../images/man-lower-back.jpg";
import manAbdominalsImage from "../images/man-abdominals.jpg";

const Muscles = () =>{

    const [image, setImage] = React.useState(0);

    return(

        <div className="muscles">

            <div>
                {image === 0 && <img src={manImage} alt="muscles" className="image-muscles"/>}
                {image === 1 && <img src={manChestImage} alt="muscles" className="image-muscles"/>}
                {image === 2 && <img src={manTrapsImage} alt="muscles" className="image-muscles"/>}
                {image === 3 && <img src={manLowerTrapsImage} alt="muscles" className="image-muscles"/>}
                {image === 4 && <img src={manLatsImage} alt="muscles" className="image-muscles"/>}
                {image === 5 && <img src={manLowerBackImage} alt="muscles" className="image-muscles"/>}
                {image === 6 && <img src={manAbdominalsImage} alt="muscles" className="image-muscles"/>}
            </div>

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
                        onMouseEnter={() => setImage(3)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Lower traps
                    </button>

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(4)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Lats
                    </button>

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(5)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Lower back
                    </button>

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(6)} 
                        onMouseLeave={() => setImage(0)}
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