import React from "react";
import { useState } from "react";

const App = () => {
  const [title, setTitle] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(" ", title);

    if (title === "") return;
    if(tasks.includes(title)) {
      alert("Task already exists");
      return;
    }

    setTasks((prev) => [...prev, title]);
    setTitle("");


  };


  return(
    <div className="text-white h-screen text center bg-gray-600 justify-center">
      <h1 className="text-5xl pt-20 text-white text-center justify-center">TODO </h1>

      <form onSubmit={(e) => handleSubmit(e)} className="pt-10">
        <div className="mt-5 flex gap-2 items-center justify-center">
          <input
            type="text"
            placeholder="Enter Title"
            onChange={(e)=> setTitle(e.target.value)}
            className="bg-white text-black py-2 px-4 rounded-full"
          />
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full">Submit</button>
        </div>
      </form>
      <div className="justify-center item-center text-center pt-10">
        {tasks.map((curItem, index) => (
        <div key={index} className=" gp-2 text-black pt-5 bg-white text-center justify-center w-1/3 m-auto rounded-lg">
          {curItem}
          <h1/>
        </div>
        ))}
      </div>
    </div>
  );
};
export default App;