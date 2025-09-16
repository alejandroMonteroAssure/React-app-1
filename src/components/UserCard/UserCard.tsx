import React from "react";
import FavoriteIcon from "../icons/FavoriteIcon";
import LocationIcon from "../icons/LocationIcon";
import './UserCard.css'

export interface UserCardProps {
    key: string,
    name: string; 
    role: string;
    avatarUrl: string;
    location: string;
    isFavorite: boolean;
};

const UserCard: React.FC<UserCardProps> = ({
    key,
    name,
    role,
    avatarUrl,
    location,
    isFavorite
}) => {
    return (
        <div className="user-card" key={key}>
           <div className="avatar-like">
             <div>
              <img src={avatarUrl} alt={`${name} avatar`}/>
             </div>
             <FavoriteIcon
                width="1rem"
                color={isFavorite? "#3789BC" : "#9dbed2ff"}
             />
            </div>
          <div className="user-data">
            <p className="name">{name}</p>
            <p className="role">{role}</p>
            <div className="location-div">
                <LocationIcon
                />
              <p className="location">{location}</p>
            </div>

            <p></p>
          </div>
        </div>

    )
};

export default UserCard;