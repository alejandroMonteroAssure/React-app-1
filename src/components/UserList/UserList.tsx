import React from "react";
import UserCard from "../UserCard/UserCard";
import './UserList.css';
import type { User } from "../../users/IUser";

interface UserListProps{
    users: User[]
}

const UserList: React.FC<UserListProps> = ({users}) => {
    return (
        <div className="user-list">
            {users.map((user) => (
                <UserCard
                    key={user.id.toString()}
                    name={user.name}
                    role={user.role}
                    avatarUrl={user.avatar}
                    location={user.location}
                    isFavorite={user.isFavorite}
                />
            ))}
        </div>
    );
};

export default UserList;