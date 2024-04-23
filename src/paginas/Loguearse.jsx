import React from "react";
import { useForm } from "react-hook-form";
//import { useState } from "react";
import { login } from '../servicios/usuariosService';

function Loguearse() {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm({ mode: "onChange" });
    
      const onSubmit = async (data) => {
        //setLoading(true);
        try {
          const user = await login(data.email, data.password);
          alert("Logueado con éxito!!!")
          console.log("Se logueó el user: ", user);
          //context.loginUser();
          //setLoading(false);
          /*setAlert({
            variant: "success",
            text: "Ingreso exitoso",
            duration: 3000,
            link: "/",
          });*/
        } catch (e) {
          alert("Error en loggin: ",e.code)
          console.log("Error en loggin: ",e.code);
          /*setAlert({
            variant: "danger",
            text: registroMessage[e.code] || "Ha ocurrido un error",
          });*/
          //setLoading(false);
        }
      };
    
      return (
        <div className="registro">
          <h1>Login</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>Usuario</label><br />
            <input type="email" {...register("email", { required: true })} /><br />
            <label>Contraseña</label> <br />
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
                maxLength: 12,
              })} required
            /> <br />
            {errors.password && (
              <>
                {errors.password?.type === "required" && (
                  <span>El campo es obligatorio</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span>Debe completar al menos 6 caracteres</span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span>Debe completar menos de 12 caracteres</span>
                )}
              </>
            )} <br />
            <button type="submit" id="botonComprar">Enviar</button>
          </form>
        </div>);
}

export default Loguearse;