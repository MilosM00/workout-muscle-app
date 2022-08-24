import React from "react";
import Chest from "./components/Chest";
import Muscles from "./components/Muscles";
import Navbar from "./components/Navbar";

const App = () =>{

    const [muscles, setMuscles] = React.useState(true);
    const [chest, setChest] = React.useState(false);

    const scrollUp = () =>{
        document.body.scrollIntoView();
        setMuscles(true);
        setChest(false);
    };

    const chestEvent = () =>{
        setMuscles(false);
        setChest(true);
    };

    return(
        <div>
            
            <Navbar 
                scrollUp={scrollUp}
            />

            {muscles === true && 
                <Muscles 
                    chestEvent={chestEvent}
                />
            }

            {chest === true && 
                <Chest />
            }

        </div>
    );
};

export default App;