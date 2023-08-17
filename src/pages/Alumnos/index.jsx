import React, { useState } from "react";
import Head from "next/head";

//= Components
import Clases from "../Clases";

import { getAuth, onAuthStateChanged } from "firebase/auth";
import NoticiasApp from "../../fb";
import Logueo from "../Logueo";

const auth = getAuth(NoticiasApp);

const Alumnos = () => {
  const [usuarioGlobal, setUsuarioGlobal] = useState(null);

  onAuthStateChanged(auth, (usuraioAdmin) => {
    if (usuraioAdmin) {
      setUsuarioGlobal(usuraioAdmin);
    } else {
      setUsuarioGlobal(null);
    }
  });
  return (
    <>
      <Head>
        <title>Avivate - FullStack - Alumnos</title>
      </Head>
      {usuarioGlobal ? (
        <Clases correoUsuario={usuarioGlobal.email} />
      ) : (
        <Logueo />
      )}
    </>
  );
};

export default Alumnos;
