import React from "react";
import Productos from "../componentes/Productos";
import adoptaunamigo from "../img/amigo.png";
import firebase from "firebase/compat/app";



function Home(paramas){
    console.log("Esto es firebase: ", firebase);
        return(
            <div className="foco">
                <img src={adoptaunamigo} id='foto' alt='Adopta un perrito' />
                <Productos/>
            </div>
        );
}

export default Home;