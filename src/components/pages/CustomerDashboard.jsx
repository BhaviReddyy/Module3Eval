import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RestaurantCard from "../components/RestaurantCard";
import {getRestaurant } from "../utils/localstorage";
function CustomerDashboard() {
    const [data, setData] = useState([]);
    const [search, setSearch] =
    useState("");
    useEffect(() => {
        setData(getRestaurants());
    }, []);
    const filtered = data.filter((el) => {
        return (
            (el.restaurantName.toLowerCase().includes(search.toLowerCase()) ||
        el.address.toLowerCase(). includes(search.toLowerCase())) &&
        type === "" || el.type === type) &&
        (parking === "" || el.parkingLot === (parking === "true"))
        );
});
return (
    <div>
        <Navbar
        search={search}
        setSearch={setSearch}
        type={type}
        setType={setType}
        parking={parking}
        setParking={setParking}
        />
        {filtered.map((el) => (
            <RestaurantCard
    key={el.restaurantID} data={el} />
        ))}
        </div>
);
}
export default CustomerDashboard;
