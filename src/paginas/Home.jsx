import React from "react";
import Productos from "../componentes/Productos";
import adoptaunamigo from "../img/amigo.png";



function Home(paramas){

        return(
            <div className="foco">
                <img src={adoptaunamigo} id='foto' alt='Cartel mercado libre' />
                <Productos/>
            </div>
        );
}

export default Home;