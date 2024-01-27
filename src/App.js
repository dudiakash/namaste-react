import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/* 
1. Header
    1.1 Logo
    1.2 Nav Items
2. Body
    2.1 Seacrch
    2.2 Restaurant Container
        2.2.1 Restaurant Cards
            2.2.1.1 image
            2.2.1.2 name of res, Start Rating, Cuisine, delivery Time
3. Footer
    3.1 Copyright
    3.2 Links
    3.3 Address
    3.4 Contact
 */

const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/png-vector/20220705/ourmid/pngtree-food-logo-png-image_5687686.png"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "#f0f0f0",
};

const RestaurantCardComponent = (props) => {
    const {costForTwo,name,cuisines,avgRating,sla,cloudinaryImageId} = props?.resData?.info;
    const {test} = props.resData.info;
  console.log(props);
  return (
    <div className="res-card" style={styleCard}>
      <img className="res-logo" alt="res-logo" src={
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla.deliveryTime +" mins"}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

const restData = {
    "restaurants": [
        {
          "info": {
            "id": "17036",
            "name": "Leon's - Burgers & Wings (Leon Grill)",
            "cloudinaryImageId": "b2edbc28b7b8219d6e0a9c049ce06658",
            "locality": "HSR Layout",
            "areaName": "HSR Layout",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "American",
              "Snacks",
              "Turkish",
              "Portuguese",
              "Continental"
            ],
            "avgRating": 4.4,
            "parentId": "371281",
            "avgRatingString": "4.4",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 18,
              "lastMileTravel": 1.2,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.2 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-28 04:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹299",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-b357dc6f-d27d-4480-8a54-9c0f749dd43d"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/leons-burgers-and-wings-leon-grill-hsr-layout-bangalore-17036",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "376708",
            "name": "Chinese Wok",
            "cloudinaryImageId": "e0839ff574213e6f35b3899ebf1fc597",
            "locality": "3rd Sector",
            "areaName": "HSR Layout",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Chinese",
              "Asian",
              "Tibetan",
              "Desserts"
            ],
            "avgRating": 4.1,
            "parentId": "61955",
            "avgRatingString": "4.1",
            "totalRatingsString": "5K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-28 02:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-b357dc6f-d27d-4480-8a54-9c0f749dd43d"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/chinese-wok-3rd-sector-hsr-layout-bangalore-376708",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "36001",
            "name": "California Burrito",
            "cloudinaryImageId": "y5inlfbbp3v8c8warrgb",
            "locality": "HSR Layout",
            "areaName": "HSR Layout",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Mexican",
              "American",
              "Salads",
              "Continental",
              "Keto",
              "Healthy Food"
            ],
            "avgRating": 4.6,
            "parentId": "1252",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 19,
              "lastMileTravel": 1.9,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "1.9 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-28 03:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "20% OFF",
              "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-b357dc6f-d27d-4480-8a54-9c0f749dd43d"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/california-burrito-hsr-layout-bangalore-36001",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "29954",
            "name": "Beijing Bites",
            "cloudinaryImageId": "ca0eb08d0635fd6da2e5a480fec897d0",
            "locality": "1st Sector",
            "areaName": "HSR Layout",
            "costForTwo": "₹450 for two",
            "cuisines": [
              "Chinese"
            ],
            "avgRating": 4.3,
            "parentId": "103",
            "avgRatingString": "4.3",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 20,
              "lastMileTravel": 0.3,
              "serviceability": "SERVICEABLE",
              "slaString": "15-20 mins",
              "lastMileTravelString": "0.3 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-28 00:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹100 OFF",
              "subHeader": "ABOVE ₹599",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-b357dc6f-d27d-4480-8a54-9c0f749dd43d"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/beijing-bites-1st-sector-hsr-layout-bangalore-29954",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "18973",
            "name": "Nandhana Palace",
            "cloudinaryImageId": "195876a3181ef63f76e45e3a7b49b585",
            "locality": "Koramangala",
            "areaName": "Koramangala",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Biryani",
              "Andhra",
              "South Indian",
              "North Indian"
            ],
            "avgRating": 4.2,
            "parentId": "2120",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 31,
              "lastMileTravel": 5,
              "serviceability": "SERVICEABLE",
              "slaString": "30-35 mins",
              "lastMileTravelString": "5.0 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-28 02:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹399",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-b357dc6f-d27d-4480-8a54-9c0f749dd43d"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/nandhana-palace-koramangala-bangalore-18973",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "289260",
            "name": "BOX8 - Desi Meals",
            "cloudinaryImageId": "69a061b7e0f951cef2b4947946f94ec6",
            "locality": "2nd Sector",
            "areaName": "HSR Layout",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "North Indian",
              "Biryani",
              "Thalis",
              "Home Food"
            ],
            "avgRating": 4.5,
            "parentId": "10655",
            "avgRatingString": "4.5",
            "totalRatingsString": "1K+",
            "sla": {
              "deliveryTime": 15,
              "lastMileTravel": 1.1,
              "serviceability": "SERVICEABLE",
              "slaString": "10-20 mins",
              "lastMileTravelString": "1.1 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-28 02:00:00",
              "opened": true
            },
            "badges": {
              "textExtendedBadges": [
                {
                  "iconId": "guiltfree/GF_Logo_android_3x",
                  "shortDescription": "options available",
                  "fontColor": "#7E808C"
                }
              ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {
                  "badgeObject": [
                    {
                      "attributes": {
                        "description": "",
                        "fontColor": "#7E808C",
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available"
                      }
                    }
                  ]
                }
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-b357dc6f-d27d-4480-8a54-9c0f749dd43d"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/box8-desi-meals-2nd-sector-hsr-layout-bangalore-289260",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "712380",
            "name": "Chicago Pizza",
            "cloudinaryImageId": "80f040545552605e33eba09f8fa30be9",
            "locality": "khb colony",
            "areaName": "Koramangala",
            "costForTwo": "₹500 for two",
            "cuisines": [
              "Pizzas",
              "Fast Food",
              "Italian"
            ],
            "avgRating": 4.1,
            "parentId": "60277",
            "avgRatingString": "4.1",
            "totalRatingsString": "100+",
            "sla": {
              "deliveryTime": 38,
              "lastMileTravel": 6.5,
              "serviceability": "SERVICEABLE",
              "slaString": "35-40 mins",
              "lastMileTravelString": "6.5 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-28 01:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹499",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-b357dc6f-d27d-4480-8a54-9c0f749dd43d"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/chicago-pizza-khb-colony-koramangala-bangalore-712380",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "151043",
            "name": "Sardarji Londonwaley",
            "cloudinaryImageId": "llvtiin3pqb9ara2qmdt",
            "locality": "Haralur Main Road",
            "areaName": "Hsr Layout",
            "costForTwo": "₹300 for two",
            "cuisines": [
              "North Indian",
              "Chinese",
              "Indian",
              "Mughlai",
              "Biryani"
            ],
            "avgRating": 4.1,
            "parentId": "7808",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 2.6,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "2.6 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-28 03:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "₹125 OFF",
              "subHeader": "ABOVE ₹249",
              "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-b357dc6f-d27d-4480-8a54-9c0f749dd43d"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/sardarji-londonwaley-haralur-main-road-hsr-layout-bangalore-151043",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
          "info": {
            "id": "791675",
            "name": "Sorbetto - Ice Creams",
            "cloudinaryImageId": "8e7a7b397bedfd0c2f040d20c2e75968",
            "locality": "Main Road",
            "areaName": "Bellandur Sarjapur",
            "costForTwo": "₹250 for two",
            "cuisines": [
              "Ice Cream"
            ],
            "avgRating": 4.6,
            "parentId": "488911",
            "avgRatingString": "4.6",
            "totalRatingsString": "20+",
            "sla": {
              "deliveryTime": 24,
              "lastMileTravel": 4.8,
              "serviceability": "SERVICEABLE",
              "slaString": "20-25 mins",
              "lastMileTravelString": "4.8 km",
              "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
              "nextCloseTime": "2024-01-28 00:00:00",
              "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
              "entityBadges": {
                "imageBased": {},
                "textBased": {},
                "textExtendedBadges": {}
              }
            },
            "aggregatedDiscountInfoV3": {
              "header": "50% OFF",
              "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
              "title": {},
              "subTitle": {},
              "message": {},
              "customIcon": {}
            },
            "differentiatedUi": {
              "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
              "differentiatedUiMediaDetails": {
                "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                "lottie": {},
                "video": {}
              }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "isNewlyOnboarded": true,
            "restaurantOfferPresentationInfo": {}
          },
          "analytics": {
            "context": "seo-data-b357dc6f-d27d-4480-8a54-9c0f749dd43d"
          },
          "cta": {
            "link": "https://www.swiggy.com/restaurants/sorbetto-ice-creams-main-road-bellandur-sarjapur-bangalore-791675",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
          },
          "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
      ]
}
const resObject = {
  info: {
    id: "17310",
    name: "KFC",
    cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
    locality: "HSR Layout",
    areaName: "HSR Layout",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.2,
    parentId: "547",
    avgRatingString: "4.2",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 20,
      lastMileTravel: 1.9,
      serviceability: "SERVICEABLE",
      slaString: "20-25 mins",
      lastMileTravelString: "1.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2024-01-27 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/kfc-hsr-layout-bangalore-17310",
    type: "WEBLINK",
  },
};

const BodyComponent = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {
            restData.restaurants.map(restaurant => <RestaurantCardComponent key={restaurant.info.id} resData={restaurant}/>)
        }
      </div>
    </div>
  );
};
const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <BodyComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
// Root is same as id of div in html
root.render(<AppLayout />);
// It will replace everything in root
