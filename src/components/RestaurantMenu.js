import {useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantMenu = () => {

    const {resId} = useParams();

    const [restaurantData,setRestaurantData] = useState(null);

    useEffect(()=>{
        fetchItems()
    },[])

    const fetchItems = async () => {
        const respose = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.37240&lng=78.43780&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
        const json = await respose.json();
        // console.log(json)
        // console.log(json.data.cards[0].card.card.info);
        setRestaurantData(json.data)
        // setMenuItems(json.data.cards[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards)
    }

    if(restaurantData === null){
        return(<Shimmer/>)
    }

    const {name,cuisines,totalRatingsString,areaName} = restaurantData?.cards[0]?.card?.card?.info;
    const {itemCards} = restaurantData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    console.log(itemCards)

    return(
        <div>
            <div>
                <h1>{name}</h1>
                <h2>{cuisines.join(",")}</h2>
                <h2>{areaName}</h2>
                <h2>{totalRatingsString}</h2>
                <hr></hr>
            </div>
            {itemCards.length != 0 ?itemCards.map((eachMenuItem)=><>
                <li key={eachMenuItem.id}>{eachMenuItem.card.info.name}----Rs{eachMenuItem.card.info?.price}</li>
            </>):<h1>Hello</h1>}
        </div>
       
    )
}

export default RestaurantMenu;