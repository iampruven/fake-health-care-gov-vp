import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import "./App.css";

function App() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h5" style={{flexGrow:1}}>The Marketplace</Typography>
        <Button color="inherit">Logout</Button>
      </Toolbar>
    </AppBar>
  );
}

export default App;
