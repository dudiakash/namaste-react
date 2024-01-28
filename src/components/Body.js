import RestaurantCard from "./RestauantCard";
import { useState } from "react";
import restData from "../utils/mockData";
const Body = () => {
  // state variable
  const [listOfRestaurants, setListOfRestaurants] = useState(restData);

  let listOfRestaurantsJS = [
    {
      id: "17036",
      name: "Leon's - Burgers & Wings (Leon Grill)",
      cloudinaryImageId: "b2edbc28b7b8219d6e0a9c049ce06658",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 3.8,
      totalRatingsString: "10K+",
      deliveryTime: 18,
    },
    {
      id: "17037",
      name: "Dominos",
      cloudinaryImageId: "b2edbc28b7b8219d6e0a9c049ce06658",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.5,
      totalRatingsString: "10K+",
      deliveryTime: 18,
    },
    {
      id: "17038",
      name: "MacD",
      cloudinaryImageId: "b2edbc28b7b8219d6e0a9c049ce06658",
      costForTwo: "₹300 for two",
      cuisines: ["American", "Snacks", "Turkish", "Portuguese", "Continental"],
      avgRating: 4.6,
      totalRatingsString: "10K+",
      deliveryTime: 18,
    },
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="fliter-btn"
          onClick={() => {
            const filterList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.4
            );
            setListOfRestaurants(filterList)
          }
        }
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
