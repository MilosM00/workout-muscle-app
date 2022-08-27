import React from "react";
import Chest from "./components/Chest";
import Muscles from "./components/Muscles";
import Navbar from "./components/Navbar";
import Abdominals from "./components/Abdominals";

const App = () =>{

    const [muscles, setMuscles] = React.useState(true);
    const [chest, setChest] = React.useState(false);
    const [abdominals, setAbdominals] = React.useState(false);

    const displayMuscles = () =>{
        document.body.scrollIntoView();
        setMuscles(true);
        setChest(false);
        setAbdominals(false);
    };

    const displayChest = () =>{
        setChest(true);
        setMuscles(false);
        setAbdominals(false);
    };

    const displayAbdominals = () =>{
        setAbdominals(true);
        setMuscles(false);
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

        </div>
    );
};

export default App;