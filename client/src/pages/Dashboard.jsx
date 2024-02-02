import React from "react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="pt-32">
        <h1 className="text-5xl text-center">Dashboard</h1>
        <div className="mt-32 mx-64 px-64 py-16 bg-green-svg bg-no-repeat bg-cover rounded-xl drop-shadow-lg flex flex-col">
          <h1 className="text-5xl text-center">Daily Challenge</h1>
          <p className="text-xl py-6 text-center">
            Unlock your potential! Take the daily challenge, randomly generated
            according to your learning level.
          </p>
          <button className="bg-green-900 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
            Daily challenge quiz
          </button>
        </div>
        <div className="mt-8 mx-64 px-64 py-16 bg-slate-300  bg-no-repeat bg-cover rounded-xl drop-shadow-lg flex flex-col">
          <h1 className="text-5xl text-center">Custom quiz</h1>
          <p className="text-xl py-6 text-center">Customize your learning</p>
          <div className="flex flex-row justify-center">
            <button className="bg-green-900 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              Custom quiz
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
