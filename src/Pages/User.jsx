import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useCallback, useEffect, useState } from "react";

const User = () => {
  const [user, setUser] = useState([]);
  const { id } = useParams();

  const fetch = useCallback(() => {
    axios
      .get(`http://localhost:8080/${process.env.REACT_APP_API}/${id}`)
      .then((res) => {
        setUser(res.data);
      });
  }, [id]);

  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div className="w-full h-full flex justify-center items-center">
      {user && (
        <>
          <div className="w-[700px] [h-200px] justify-center items-center px-6 py-8 border border-blue mt-5  ">
            <div className="w-5/12 flex flex-col space-y-4">
              <h2 className="text-black-font-semibold font-inter text-2xl border-b border-black">
                Name
              </h2>
              <h2 className="text-black-font-semibold font-inter text-2xl border-b border-black">
                email
              </h2>
              <h2 className="text-black-font-semibold font-inter text-2xl border-b border-black">
                phone
              </h2>
            </div>
            <div className="w-7/12 flex flex-col space-y-4">
              <h2 className="text-black-font-semibold font-inter text-2xl border-b border-black">
                {user.name}
              </h2>
              <h2 className="text-black-font-semibold font-inter text-2xl border-b border-black">
                {user.email}
              </h2>
              <h2 className="text-black-font-semibold font-inter text-2xl border-b border-black">
                {user.phone}
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default User;
