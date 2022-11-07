import React, {useState} from "react";
import animals from "./animals.json";

const Animals = () => {
    const [darkMode, setDarkMode] = useState("")

    const darkModeHelper = () => {
        setDarkMode(darkMode === "" ? "darkModeActivate" : "")
        console.log("hello")
    }

    return <>
        <button onClick={darkModeHelper}>Dark Mode</button>
        {
            animals.map((animal, index) => (
                <div key={index} className={`individualAnimal ${darkMode}`}>
                    <h1>{animal.name}</h1>
                    <h2>Animal: {animal.type}</h2>
                    <h2>Height: {animal.height}</h2>
                </div>
            ))
        }
    </>
}

export default Animals