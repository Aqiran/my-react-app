import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import "./engagements.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Engagements = () => {

    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        try {
            const res = await axios.get(
                "https://bsvnonrpa-python.herokuapp.com/api/tools"
            );
            setUsers(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadUsers();
    }, []);


    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    const renderCard = (user, index) => {
        return (
            <Card style={{ width: "18rem" }} key={index} className="box" onClick={handleClick}>
                <Card.Img variant="top" src={"https://builtin.com/sites/default/files/styles/medium/public/2018-08/artificial-intelligence-companies.jpg"} />
                <Card.Body>
                    <Card.Title>{user.ToolName}</Card.Title>
                    <Card.Subtitle>{user.VendorName}</Card.Subtitle>
                </Card.Body>
            </Card>
        );
    };

    return (
        <Container>
            <div className="grid">{users.map(renderCard)}</div>;
        </Container>
    );
}

export default Engagements;