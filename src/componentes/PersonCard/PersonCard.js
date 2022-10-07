import React from "react";

const PersonCard = ({ nombre, apellido, color, age }) => {

    return(
        <div className="border border-dark border boder-5 rounded-3 p-3 mb-2 ">
            <h4>{nombre}, {apellido}</h4>
            <p><b>Edad: </b> {age}</p>
            <p><b>Color de ojos: </b> {color}</p>
        </div>
    )

}
export default PersonCard; //para exportar este componente con el nombre de la clase
