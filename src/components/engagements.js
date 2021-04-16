import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import "./engagements.css";
import 'bootstrap/dist/css/bootstrap.min.css';

const Engagements = () => {

    const [engagements, setEngagements] = useState([]);

    const loadEngagements = async () => {
        try {
            const res = await axios.get(
                "https://bsvnonrpa-python.herokuapp.com/api/tools"
            );
            setEngagements(res.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        loadEngagements();
    }, []);


    function handleClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
    }

    const renderCard = (engagement, index) => {
        return (
            <Card style={{ width: "18rem" }} key={index} className="box" onClick={handleClick}>
                <Card.Img variant="top" src={"https://builtin.com/sites/default/files/styles/medium/public/2018-08/artificial-intelligence-companies.jpg"} />
                <Card.Body>
                    <Card.Title>{engagement.ToolName}</Card.Title>
                    <Card.Subtitle>{engagement.VendorName}</Card.Subtitle>
                </Card.Body>
            </Card>
        );
    };

    return (
        <Container>
            <div className="grid">{engagements.map(renderCard)}</div>;
        </Container>
    );
}

export default Engagements;