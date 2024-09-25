import React from "react";
import Card from "./Card";

const CardList = ({robots}) => {

    const cardArray = robots.map(user =>   <Card key= {user.id} name = {user.name} id = {user.id} email = {user.email}/>);
    return (
        <div>
        {cardArray}
        </div>
    );
}

export default CardList;