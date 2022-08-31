import React from "react";
import Chest from "./components/Chest";
import Muscles from "./components/Muscles";
import Navbar from "./components/Navbar";
import Abdominals from "./components/Abdominals";
import Traps from "./components/Traps";
import LowerTraps from "./components/LowerTraps";
import Lats from "./components/Lats";

const App = () =>{

    const [muscles, setMuscles] = React.useState(true);
    const [chest, setChest] = React.useState(false);
    const [abdominals, setAbdominals] = React.useState(false);
    const [traps, setTraps] = React.useState(false);
    const [lowerTraps, setLowerTraps] = React.useState(false);
    const [lats, setLats] = React.useState(false);

    const displayMuscles = () =>{
        document.body.scrollIntoView();
        setMuscles(true);
        setChest(false);
        setAbdominals(false);
        setTraps(false);
        setLowerTraps(false);
        setLats(false);
    };

    const displayChest = () =>{
        setChest(true);
        setMuscles(false);
        setAbdominals(false);
        setTraps(false);
        setLowerTraps(false);
        setLats(false);
    };

    const displayAbdominals = () =>{
        setAbdominals(true);
        setMuscles(false);
        setChest(false);
        setTraps(false);
        setLowerTraps(false);
        setLats(false);
    };

    const displayTraps = () =>{
        setTraps(true);
        setMuscles(false);
        setAbdominals(false);
        setChest(false);
        setLowerTraps(false);
        setLats(false);
    };

    const displayLowerTraps = () =>{
        setLowerTraps(true);
        setTraps(false);
        setMuscles(false);
        setAbdominals(false);
        setChest(false);
        setLats(false);
    };

    const displayLats = () =>{
        setLats(true);
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

        </div>
    );
};

export default App;