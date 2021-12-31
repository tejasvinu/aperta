import React from "react";
import Button from '@mui/material/Button';
import { Container, TextField, Radio, FormControlLabel } from "@mui/material";

function Sign() {
  return (
    <Container className="sign">
        <form>
            <TextField
              required
              id="username-required"
              label="username" 
              margin="normal"
            />
            <TextField
              required
              id="password-required"
              label="password"
              margin="normal"
            />
            <FormControlLabel
              value="end"
              control={<Radio />}
              label="Remember me"
            />
          <Button id="submit-button" size="medium" type="submit" variant="contained">submit</Button>
        </form>
    </Container>
  );
}

export default Sign;
