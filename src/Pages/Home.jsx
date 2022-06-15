import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const apiUrl = "http://localhost:8080/";
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = () => {
    axios.get(`${apiUrl}${process.env.REACT_APP_API}`).then((res) => {
      setUsers(res.data.reverse());
    });
  };

  useEffect(() => {
    fetchData();
    setLoading(false);
  }, [users]);

  const deleteData = (id) => {
    console.log(id);
    axios
      .delete(`${apiUrl}${process.env.REACT_APP_API}/${id}`)
      .then(fetchData());
  };

  return (
    <div className="w-full h-full flex flex-col px-10 py-8">
      <div className="w-full h-full flex flex-col min-h-[50vh] justify-center items-center">
        <h1 className="text-black text-3xl font-semibold font-Firacode">
          Hellow
        </h1>
        {loading ? (
          console.log("wait")
        ) : (
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  <table className="min-w-full">
                    <thead className="bg-white border-b">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Name
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                        >
                          Email
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-6 py-4 mt-2 text-left"
                        >
                          Phone
                        </th>
                        <th
                          scope="col"
                          className="text-sm font-medium text-gray-900 px-2 py-4 text-center"
                        >
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {users.map((user, index) => {
                        return (
                          <tr key={index} className="bg-gray-100 border-b">
                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                              {index + 1}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {user.name}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {user.email}
                            </td>
                            <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                              {user.phone}
                            </td>
                            <td className=" flex space-x-4 text-sm text-gray-900 font-light px-4 py-4  whitespace-nowrap">
                              <Link
                                to={`/user/${user.id}`}
                                className="text-small px-5 py-2 text-white font-Fira Code  bg-green-400 rounded-lg"
                              >
                                View
                              </Link>
                              <Link
                                to={`/edit-user/${user.id}`}
                                className=" text-small  px-5 py-2 text-white font-Fira Code  bg-orange-400 rounded-lg"
                              >
                                Update
                              </Link>
                              <button
                                onClick={() => deleteData(user.id)}
                                className=" text-small  px-5 py-2 text-white font-Fira Code  bg-red-400 rounded-lg"
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
