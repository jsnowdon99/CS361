import React, { useState } from "react";
import { Button, Form, Input, Rating, StepTitle } from "semantic-ui-react";

export const BeerForm = ({newBeer}) => {
    const [name, setName] = useState('');
    const [rating, setRating] = useState(1);

    return (
        <Form>
            <Form.Field>
                <Input placeholder='Enter a beer to rate...' value={name} 
                onChange={e => setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Rating icon='star' value={rating} maxRating={5} 
                onRate={(_, data) => {
                    setRating(data.rating)
                }}
                />
            </Form.Field>
            <Form.Field>
                <Button onClick={async () => {
                    const beer = {name, rating};
                    const response = await fetch('/mybeer', {
                        method: 'POST',
                        headers: {
                            'Content-Type':'application/json'
                        },
                        body:JSON.stringify(beer)
                    });
                    newBeer(beer)
                    setName("");
                    setRating(1);
                }}>
                    Submit Beer
                </Button>
            </Form.Field>
        </Form>
    )
}