import RestaurentCard from "./RestaurentCard";
import restaurents from "../utils/metaData";
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [restaurentList,setRestaurentList] = useState([])

  const [filteredRestaurent,setFilteredRestaurent]=useState([])

  const [searchText,setSearchText] = useState("")

  useEffect(()=>{
    fetchData()
  },[])

  const fetchData = async ()=> {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    setRestaurentList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredRestaurent(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  }

  if(restaurentList.length === 0){
    return <Shimmer/>
  }

  return(
    <div>
      <div>
        <div className="search-container">
          <input className="search-inp" type="search" placeholder="search restaurant..." value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
          <button className="search-btn" onClick={()=> {
            const filteredList = restaurentList.filter((eachRes) => eachRes.info.name.toLowerCase().includes(searchText.toLocaleLowerCase()))
            setFilteredRestaurent(filteredList)
            }}>
              search</button>
        </div>
        <button className="filter-btn" onClick={()=>{
          const filteredList = restaurentList.filter((eachRes)=> eachRes?.info?.avgRating>=4)
          setRestaurentList(filteredList)
        }}>Top Rated Restaurents</button>
      </div>
      <div className="res-container">
        {filteredRestaurent.map((eachResData) => (
          <RestaurentCard key={eachResData?.info?.id} resData={eachResData} />
        ))}
      </div>
    </div>
  )
};

export default Body;