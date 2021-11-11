import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import BeerPage from "../components/BeerPage";

const LoginPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)
    const navigate = useNavigate();
    const loginSuccess = () => navigate('/beers')
    
    return (
        <div>
            Please enter your email:
                <div>
                <br/>
                    Email: <br/>
                    <input type="text"
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                
                </div>
                <div><input type="button"
                    value="Retrieve one time password"/></div>
                <br/>
                <div>
                    Enter your one time password:<br/>
                    <input type="password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}/>
                </div>
                <div><br/></div>
                {error && <div className="error">{error}</div>}
                <div>
                    <input type="button"
                    value="Login"
                    onClick={loginSuccess}/>
                </div>
            </div>
        
    
    )
}

export default LoginPage;