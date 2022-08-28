import React from "react";
import "../style/Muscles.css";
import manImage from "../images/man.png";
import manChestImage from "../images/man-chest.jpg";
import manTrapsImage from "../images/man-traps.jpg";
import manLowerTrapsImage from "../images/man-lower-traps.jpg";
import manLatsImage from "../images/man-lats.jpg";
import manLowerBackImage from "../images/man-lower-back.jpg";
import manAbdominalsImage from "../images/man-abdominals.jpg";
import manShouldersImage from "../images/man-shoulders.jpg";
import manBicepsImage from "../images/man-biceps.jpg";
import manTricepsImage from "../images/man-triceps.jpg";
import manForearmsImage from "../images/man-forearms.jpg";
import manQuadricepsImage from "../images/man-quadriceps.jpg";
import manHamstringsImage from "../images/man-hamstrings.jpg";
import manGlutesImage from "../images/man-glutes.jpg";
import manCalvesImage from "../images/man-calves.jpg";

const Muscles = (props) =>{

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
                {image === 7 && <img src={manShouldersImage} alt="muscles" className="image-muscles"/>}
                {image === 8 && <img src={manBicepsImage} alt="muscles" className="image-muscles"/>}
                {image === 9 && <img src={manTricepsImage} alt="muscles" className="image-muscles"/>}
                {image === 10 && <img src={manForearmsImage} alt="muscles" className="image-muscles"/>}
                {image === 11 && <img src={manQuadricepsImage} alt="muscles" className="image-muscles"/>}
                {image === 12 && <img src={manHamstringsImage} alt="muscles" className="image-muscles"/>}
                {image === 13 && <img src={manGlutesImage} alt="muscles" className="image-muscles"/>}
                {image === 14 && <img src={manCalvesImage} alt="muscles" className="image-muscles"/>}
            </div>

            <div className="center-muscles">

                <div className="inline-muscles">
                    
                    <button 
                        className="button-muscle" 
                        onMouseEnter={() => setImage(1)} 
                        onMouseLeave={() => setImage(0)}
                        onClick={props.displayChest}
                    >
                        Chest
                    </button>

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(6)} 
                        onMouseLeave={() => setImage(0)}
                        onClick={props.displayAbdominals}
                    >
                        Abdominals
                    </button>

                </div>

                <div className="inline-muscles">

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(2)} 
                        onMouseLeave={() => setImage(0)}
                        onClick={props.displayTraps}
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

                </div>

                <div className="inline-muscles">

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(7)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Shoulders
                    </button>

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(8)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Biceps
                    </button>

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(9)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Triceps
                    </button>

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(10)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Forearms
                    </button>

                </div>

                <div className="inline-muscles">

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(11)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Quadriceps
                    </button>

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(12)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Hamstrings
                    </button>

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(13)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Glutes
                    </button>

                    <button 
                        className="button-muscle"
                        onMouseEnter={() => setImage(14)} 
                        onMouseLeave={() => setImage(0)}
                    >
                        Calves
                    </button>

                </div>

            </div>


        </div>

    );
};

export default Muscles;