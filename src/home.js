import React, { useState, useEffect } from "react";
import { Container, Paper, Box, Typography, TableRow, TableContainer, Table, TableCell, TableBody, TableHead } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
    root: {

        backgroundColor: theme.palette.black,
        paddingTop: theme.spacing(3),
        maxWidth: "700px"
    },

}));

function Home() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);

    const loadUsers = async () => {
        const res = await axios.get("https://bsvnonrpa-python.herokuapp.com/api/tools");
        setUsers(res.data);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <Container className={classes.root}>
            <TableContainer component={Paper}>
                <TableHead className={classes.head}>
                    <TableRow>
                        <TableCell>Tools</TableCell>
                        <TableCell>Process</TableCell>
                        <TableCell>MainFeatures</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        users.map(user => (<TableRow>
                            <TableCell>{user.ToolName}</TableCell>
                            <TableCell>{user.Process}</TableCell>
                            <TableCell>{user.Features}</TableCell>
                        </TableRow>))
                    }

                </TableBody>
            </TableContainer>
        </Container>
    );
}

export default Home;
