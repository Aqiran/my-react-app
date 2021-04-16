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

export default function ToolTable() {
  const classes = useStyles();
  const [tools, setTools] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const loadTools = async () => {
    const res = await axios.get(
      "https://bsvnonrpa-python.herokuapp.com/api/tools"
    );
    setTools(res.data);
  };

  const onChangePage = (event, nextPage) => {
    setPage(nextPage);
  }; //to go to new page

  const onChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
  };

  useEffect(() => {
    loadTools();
  }, []);

  return (
    <Container>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Tool</StyledTableCell>
              <StyledTableCell>Process</StyledTableCell>
              <StyledTableCell>MainFeatures</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tools
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((tool) => (
                <StyledTableRow>
                  <StyledTableCell>{tool.ToolName}</StyledTableCell>
                  <StyledTableCell>{tool.Process}</StyledTableCell>
                  <StyledTableCell>{tool.Features}</StyledTableCell>
                </StyledTableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 20, 30]}
          count={tools.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onChangePage={onChangePage}
          onChangeRowsPerPage={onChangeRowsPerPage}
        />
      </TableContainer>
    </Container>
  );
}
