import React, { useState, useEffect } from "react";
import Head from "next/head";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import NoticiasApp from "../../fb";
import Logueo from "../Logueo";
import Modulos from "../Modulos";
import AdminPage from "../AdminPage";

const auth = getAuth(NoticiasApp);

const Alumnos = () => {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        // Aquí comparamos el UID del usuario con los UIDs de admin y alumno.
        if (usuario.uid === "Z9uhC6x9kaPwLbxCdR2lly9FNvc2") {
          // El usuario es un administrador
          setUsuarioGlobal({ ...usuario, rol: "admin" });
        } else if (usuario.uid === "Kyjy5nXSgVOOhWatzxcaql8hK692") {
          // El usuario es un alumno
          setUsuarioGlobal({ ...usuario, rol: "alumno" });
        } else {
          // El UID del usuario no coincide con ningún usuario registrado.
          console.log("UID no reconocido:", usuario.uid);
          setUsuarioGlobal(null);
        }
      } else {
        setUsuarioGlobal(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Head>
        <title>Avivate - FullStack - login</title>
      </Head>
      {usuarioGlobal ? (
        usuarioGlobal.rol === "alumno" ? (
          <Modulos correoUsuario={usuarioGlobal.email} />
        ) : usuarioGlobal.rol === "admin" ? (
          <AdminPage />
        ) : (
          <p>Rol no reconocido</p>
        )
      ) : (
        <Logueo />
      )}
    </>
  );
};

export default Alumnos;
