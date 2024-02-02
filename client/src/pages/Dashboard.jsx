import React from "react";
import Sidebar from "../components/Sidebar";

export default function Dashboard() {
  return (
    <>
      <div className="pt-32">
        <h1 className="text-5xl text-center">Dashboard</h1>
        <div className="mt-16 mx-64 px-64 py-16 bg-green-svg bg-no-repeat bg-cover rounded-xl drop-shadow-lg flex flex-col">
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
            <select className="bg-white border px-3 mx-3 border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
              <option value="option1" selected disabled hidden>
                Select an option
              </option>
              <option value="option1">Learning level 1</option>
              <option value="option2">Learning level 2</option>
              <option value="option3">Learning level 3</option>
            </select>
            <button className="bg-green-900 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
              Custom quiz
            </button>
          </div>
        </div>
        <h1 className="text-5xl mt-16 text-center">Past quiz reports</h1>
      </div>
    </>
  );
}
