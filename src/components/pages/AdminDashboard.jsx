import {useEffect, useState } from "react";
import Navbar from "../components/RestaurantCard";
import RestaurantCard from "..components/RestaurantCard";
import { getRestaurants, saveResraurants } from "../utils/localStorage";
const IMAGE_URL =
"https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524d6e-46fa-4506-8766";
function AdminDashboard() {
    const [data, setData] = useState([]);
    const [form, setForm] = useState({
        restaurantName: "",
        address: "",
        type: "",
        parkingLot: "",
        image: IMAGE_URL,
    });
    const [search, setSearch] =
    useState("");
    const [type, setType] = useState("");
    const [parking, setParking] = useState("");
    useEffect(() => {
        setData(getRestaurants());
    }, []);
    const handleAdd = () => {
        if (!form.restaurantName || ! form.address || !form.type || form.parkingLot === "") {
            alert("All fie;ds required");
            return;
        }
        const newData = {
            ...form,
            restaurantID: Date.now(),
            parkingLot: form.parkingLot === "true", };
            const updated = [...data, newData];
            saveResraurants(updated);
            alert("Restaurant added successfully");
            setForm({
                restaurantName: "",
                address: "",
                type: "",
                parkingLot: "",
                image: IMAGE_URL,
            });
        };
        const handleDelete = (id) => {
            if (!window.confirm("Are you sure you want to delete?")) return;
            const updated = data.filter((el) => el.restaurantID !== id);
            saveResraurants(updated);
            setData(updated);
            alert("Restaurant deleted successfully");
        };
        const filtered = data.filter((el) => { return (
            (el.restaurantName.toLowercase().includes(search.toLowerCase()) ||
        el.address.toLowerCase().includes(search.toLowerCase())) &&
        (type === "" || el.type === type) && (parking === "" || el.parkingLot === (parking === "true"))
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
                    setparking={setParking}/>
                    <h2>Add Restaurant</h2>
                    <input placeholder="Name" value={form.restaurantName}
                    onChange={(e) => setForm({ ...form, restaurantName: e.target.value })} />
                    <input placeholder="Adress" value={form.address}
                    om onChange={(e) =>
                        setForm({ ...form, address: e.target.value })}/>
                        <select value={form.type}
                            onChange={(e) => 
                                setForm({ ... form, type: e.target.value})}>
                                    <option value="">Select Type</option>
                                    <option value="Rajasthani">Rajasthani</option>
                                    <option value="Gujarathi">Gujarathi</option>
                                    <option value="Mughlai">Mughlai</option>
                                    <option value="Jain">Jain</option>
                                    <option value="Thai">Thai</option>
                                    <option value="North Indian">North Indian</option>
                                    <option value="South Indian">South Indian</option>
                                </select>
                                <select value={form.parkingLot} onChange={(e) =>
                                    setForm({ ...form, parkingLot:
                                        e.target.value })}>
                                            <option value="">Parking?</option>
                                            <option value="true">Yes</option>
                                            <option value="false">No</option>
                                        </select>
                                        <button onClick={handleAdd}>Add</button>
                                        {filtered.map((el) => (
                                            <RestaurantCard
                                            key={el.restaurantID}
                                            data={el}
                                            isAdmin={true}
                                            onDelete={handleDelete}/>

                                        ))}
                                        </div>
        );
}
export default AdminDashboard;
