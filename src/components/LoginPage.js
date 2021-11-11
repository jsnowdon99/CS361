import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Container } from 'semantic-ui-react';

const flowIDs = []
const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [userID, setID] = useState('')
    const [password, setPassword] = useState('')
    // const [error, setError] = useState(null)
    const navigate = useNavigate();
    const loginSuccess = () => navigate('/beers')
    const addEmail = () => {
        // alert("Please check your email");

        axios.post('https://concise-bloom-327806.wl.r.appspot.com/2fa', {
            email: email,
            }).then(response => {
                console.log('response >>> ', response);
                let id = response.data.account_id
                alert("Your user ID is \n" + id + "\nPlease save this for future login")
            }).catch(error => {
                alert("This email is already associated with an account")
            });
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
    }
    

    return (
        <div class="row justify-content-md-center" style={{marginTop:40}}>
            <Container class="col-md-auto">
                If you are a first time user, please enter your email:
                <div>
                    Email: <br/>
                    <input type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                
                </div>
                <div><input type="button"
                    value="Join"
                    onClick={addEmail}/></div>
                <br/><br/><br/>
                <div>
                    Existing members, please use your ID: <br/>
                    <input type="number"
                    value={userID}
                    onChange={e => setID(e.target.value)}/>
                
                </div>
                <input type="button"
                    value="Get my one time password"
                    onClick={attemptLogin}/>
                    <br/>
                <div>
                    Enter your one time password:<br/>
                    <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <div></div>
                {/* {error && <div className="error">{error}</div>} */}
                <div>
                    <input type="button"
                    value="Login"
                    onClick={confirmPassword}/>
                </div>
                </Container>
            </div>
        
    
    )
}

export default LoginPage;