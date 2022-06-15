import React, { useCallback, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const Edit = () => {
  const postApi = `http://localhost:8080/${process.env.REACT_APP_API}`;
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const { id } = useParams();

  const navigate = useNavigate();

  const updateData = (e) => {
    e.preventDefault();
    const Datas = { name, email, phone };
    axios.put(`${postApi}/${id}`, Datas).then(navigate("/"));
  };

  const getData = useCallback(() => {
    axios.get(`${postApi}/${id}`).then((res) => {
      setName(res.data.name);
      setEmail(res.data.email);
      setPhone(res.data.phone);
    });
  }, [postApi, id]);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <div className="w-screen h-full flex flex-col  justify-center items-center mt-16">
      <h1 className="text-black text-3xl font-Firacode  font-semibold">
        Edit user here
      </h1>
      <form
        onSubmit={updateData}
        className="w-[80%] h-full flex flex-col justify-center items-center"
      >
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
        <button className="relative inline-block mt-4 group focus:outline-none focus:ring ">
          <span className="absolute inset-0 transition-transform translate-x-0 translate-y-0 bg-orange-400 group-hover:translate-y-1.5  rounded-full group-hover:translate-x-1.5"></span>

          <span className="text-white relative inline-block px-8 py-3 text-sm font-bold tracking-widest uppercase border-2 border-none rounded-lg">
            Update
          </span>
        </button>
      </form>
    </div>
  );
};

export default Edit;
