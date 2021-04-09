import React, { useState, useEffect } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import {
    Container,
    Paper,
    TableRow,
    TableContainer,
    Table,
    TableCell,
    TableBody,
    TableHead,
    TablePagination
} from "@material-ui/core";
import axios from "axios";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.action.selected,
        color: theme.palette.common.black,
        borderBottomColor: theme.palette.common.black
    },
    body: {
        fontSize: 14
    }
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        "&:nth-of-type(odd)": {
            backgroundColor: theme.palette.action.hover
        }
    }
}))(TableRow);

const useStyles = makeStyles({
    table: {
        maxWidth: 500
    }
});

export default function EngageTable() {
    const classes = useStyles();
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(10);

    const loadUsers = async () => {
        const res = await axios.get(
            "https://bsvnonrpa-python.herokuapp.com/api/engagements"
        );
        setUsers(res.data);
    };

    const onChangePage = (event, nextPage) => {
        setPage(nextPage);
    }; //to go to new page

    const onChangeRowsPerPage = (event) => {
        setRowsPerPage(event.target.value);
    };

    useEffect(() => {
        loadUsers();
    }, []);

    return (
        <Container>
            <TableContainer component={Paper}>
                <Table className={classes.table} aria-label="customized table">
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>Engagements</StyledTableCell>
                            <StyledTableCell>Process</StyledTableCell>
                            <StyledTableCell>Regions</StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((user) => (
                                <StyledTableRow>
                                    <StyledTableCell>{user.Engagement_x}</StyledTableCell>
                                    <StyledTableCell>{user.Process}</StyledTableCell>
                                    <StyledTableCell>{user.Region}</StyledTableCell>
                                </StyledTableRow>
                            ))}
                    </TableBody>
                </Table>
                <TablePagination
                    rowsPerPageOptions={[10, 20, 30]}
                    count={users.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={onChangePage}
                    onChangeRowsPerPage={onChangeRowsPerPage}
                />
            </TableContainer>
        </Container>
    );
}