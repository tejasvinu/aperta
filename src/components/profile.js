import React from "react";
//import material ui
import { Container } from "@mui/material";
//import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Icon from '@mui/material/Icon';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

function Profile() {
  return (
    <Container className="profile">
      <h2>APERTA</h2>
      <p>
        why???...<br></br>
        because ther aren't any social platforms that offer the freedom to ppl<br></br>
        when???...<br></br>
        who???...<br></br>
      </p>
      <a href="#page2"><FontAwesomeIcon className="down-arrow" size="4x" icon={faChevronDown} /></a>
    </Container>
  );
}

export default Profile;
