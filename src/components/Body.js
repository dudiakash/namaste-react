import RestaurantCard from "./RestauantCard";

const Body = () => {
  let listOfRestaurants = [
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
      }
  ];

  return (
    <div className="body">
      <div className="filter">
        <button
          className="fliter-btn"
          onClick={() => {
            listOfRestaurants = listOfRestaurants.filter(
                (res) => res.avgRating>4
            )
            console.log(listOfRestaurants)
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
