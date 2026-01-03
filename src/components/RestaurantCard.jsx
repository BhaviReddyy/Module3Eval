import { useNavigate } from "react-router-dom";

const RestaurantCard = ({ restaurant, isAdmin, onDelete }) => {
  const navigate = useNavigate();

  const {
    restaurantID,
    restaurantName,
    address,
    type,
    parkingLot,
    image
  } = restaurant;

  const handleUpdate = () => {
    navigate(`/admin/restaurants/update/${restaurantID}`);
  };

  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <img
        src={image}
        alt={restaurantName}
        style={{ width: "100%", height: "150px", objectFit: "cover" }}
      />

      <h3>{restaurantName}</h3>
      <p><strong>Address:</strong> {address}</p>
      <p><strong>Type:</strong> {type}</p>
      <p>
        <strong>Parking:</strong> {parkingLot ? "Available" : "Not Available"}
      </p>

      {isAdmin && (
        <div style={{ display: "flex", gap: "10px" }}>
          <button onClick={handleUpdate}>Update</button>
          <button onClick={() => onDelete(restaurantID)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default RestaurantCard;
