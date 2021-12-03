import React, {useState} from "react";
import { List, Rating, Image, Button } from "semantic-ui-react"
import Beer from '../beer.png'

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
            <List horizontalAlign="left">
                {beers.map(beer => {
                    return (
                        <List.Item key={beer.name}>
                            <Image avatar src='https://pngimg.com/uploads/beer/beer_PNG2382.png' />
                            <List.Content>
                                <List.Header>{beer.name}</List.Header>
                                <List.Description>{beer.notes}</List.Description>
                            </List.Content>
                            <List.Content floated='right'> 
                            <Button size="tiny" color="red" onClick= { async () => deleteBeer(beer.name)}>Delete</Button>
                            </List.Content>
                            <List.Content floated='right'> 
                            <Rating rating={beer.rating} maxRating={10} disabled/>
                            </List.Content>
                        </List.Item>
                        )
                    })}
            </List>
        </div>
    )
}