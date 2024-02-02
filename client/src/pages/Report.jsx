import React from "react";

export default function Report() {
  return (
    <>
      <div className="pt-28">
        <div className="px-4 py-12 max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold  mb-4 text-slate-800">
            Welcome to my Report!
          </h1>
          <p className="mb-4 text-slate-700">Ths is a dash.</p>
          <p className="mb-4 text-slate-700">
            The front-end of the application is built with React and uses React
            Router for client-side routing. The back-end is built with Node.js
            and Express, and uses MongoDB as the database. Authentication is
            implemented using JSON Web Tokens (JWT).
          </p>
          <p className="mb-4 text-slate-700">
            This application is intended as a starting point for building
            full-stack web applications with authentication using the MERN
            stack. Feel free to use it as a template for your own projects!
          </p>
        </div>
      </div>
    </>
  );
}
