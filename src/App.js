import React from "react";
import Footer from "./components/Footer";
import Chest from "./components/Chest";
import Muscles from "./components/Muscles";
import Navbar from "./components/Navbar";
import Abdominals from "./components/Abdominals";
import Traps from "./components/Traps";
import LowerTraps from "./components/LowerTraps";
import Lats from "./components/Lats";
import LowerBack from "./components/LowerBack";
import Shoulders from "./components/Shoulders";
import Biceps from "./components/Biceps";

const App = () =>{

    const [muscles, setMuscles] = React.useState(true);
    const [chest, setChest] = React.useState(false);
    const [abdominals, setAbdominals] = React.useState(false);
    const [traps, setTraps] = React.useState(false);
    const [lowerTraps, setLowerTraps] = React.useState(false);
    const [lats, setLats] = React.useState(false);
    const [lowerBack, setLowerBack] = React.useState(false);
    const [shoulders, setShoulders] = React.useState(false);
    const [biceps, setBiceps] = React.useState(false);

    const displayMuscles = () =>{
        document.body.scrollIntoView();
        setMuscles(true);
        setChest(false);
        setAbdominals(false);
        setTraps(false);
        setLowerTraps(false);
        setLats(false);
        setLowerBack(false);
        setShoulders(false);
        setBiceps(false);
    };

    const displayChest = () =>{
        setChest(true);
        setMuscles(false);
        setAbdominals(false);
        setTraps(false);
        setLowerTraps(false);
        setLats(false);
        setLowerBack(false);
        setShoulders(false);
        setBiceps(false);
    };

    const displayAbdominals = () =>{
        setAbdominals(true);
        setMuscles(false);
        setChest(false);
        setTraps(false);
        setLowerTraps(false);
        setLats(false);
        setLowerBack(false);
        setShoulders(false);
        setBiceps(false);
    };

    const displayTraps = () =>{
        setTraps(true);
        setMuscles(false);
        setAbdominals(false);
        setChest(false);
        setLowerTraps(false);
        setLats(false);
        setLowerBack(false);
        setShoulders(false);
        setBiceps(false);
    };

    const displayLowerTraps = () =>{
        setLowerTraps(true);
        setTraps(false);
        setMuscles(false);
        setAbdominals(false);
        setChest(false);
        setLats(false);
        setLowerBack(false);
        setShoulders(false);
        setBiceps(false);
    };

    const displayLats = () =>{
        setLats(true);
        setLowerTraps(false);
        setTraps(false);
        setMuscles(false);
        setAbdominals(false);
        setChest(false);
        setLowerBack(false);
        setShoulders(false);
        setBiceps(false);
    };

    const displayLowerBack = () =>{
        setLowerBack(true);
        setLats(false);
        setLowerTraps(false);
        setTraps(false);
        setMuscles(false);
        setAbdominals(false);
        setChest(false);
        setShoulders(false);
        setBiceps(false);
    };

    const displayShoulders = () =>{
        setShoulders(true);
        setLowerBack(false);
        setLats(false);
        setLowerTraps(false);
        setTraps(false);
        setMuscles(false);
        setAbdominals(false);
        setChest(false);
        setBiceps(false);
    };

    const displayBiceps = () =>{
        setBiceps(true);
        setShoulders(false);
        setLowerBack(false);
        setLats(false);
        setLowerTraps(false);
        setTraps(false);
        setMuscles(false);
        setAbdominals(false);
        setChest(false);
    };

    return(
        <div>
            
            <Navbar 
                displayMuscles={displayMuscles}
            />

            {muscles === true && 
                <Muscles 
                    displayChest={displayChest}
                    displayAbdominals={displayAbdominals}
                    displayTraps={displayTraps}
                    displayLowerTraps={displayLowerTraps}
                    displayLats={displayLats}
                    displayLowerBack={displayLowerBack}
                    displayShoulders={displayShoulders}
                    displayBiceps={displayBiceps}
                />
            }

            {chest === true && 
                <Chest 
                    displayMuscles={displayMuscles}
                />
            }

            {abdominals === true && 
                <Abdominals 
                    displayMuscles={displayMuscles}
                />
            }

            {traps === true &&
                <Traps 
                    displayMuscles={displayMuscles}
                />
            }

            {lowerTraps === true &&
                <LowerTraps 
                    displayMuscles={displayMuscles}
                />
            }

            {lats === true &&
                <Lats 
                    displayMuscles={displayMuscles}
                />
            }

            {lowerBack === true &&
                <LowerBack 
                    displayMuscles={displayMuscles}
                />
            }

            {shoulders === true &&
                <Shoulders 
                    displayMuscles={displayMuscles}
                />
            }

            {biceps === true &&
                <Biceps 
                    displayMuscles={displayMuscles}
                />
            }

            <Footer 
                muscles={muscles}
            />

        </div>
    );
};

export default App;