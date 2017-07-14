import React from 'react';
import price_item_creator from './price_item_creator';

export default function price_list_creator(props){
    const Price_Array = props.Price_Array;
    const Ticket_Array = props.Ticket_Array;
    
    return(
        <div>
        {Price_Array.map((number) =>
        <price_item_creator key = {number.toString()}
        Price_Array = {Price_Array[number - 1]} 
        Ticket_Array = {Ticket_Array[number - 1]} />
        )}
        </div>
    );
} 