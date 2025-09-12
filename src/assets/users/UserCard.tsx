import React from "react";

type UserProps = {
    name: string; 
    role: string;
    avatar: string;
    location: string;
    isFavorite: true;
};

export const UserCard = (
    {name, role, avatar, location, isFavorite}: UserProps
) => {
    console.log(`Role is ${role}, and name is ${name} and avatar is ${avatar} and location is ${location} is favorite? ${isFavorite}`);
};