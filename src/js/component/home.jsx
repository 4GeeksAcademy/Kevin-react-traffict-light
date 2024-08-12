import React, { useState } from "react";

//create your first component
const Home = () => {
    const [activeLight, setActiveLight] = useState(null);

    const handleClick = (light) => {
        setActiveLight(light);
    };

    //estilos para el semáforo
    const trafficLightStyle = {
        display: "inline-block",
        width: "100px",
        height: "320px",
        backgroundColor: "#333",
        borderRadius: "10px",
        padding: "10px",
        position: "relative",
        textAlign: "center"
    };

    //estilos base para las luces del semáforo
    const lightStyle = {
        width: "80px",
        height: "80px",
        borderRadius: "50%",
        margin: "10px auto",
        border: "2px solid #000",
        backgroundColor: "#222",
        cursor: "pointer",
        boxShadow: "0 0 0px rgba(255, 255, 255, 0.5)" //Efecto de resplandor por defecto
    };

    //estilos para cada color del semaforo
    const getLightStyle = (color) => ({
        ...lightStyle,
        backgroundColor: color,
        boxShadow: activeLight === color ? `0 0 60px ${color}` : lightStyle.boxShadow //Efecto de resplandor
    });

    return (
        <div className="text-center">
            <div style={trafficLightStyle}>
                <button
                    style={getLightStyle("red")}
                    onClick={() => handleClick("red")}
                ></button>
                <button
                    style={getLightStyle("orange")}
                    onClick={() => handleClick("orange")}
                ></button>
                <button
                    style={getLightStyle("green")}
                    onClick={() => handleClick("green")}
                ></button>
            </div>
        </div>
    );
};

export default Home;
