import {
  AppBar,
  Box,
  Button,
  Container,
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
import "./App.css";

function App() {
  function createData(name, description, fruit) {
    return { name, description, fruit };
  }

  const rows = [
    createData("Alexander Hamilton", "Household Contact", "Apple"),
    ("Philip  Hamilton", "Household Contact", "Apple"),
  ];

  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" style={{ flexGrow: 1 }}>
            The Marketplace
          </Typography>
          <Button color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
        <Box pt={4}>
          <Typography variant="h3">Your Household</Typography>
          <Typography variant="h5">
            Welcome to the Marketplace! Review your household below.
          </Typography>
        </Box>

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
              {rows.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.fruit}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}

export default App;
