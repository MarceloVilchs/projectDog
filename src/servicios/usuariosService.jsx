import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import app from "../Config/firebase";

export async function create(payload) {
    try {
        const auth = getAuth(app);
        const responseUser = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
        console.log("Create ID del usuario:", responseUser.user.uid);

        const firestore = getFirestore(app);
        const documentRef = await addDoc(collection(firestore, "usuarios"), {
            name: payload.nombre,
            lastname: payload.apellido,
            userId: responseUser.user.uid
        });

        console.log("Usuario registrado exitosamente");
        return documentRef.id;
    } catch (error) {
        console.error("Error al registrar usuario:", error);
        throw error;
    }
}

export async function login(email, password) {
    try {
        const auth = getAuth(app);
        const responseUser = await signInWithEmailAndPassword(auth, email, password);
        return responseUser.user.uid;
    } catch (error) {
        console.error("Error al iniciar sesión:", error);
        throw error;
    }
}
