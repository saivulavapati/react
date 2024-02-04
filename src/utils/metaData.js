const restaurents = [
    {
      info: {
        id: "362596",
        name: "Burger King",
        cloudinaryImageId: "e33e1d3ba7d6b2bb0d45e1001b731fcf",
        locality: "M Cube Mall",
        areaName: "Attapur",
        costForTwo: "₹350 for two",
        cuisines: ["Burgers", "American"],
        avgRating: 4,
        parentId: "166",
        avgRatingString: "4.0",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 23,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-05 05:00:00",
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
          header: "60% OFF",
          subHeader: "UPTO ₹120",
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
        link: "https://www.swiggy.com/restaurants/burger-king-m-cube-mall-attapur-hyderabad-362596",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "378344",
        name: "Theobroma",
        cloudinaryImageId: "b033728dcb0101ceb19bff0e1e1f6474",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "₹400 for two",
        cuisines: ["Desserts"],
        avgRating: 4.5,
        parentId: "1040",
        avgRatingString: "4.5",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 6.4,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "6.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-05 00:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
              shortDescription: "Perfect Cake Delivery",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "v1705582451/Ratnesh_Badges/Listing_HR.png",
                    shortDescription: "Perfect Cake Delivery",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          discountTag: "FLAT DEAL",
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
        link: "https://www.swiggy.com/restaurants/theobroma-banjara-hills-hyderabad-378344",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "11091",
        name: "Pizza Hut",
        cloudinaryImageId: "2b4f62d606d1b2bfba9ba9e5386fabb7",
        locality: "Attapur",
        areaName: "Attapur",
        costForTwo: "₹350 for two",
        cuisines: ["Pizzas"],
        avgRating: 3.9,
        parentId: "721",
        avgRatingString: "3.9",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-05 00:00:00",
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
          header: "ITEMS",
          subHeader: "AT ₹179",
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
        link: "https://www.swiggy.com/restaurants/pizza-hut-attapur-hyderabad-11091",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "124165",
        name: "Starbucks Coffee",
        cloudinaryImageId: "182191ab163770437b62861a6f987709",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "₹400 for two",
        cuisines: [
          "Beverages",
          "Cafe",
          "Snacks",
          "Desserts",
          "Bakery",
          "Ice Cream",
        ],
        avgRating: 4.3,
        parentId: "195515",
        avgRatingString: "4.3",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 40,
          lastMileTravel: 6.6,
          serviceability: "SERVICEABLE",
          slaString: "40-45 mins",
          lastMileTravelString: "6.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-04 22:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
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
        link: "https://www.swiggy.com/restaurants/starbucks-coffee-banjara-hills-hyderabad-124165",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "140111",
        name: "Imperial Multi-Cusine Restaurant",
        cloudinaryImageId: "yeednzto1jusnnhswke0",
        locality: "Tolichowki",
        areaName: "Tolichowki",
        costForTwo: "₹400 for two",
        cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
        avgRating: 4.3,
        parentId: "19254",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 31,
          lastMileTravel: 4.9,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.9 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-04 23:59:00",
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
          header: "40% OFF",
          subHeader: "UPTO ₹80",
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
        link: "https://www.swiggy.com/restaurants/imperial-multi-cusine-restaurant-tolichowki-hyderabad-140111",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "27739",
        name: "Cafe Niloufer Classic",
        cloudinaryImageId: "1171b83d63d7c203e5f1c3e16980cd89",
        locality: "Oshiwara",
        areaName: "Red Hills",
        costForTwo: "₹150 for two",
        cuisines: ["Bakery", "Beverages", "Snacks", "Desserts"],
        avgRating: 4.6,
        parentId: "466854",
        avgRatingString: "4.6",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 5.5,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "5.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-05 00:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
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
        link: "https://www.swiggy.com/restaurants/cafe-niloufer-classic-oshiwara-red-hills-hyderabad-27739",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "28108",
        name: "Al Rabea Al Arabi Cafeteria",
        cloudinaryImageId: "jnzmscxd37rbjmgciwt5",
        locality: "Mehdipatnam",
        areaName: "Mehdipatnam",
        costForTwo: "₹250 for two",
        cuisines: ["Arabian", "Lebanese"],
        avgRating: 4.4,
        parentId: "7582",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 24,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-05 00:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {},
          },
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
        link: "https://www.swiggy.com/restaurants/al-rabea-al-arabi-cafeteria-mehdipatnam-hyderabad-28108",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "17105",
        name: "KFC",
        cloudinaryImageId: "f01666ac73626461d7455d9c24005cd4",
        locality: "Mehdipatnam",
        areaName: "Mehdipatnam",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        avgRating: 4.2,
        parentId: "547",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "20-25 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-05 01:00:00",
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
          header: "40% OFF",
          subHeader: "UPTO ₹80",
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
        link: "https://www.swiggy.com/restaurants/kfc-mehdipatnam-hyderabad-17105",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "23734",
        name: "McDonald's",
        cloudinaryImageId: "03501c33ecb3a3105124441e541e6fe4",
        locality: "Mehdipatnam",
        areaName: "Humayun Nagar",
        costForTwo: "₹400 for two",
        cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
        avgRating: 4.2,
        parentId: "630",
        avgRatingString: "4.2",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 28,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-05 02:45:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "40% OFF",
          subHeader: "UPTO ₹80",
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
        link: "https://www.swiggy.com/restaurants/mcdonalds-mehdipatnam-humayun-nagar-hyderabad-23734",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "1590",
        name: "Sarvi Restaurant",
        cloudinaryImageId: "ds6nasa6qpxunkhglz5g",
        locality: "Banjara Hills",
        areaName: "Banjara Hills",
        costForTwo: "₹400 for two",
        cuisines: [
          "Biryani",
          "Chinese",
          "Indian",
          "Kebabs",
          "Tandoor",
          "Desserts",
        ],
        avgRating: 4.3,
        parentId: "4623",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 6.2,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "6.2 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-05 00:00:00",
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
          header: "10% OFF",
          subHeader: "UPTO ₹40",
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
        link: "https://www.swiggy.com/restaurants/sarvi-restaurant-banjara-hills-hyderabad-1590",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "82407",
        name: "Hotel Rumaan",
        cloudinaryImageId: "a8pbvrbxjkor9ehq5jec",
        locality: "Tolichowki",
        areaName: "Tolichowki",
        costForTwo: "₹300 for two",
        cuisines: ["Biryani", "Chinese", "Indian", "Kebabs", "Tandoor"],
        avgRating: 4.3,
        parentId: "9008",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-05 00:00:00",
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
          header: "40% OFF",
          subHeader: "UPTO ₹80",
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
        link: "https://www.swiggy.com/restaurants/hotel-rumaan-tolichowki-hyderabad-82407",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "34562",
        name: "Tipsy Topsy",
        cloudinaryImageId: "aksuckknndyugwgnebdd",
        locality: "Ambedkar Colony",
        areaName: "Mehdipatnam",
        costForTwo: "₹250 for two",
        cuisines: ["Chinese", "Italian", "Desserts", "Bakery"],
        avgRating: 3.6,
        parentId: "1045",
        avgRatingString: "3.6",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 3.7,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-04 23:45:00",
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
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
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
        link: "https://www.swiggy.com/restaurants/tipsy-topsy-ambedkar-colony-mehdipatnam-hyderabad-34562",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "30253",
        name: "Agra Sweets Banjara",
        cloudinaryImageId: "nav4ebkoxrwlladx7a5m",
        locality: "Utkoor- Mogdumpur road",
        areaName: "Rambagh Colony",
        costForTwo: "₹250 for two",
        cuisines: ["Sweets", "Desserts", "Chaat", "Snacks", "Beverages"],
        avgRating: 4.3,
        veg: true,
        parentId: "34",
        avgRatingString: "4.3",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 26,
          lastMileTravel: 3.5,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "3.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-04 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
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
        link: "https://www.swiggy.com/restaurants/agra-sweets-banjara-utkoor-mogdumpur-road-rambagh-colony-hyderabad-30253",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "6498",
        name: "Hotel Sandarshini",
        cloudinaryImageId: "9f5783b9975a73ec001560327065a01c",
        locality: "Road No 1",
        areaName: "Masab Tank",
        costForTwo: "₹200 for two",
        cuisines: ["Chinese", "South Indian", "Juices"],
        avgRating: 4.4,
        veg: true,
        parentId: "476",
        avgRatingString: "4.4",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 5,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "5.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-04 22:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "pureveg",
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "10% OFF",
          subHeader: "ABOVE ₹600",
          discountTag: "FLAT DEAL",
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
        link: "https://www.swiggy.com/restaurants/hotel-sandarshini-road-no-1-masab-tank-hyderabad-6498",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "9296",
        name: "Subway",
        cloudinaryImageId: "63178e3e64d503a479f2a2048a474552",
        locality: "Humayun Nagar",
        areaName: "Mehdipatnam",
        costForTwo: "₹350 for two",
        cuisines: ["Salads", "Snacks", "Desserts", "Beverages"],
        avgRating: 3.8,
        parentId: "2",
        avgRatingString: "3.8",
        totalRatingsString: "10K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 2.8,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-05 00:00:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "30% OFF",
          subHeader: "UPTO ₹75",
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
        link: "https://www.swiggy.com/restaurants/subway-humayun-nagar-mehdipatnam-hyderabad-9296",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "651179",
        name: "Soul Rasa",
        cloudinaryImageId: "d4e6d04548a11e49b2c1f7efe9806fb9",
        locality: "Sheikpet village",
        areaName: "Banjara Hills",
        costForTwo: "₹300 for two",
        cuisines: [
          "Indian",
          "Healthy Food",
          "Home Food",
          "North Indian",
          "South Indian",
        ],
        avgRating: 4.3,
        parentId: "239281",
        avgRatingString: "4.3",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 34,
          lastMileTravel: 4.8,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "4.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-04 23:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
              description: "OnlyOnSwiggy",
            },
          ],
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "brand",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    description: "OnlyOnSwiggy",
                    imageId:
                      "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  },
                },
              ],
            },
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "brand",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹120",
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
        link: "https://www.swiggy.com/restaurants/soul-rasa-sheikpet-village-banjara-hills-hyderabad-651179",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "62509",
        name: "Ohri's Cake Nation",
        cloudinaryImageId: "5a7d6bc7b47b77e0d517e8608e740da9",
        locality: "Ohri'S Banjara",
        areaName: "Banjara Hills",
        costForTwo: "₹450 for two",
        cuisines: ["Bakery", "Desserts", "Beverages"],
        avgRating: 4.2,
        veg: true,
        parentId: "233127",
        avgRatingString: "4.2",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 35,
          lastMileTravel: 6.6,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "6.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-05 01:30:00",
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
          header: "60% OFF",
          subHeader: "UPTO ₹120",
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
        link: "https://www.swiggy.com/restaurants/ohris-cake-nation-ohris-banjara-banjara-hills-hyderabad-62509",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "312287",
        name: "Zomoz - The Momo Company",
        cloudinaryImageId: "okkier1zvmpp2p3xccji",
        locality: "Santosh Nagar",
        areaName: "Mehdipatnam",
        costForTwo: "₹250 for two",
        cuisines: [
          "Chinese",
          "Tibetan",
          "North Eastern",
          "Street Food",
          "Asian",
          "Fast Food",
        ],
        avgRating: 4.4,
        parentId: "10838",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 25,
          lastMileTravel: 2.3,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "2.3 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-04 23:45:00",
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
          header: "40% OFF",
          subHeader: "UPTO ₹80",
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
        link: "https://www.swiggy.com/restaurants/zomoz-the-momo-company-santosh-nagar-mehdipatnam-hyderabad-312287",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "68320",
        name: "Faasos - Wraps, Rolls & Shawarma",
        cloudinaryImageId: "af33b81798b11deba338e94b7585d348",
        locality: "Ground floor, Mehdipatnam (Behind Mina Hospital)",
        areaName: "Humayun Nagar",
        costForTwo: "₹200 for two",
        cuisines: [
          "Kebabs",
          "Fast Food",
          "Snacks",
          "American",
          "Healthy Food",
          "Desserts",
          "Beverages",
        ],
        avgRating: 3.9,
        parentId: "21809",
        avgRatingString: "3.9",
        totalRatingsString: "5K+",
        sla: {
          deliveryTime: 32,
          lastMileTravel: 3,
          serviceability: "SERVICEABLE",
          slaString: "30-35 mins",
          lastMileTravelString: "3.0 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-04 23:59:00",
          opened: true,
        },
        badges: {
          textExtendedBadges: [
            {
              iconId: "guiltfree/GF_Logo_android_3x",
              shortDescription: "options available",
              fontColor: "#7E808C",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            imageBased: {},
            textBased: {},
            textExtendedBadges: {
              badgeObject: [
                {
                  attributes: {
                    description: "",
                    fontColor: "#7E808C",
                    iconId: "guiltfree/GF_Logo_android_3x",
                    shortDescription: "options available",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "60% OFF",
          subHeader: "UPTO ₹110",
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
        link: "https://www.swiggy.com/restaurants/faasos-wraps-rolls-and-shawarma-ground-floor-mehdipatnam-behind-mina-hospital-humayun-nagar-hyderabad-68320",
        type: "WEBLINK",
      },
    },
    {
      info: {
        id: "400157",
        name: "The Belgian Waffle Co.",
        cloudinaryImageId: "5116a385bac0548e06c33c08350fbf11",
        locality: "Somi Reddy Nagar",
        areaName: "Attapur",
        costForTwo: "₹200 for two",
        cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
        avgRating: 4.4,
        veg: true,
        parentId: "2233",
        avgRatingString: "4.4",
        totalRatingsString: "1K+",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2024-02-04 23:45:00",
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
        link: "https://www.swiggy.com/restaurants/the-belgian-waffle-co-somi-reddy-nagar-attapur-hyderabad-400157",
        type: "WEBLINK",
      },
    },
  ];

  export default restaurents;