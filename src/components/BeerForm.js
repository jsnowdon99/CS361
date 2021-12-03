import React, { useState } from "react";
import { Button, Form, Input, Rating } from "semantic-ui-react";

export const BeerForm = ({newBeer}) => {
    const [name, setName] = useState('');
    const [notes, setNotes] = useState('');
    const [rating, setRating] = useState(1);

    return (
        <Form className="ui form">
            <Form.Field>
                <Input placeholder='Enter a beer to rate...' value={name} 
                onChange={e => setName(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Input placeholder='Any notes?...' value={notes} 
                onChange={e => setNotes(e.target.value)}/>
            </Form.Field>
            <Form.Field>
                <Rating icon='star' value={rating} maxRating={10} 
                onRate={(_, data) => {
                    setRating(data.rating)
                }}
                />
            </Form.Field>
            <Form.Field>
                <Button onClick={async () => {
                    const beer = { name, rating, notes };
                    if (name == ""){
                        return window.alert('Please enter a beer to rate.')
                    }
                    const response = await fetch('/mybeers', {
                        method: 'POST',
                        headers: {
                            "Content-Type":"application/json"
                        },
                        body:JSON.stringify(beer)
                    })
                    console.log(response)
                    if (response.ok) {
                    newBeer(beer)
                    setName("");
                    setRating(1);
                    }
                }}>
                    Submit Beer
                </Button>
            </Form.Field>
        </Form>
    )
}