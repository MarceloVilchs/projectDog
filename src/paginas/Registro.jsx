import React from "react";

function Registro() {
    return (
        <>
            <div className="registro">
            <h1>Regístrate</h1>
                <form action="#" method="GET">
                    <label>
                        Nombre:
                    </label>
                    <br />
                    <input type="text" name="name" required placeholder="Nombre" />
                    <br />
                    <label>
                        Email:
                    </label>
                    <br />
                    <input type="email" name="email" required placeholder="email" />
                    <br />
                    <label>
                        Password:
                    </label>
                    <br />
                    <input type="password" name="password" required placeholder="password" />
                    <br />
                    <button type="submit" name="submit" id="botonComprar">Enviar</button>
                </form>
            </div>
        </>
    );
}

export default Registro;