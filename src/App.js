import Navbar from "./Pages/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import User from "./Pages/User";
import Addusers from "./Pages/Addusers";
import Edit from "./Pages/Edit";

const App = () => {
  return (
    <div className="APP">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/user/:id" element={<User />} />
        <Route path="/add-user" element={<Addusers />} />
        <Route path="/edit-user/:id" element={<Edit />} />
      </Routes>
    </div>
  );
};

export default App;
