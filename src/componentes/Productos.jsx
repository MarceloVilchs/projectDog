import React, { useState, useEffect } from "react";
import { getAllProductos } from "../servicios/ProductosServicio";
import Producto from "./Producto";


function Productos() {

    const [loading, setLoading] = useState(true);
    const [productos, setProductos] = useState();
    const [buscar, setBuscar] = useState("iPhone")

    useEffect(() => {
        const request = async () => {
            try {
                const response = await getAllProductos(buscar);

                console.log("Desde Productos:", response.results);

                setProductos(response.results);
                setLoading(false);
            } catch (evento) {
                console.log(evento);
            }
        };

        request();
    }, [buscar]);

    const handleChange = (event) => {

        const value = event.target.value;
        console.log(value);
        setBuscar(value);
    }

    if (loading) {
        return (
            <div>Cargando...</div>
        )
    } else {
        return (
            <><br /><br />
                {productos.slice(0, 19).map((producto) =>
                    <Producto
                        id={producto.id}
                        imagen={producto.thumbnail}
                        nombre={producto.title}
                        precio={producto.price}
                    />
                )}
                <br />
                {/*<button onClick={handleClick}>Filtrar</button></button>*/}
            </>
        )

    }
}

export default Productos;