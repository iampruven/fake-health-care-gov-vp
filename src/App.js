import {
  AppBar,
  Box,
  Button,
  Container,
  Link,
  TextField,
  Toolbar,
  Typography,
} from "@material-ui/core";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useState } from "react";
import "./App.css";

function App() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [fruit, setFruit] = useState("");
  const [editMode, setEditMode] = useState(false);

  function createData(name, description, fruit) {
    return { name, description, fruit };
  }

  const rows = [
    createData("Alexander Hamilton", "Household Contact", "Apple"),
    createData("Philip  Hamilton", "Household Contact", "Apple"),
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            The Marketplace
          </Typography>
          <Link variant="h5" color="inherit" href="#">
            Logout
          </Link>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box pt={4}>
          <Typography variant="h3">Your Household</Typography>
          <Typography variant="h5">
            Welcome to the Marketplace! Review your household below.
          </Typography>
        </Box>
        <Box pt={4}>
          <TableContainer component={Paper} m={2}>
            <Table aria-label="household member details">
              <TableHead>
                <TableRow>
                  <TableCell>Full Name</TableCell>
                  <TableCell>Description</TableCell>
                  <TableCell>Fruit</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row, id) => {
                  return (
                    <TableRow key={id}>
                      <TableCell component="th">{row.name}</TableCell>
                      <TableCell>{row.description}</TableCell>
                      <TableCell>{row.fruit}</TableCell>
                    </TableRow>
                  );
                })}
                {editMode && (
                  <TableRow>
                    <TableCell component="th">
                      <TextField
                        id="outlined-basic"
                        label="Full Name"
                        variant="outlined"
                        onChange={(ev) => setName(ev.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="outlined-basic"
                        label="Description"
                        variant="outlined"
                        onChange={(ev) => setDescription(ev.target.value)}
                      />
                    </TableCell>
                    <TableCell>
                      <TextField
                        id="outlined-basic"
                        label="Fruit"
                        variant="outlined"
                        onChange={(ev) => setFruit(ev.target.value)}
                      />
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>

        {editMode ? (
          <Box pt={4}>
            <Button
              style={{ marginRight: "10px" }}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
            <Button variant="contained" color="primary">
              Cancel
            </Button>
          </Box>
        ) : (
          <Box pt={4}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => setEditMode(true)}
            >
              Add New Member
            </Button>
          </Box>
        )}

        <Box pt={2} pb={2} style={{ bottom: 0, position: "absolute" }}>
          <footer>
            <Typography variant="h5">
              The Marketplace is a work in progress.
            </Typography>
          </footer>
        </Box>
      </Container>
    </>
  );
}

export default App;
