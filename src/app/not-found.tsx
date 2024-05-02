import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="grid gap-4 place-content-center h-screen">
      <h1 className="text-center text-3xl">404</h1>
      <h3>Página no encontrada</h3>
      <Link
        href="/"
        className="bg-black text-center text-white px-4 py-2 rounded hover:bg-slate-700"
      >
        Volver al inicio
      </Link>
    </div>
  );
};

export default NotFound;