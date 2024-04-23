import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { create } from "../servicios/usuariosService";

function Registro() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: "onChange" });

    const [registroExitoso, setRegistroExitoso] = useState(false); // Estado para controlar el mensaje de éxito

    const onSubmit = async (data) => {
        try {
            await create(data);
            console.log("Usuario registrado exitosamente");
            setRegistroExitoso(true); // Establecer el estado a verdadero después del registro exitoso
        } catch (error) {
            console.error("Error al registrar usuario:", error);
            // Aquí puedes manejar el error y mostrar un mensaje al usuario
        }
    };

    return (
        <div className="registro">
            <h1>Regístrese</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre</label> <br />
                <input type="text" {...register("nombre", { required: true })} />
                {errors.nombre && (
                    <span>El campo es obligatorio</span>
                )} <br />

                <label>Apellido</label> <br />
                <input type="text" {...register("apellido")} />

                <br />
                <label>Email</label> <br />
                <input
                    type="email"
                    {...register("email", {
                        required: true,
                        pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/i,
                    })}
                />
                <br />
                {errors.email && (
                    <>
                        {errors.email?.type === "required" && (
                            <span>El campo es obligatorio</span>
                        )}
                        {errors.email?.type === "pattern" && (
                            <span>Formato email no válido</span>
                        )}
                    </>
                )}
                <br />
                <label>Contraseña</label> <br />
                <input
                    type="password"
                    {...register("password", {
                        required: true,
                        minLength: 6,
                        maxLength: 12,
                    })}
                    required
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

                <button type="submit" id="botonComprar">Registrarse</button>
            </form>
            {/* Mostrar mensaje de éxito si el registro fue exitoso */}
            {registroExitoso && (
                <div className="mensaje-exito">
                    ¡Registro exitoso! Puedes iniciar sesión ahora.
                </div>
            )}
        </div>
    );
}

export default Registro;
