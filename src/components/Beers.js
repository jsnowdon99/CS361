import React from "react";
import { List, Rating, Image } from "semantic-ui-react"
import Generic from '../generic.jpg'

export const Beers = ({ beers }) => {
    return(
        <div class="ui segment">
            <List selection verticalAlign='middle' size='massive'>
                {beers.map(beer => {
                    return (
                        <List.Item key={beer.name}>
                            <Image avatar src={ Generic } alt="Logo"/>
                            <List.Content>
                            {beer.name}
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