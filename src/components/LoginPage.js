import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Image, Header, Button, Container, Form, Grid, GridColumn, Segment } from 'semantic-ui-react';
import Generic from '../generic.jpg'
import '../index.css';

const flowIDs = []
const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [userID, setID] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();
    const loginSuccess = () => navigate('/beers')
    
    const addEmail = () => {

        axios.post('https://concise-bloom-327806.wl.r.appspot.com/2fa', {
            email: email,
            }).then(response => {
                console.log('response >>> ', response);
                let id = response.data.account_id
                alert("Your user ID is \n" + id + "\nPlease save this for future login")
            }).catch(error => {
                alert("This email is already associated with an account")
            });
            setEmail("")
    }

    const attemptLogin = () => {
        axios.post('https://concise-bloom-327806.wl.r.appspot.com/2fa/flow', {
            account_id: parseInt(userID),
            }).then(response => {
                console.log('response >>> ', response);
                let flow = response.data.flow_id
                flowIDs.push(flow)
                console.log(flowIDs)
                alert("Check your email for a code")
                
            }).catch(error => {
                console.log(error)
                alert("This is not a valid ID")
            });
            setID("")
    }
    
    const confirmPassword = () => {
        let flow_id = flowIDs.pop()
        axios.put('https://concise-bloom-327806.wl.r.appspot.com/2fa/flow/' + flow_id, {
            code: parseInt(password),
            }).then(response => {
                console.log('response >>> ', response);
                
                if (response.data.authenticated === true) {
                    loginSuccess()
                }
            }).catch(error => {
                alert("This is not a valid code")
            });
            setPassword("")
    }
    

    return (
        <Segment className="bg">
            <Header as="h1"><Image circular src={ Generic } alt="Logo"/>Welcome to the Beer Ratings Database

            </Header>
            <Grid centered>
                <GridColumn style={{maxWidth: 350, top:50}}>
                    <Form>
                        <Form.Input
                            label="If you are a first time user, please enter your email: "
                            placeholder= "Email:" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            
                        />
                        <Button primary size="tiny" type = 'submit'
                            value="Join"
                            onClick={addEmail}>Submit
                        </Button>
                        <Form.Input
                                label = "Existing members, please use your ID: "
                                placeholder= "ID:" 
                                value={userID}
                                onChange={e => setID(e.target.value)}
                        />
                        <Button primary size="tiny"type = 'submit'
                            onClick={attemptLogin}>Get one time password
                        </Button>
                        <Form.Input
                                label = "Enter your one time password: "
                                placeholder="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                        />
                        <Button primary size="tiny" type='submit'
                            value="Login"
                            onClick={confirmPassword}>Login
                        </Button>
                    </Form>
                </GridColumn>
            </Grid>
        </Segment>
    )
}

export default LoginPage;