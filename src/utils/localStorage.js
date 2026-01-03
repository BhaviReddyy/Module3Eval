const STORAGE_KEY = "evaData";

export const getRestaurants = () => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};

export const saveRestaurants = (data) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};

export const addRestaurant = (restaurant) => {
  const data = getRestaurants();
  data.push(restaurant);
  saveRestaurants(data);
};

export const updateRestaurant = (updatedRestaurant) => {
  const data = getRestaurants().map((item) =>
    item.restaurantID === updatedRestaurant.restaurantID
      ? updatedRestaurant
      : item
  );
  saveRestaurants(data);
};

export const deleteRestaurant = (id) => {
  const data = getRestaurants().filter(
    (item) => item.restaurantID !== id
  );
  saveRestaurants(data);
};
