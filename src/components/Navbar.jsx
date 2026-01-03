import { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";

const Navbar = ({
  search,
  setSearch,
  type,
  setType,
  parking,
  setParking
}) => {
  const { logout } = useContext(AuthContext);
  const searchRef = useRef(null);

  useEffect(() => {
    searchRef.current.focus();
  }, []);

  return (
    <div style={{ padding: "10px", borderBottom: "1px solid #ccc" }}>
      <input
        ref={searchRef}
        type="text"
        placeholder="Search by name or address"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginRight: "10px" }}
      />

      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="">All Types</option>
        <option value="Rajasthani">Rajasthani</option>
        <option value="Gujarati">Gujarati</option>
        <option value="Mughlai">Mughlai</option>
        <option value="Jain">Jain</option>
        <option value="Thai">Thai</option>
        <option value="North Indian">North Indian</option>
        <option value="South Indian">South Indian</option>
      </select>

      <select
        value={parking}
        onChange={(e) => setParking(e.target.value)}
        style={{ marginLeft: "10px" }}
      >
        <option value="">All Parking</option>
        <option value="true">Parking Available</option>
        <option value="false">No Parking</option>
      </select>

      <button
        onClick={logout}
        style={{ marginLeft: "15px" }}
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;
