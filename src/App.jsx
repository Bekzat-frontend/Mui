import * as React from "react";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

function App() {
  return (
    <>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="contained" color="error">
        Error
      </Button>
      <Button variant="contained" size="small">
        Small
      </Button>
      <Button variant="contained" size="medium">
        Medium
      </Button>
      <Button variant="contained" size="large">
        Large
      </Button>
      <Button variant="contained" color="primary">
        Contained
      </Button>
      <Button variant="outlined" color="secondary">
        Outlined
      </Button>
      <Button variant="text">Text</Button>
      <TextField variant="outlined" label="Outlined Input" />
      <TextField variant="filled" label="Filled Input" />
      <TextField variant="standard" label="Standard Input" />
      <TextField
        variant="outlined"
        label="Your Name"
        placeholder="Enter your name"
      />
      <TextField
        variant="outlined"
        placeholder="телефон "
        label="написать текст"
      />
      <Button
        variant="contained"
        color="primary"
        style={{
          backgroundColor: "green",
          padding: "10px 20px",
          width: "200px",
          height: "40px",
        }}
      >
        Custom Styled Button
      </Button>
    </>
  );
}
export default App;
