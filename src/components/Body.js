import RestaurentCard from "./RestaurentCard";
import restaurents from "../utils/metaData";
import { useState } from "react";

const Body = () => {
  const arr = useState(restaurents)
  const [restaurentList,setRestaurentList] = arr
  return(
    <div>
      <div className="search-container">
        <div className="search"></div>
        <button className="filter-btn" onClick={()=>{
          const filteredList = restaurentList.filter((eachRes)=> eachRes?.info?.avgRating>=4)
          setRestaurentList(filteredList)
        }}>Top Rated Restaurents</button>
      </div>
      <div className="res-container">
        {restaurentList.map((eachResData) => (
          <RestaurentCard key={eachResData?.info?.id} resData={eachResData} />
        ))}
      </div>
    </div>
  )
};

export default Body;