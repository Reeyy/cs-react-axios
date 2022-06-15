import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Addusers = () => {
  const postApi = `http://localhost:8080/${process.env.REACT_APP_API}`;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  //!nampung data

  const data = {
    name: name,
    email: email,
    phone: phone,
  };

  const submitdata = () => {
    axios.post(postApi, data).then(navigate("/"));
  };

  const Submit = (e) => {
    e.preventDefault();
    submitdata();
  };

  return (
    <div className="w-screen h-full flex flex-col  justify-center items-center mt-16">
      <h1 className="text-black text-3xl font-Firacode  font-semibold">
        Add user here
      </h1>
      <form className="w-[80%] h-full flex flex-col justify-center items-center">
        <input
          value={name}
          type="text"
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          className="w-[80%] bg-white/10 py-4 pl-6 text-xl font-Firacode font-medium  outline-none 
          border border-zinc400  mt-4"
        />
        <input
          value={email}
          type="email"
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your name"
          className="w-[80%] bg-white/10  py-4 pl-6 text-xl font-Firacode font-medium  outline-none 
          border border-zinc400  mt-4"
        />
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="phone"
          placeholder="Enter your name"
          className="w-[80%] bg-white/10 text-xl font-Firacode font-medium  outline-none 
          border border-zinc400 py-4 pl-6 mt-4"
        />
        <button
          onClick={Submit}
          className="relative inline-block mt-4 group focus:outline-none focus:ring "
        >
          <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-orange-400 group-hover:translate-y-1.5  rounded-full group-hover:translate-x-1.5"></span>

          <span className="text-white relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-none rounded-lg">
            submits
          </span>
        </button>
      </form>
    </div>
  );
};

export default Addusers;
