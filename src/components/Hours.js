// Placeholder to host a component
import React from "react";

    const Hours = () => {
        // add logic

        const shelterHours = [
            { day: "Lunes", open: "10:00", close: "16:00" },
            { day: "Martes", open: "10:00", close: "16:00" },
            { day: "Miercoles", open: "10:00", close: "16:00" },
            { day: "Jueves", open: "10:00", close: "16:00" },
            { day: "Viernes", open: "10:00", close: "16:00" },
            { day: "Sabado", open: "9:00", close: "20:00" },
            { day: "Domingo", open: "9:00", close: "20:00" },
    
        ]

        // get the long day name and store it in a variable called today
        const today = new Date().toLocaleDateString('en-US', { weekday: 'long' });

        // get today's hours
        const todayHours = shelterHours.find((day) => day.day === today);

        // display today and the hours in an div with an id of hours
        return (
            <div id="hours">
                <h2>Horario de Atencion:</h2>
                <p>{todayHours.day} {todayHours.open} - {todayHours.close}</p>
            </div>
        )
    }

export default Hours;
