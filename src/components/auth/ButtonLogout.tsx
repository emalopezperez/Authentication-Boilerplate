"use client";

import { signOut } from "next-auth/react";

const ButtonLogout = () => {
  return (
    <button
      onClick={async () => {
        try {
          await signOut();
        } catch (error) {
          console.error("Error al cerrar sesión:", error);
        }
      }}
      className="bg-red-400 text-white px-2 py-1">
      Cerrar sesión
    </button>
  );
};

export default ButtonLogout;
