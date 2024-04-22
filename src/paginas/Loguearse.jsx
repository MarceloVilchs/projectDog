import React from "react";


function Loguearse() {

    return (<div>
        
        <div className="registro">
        <h1>Login</h1>
            <form action="#" method="GET">
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
                <button type="submit" id="botonComprar">Enviar</button> <br />
            </form>
        </div>
    </div>
    );
}

export default Loguearse;