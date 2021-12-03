import React, {useState} from "react";
import { List, Rating, Image, Button } from "semantic-ui-react"
import Generic from '../generic.jpg'

const deleteBeer = (name) => {
    if ( window.confirm("Are you sure you want to delete this?")) {
        fetch('/mybeers/' + name, {
        method: "DELETE",
        header: {
            'Content-Type' : 'application/json'
        }
    });
    window.location.reload();
}
}

export const Beers = ({ beers }) => {
  


    return(
        <div class="ui segment">
            <List selection horizontalAlign= "left" verticalAlign='middle' size='massive'>
                {beers.map(beer => {
                    return (
                        <List.Item key={beer.name}>
                            
                            <List.Content floated="left">
                            <i class="beer icon"></i>
                            {beer.name}
                            </List.Content>
                            <List.Content floated='right'> 
                            <Button size="tiny" color="red" onClick= { async () => deleteBeer(beer.name)}>Delete</Button>
                            </List.Content>
                            <List.Content floated='right'> 
                            <Rating rating={beer.rating} maxRating={5} disabled/>
                            </List.Content>
                        </List.Item>
                        )
                    })}
            </List>
        </div>
    )
}