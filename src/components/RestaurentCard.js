import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
    const { resData } = props;
    const {name,avgRatingString,cuisines} = resData?.info
    const{slaString} = resData?.info?.sla
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            resData.info.cloudinaryImageId
          }
        />
        <div className="res-details">
          <h4>{name}</h4>
          <h5>{avgRatingString} . {slaString}</h5>
          <h5>{cuisines.join(" , ")}</h5>
        </div>
      </div>
    );
  };

  export default RestaurentCard;