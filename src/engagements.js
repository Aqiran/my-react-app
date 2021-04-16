import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Container } from "react-bootstrap";
import "./components/engagements.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Engagecomp from "./components/engageComp";

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



    const RenderCard = (engagement, index) => {
        return (
            <Link
                to={"/Engagements/" + engagement.ToolName}
                key={index}
                style={{ textDecoration: "none" }}
            >
                <span key={index}>
                    <Card style={{ width: "18rem" }} key={index} className="box">
                        <Card.Img
                            variant="top"
                            src={
                                "https://builtin.com/sites/default/files/styles/medium/public/2018-08/artificial-intelligence-companies.jpg"
                            }
                        />
                        <Card.Body>
                            <Card.Title>{engagement.ToolName}</Card.Title>
                            <Card.Subtitle>{engagement.VendorName}</Card.Subtitle>
                        </Card.Body>
                    </Card>
                </span>
            </Link>
        );
    };

    return (
        <Router>
            <Container>
                <Switch>
                    <Route exact path="/Engagements">
                        <div className="grid">{engagements.map(RenderCard)}</div>;
            </Route>

                    <Route path="/Engagements/:ToolName">
                        <Engagecomp />
                    </Route>
                </Switch>
            </Container>
        </Router>

    );
}

export default Engagements;