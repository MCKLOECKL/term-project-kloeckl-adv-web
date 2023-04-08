import React, {useState} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./App.css";

export default function Login(){
    const[email, setEmail]=useState("");
    const[password,setPassword]=useState("");
    
    function validateForm(){
        return email.length>0&&password.length>0;
    }

    function handleSubmit(event){
        event.preventDefault();
    }

    return(
        <div className="Login">
            <Form onsubmit={handleSubmit}>
                <Form.group size="lg"controlld="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control autoFocus type="email" value={email}
                    onChange={(e)=>setEmail(e.target.value)}/>
                </Form.group>

                <Form.Group size="lg" controlld="password">
                    <Form.label>Password</Form.label>
                    <Form.Control type="password" value={password}
                    onChange={(e)=>setPassword(e.target.value)}/>
                </Form.Group>

                <Button block size="lg" type="submit" disabled={!validateForm()}>
                    Login
                </Button>
            </Form>
        </div>
    );
}