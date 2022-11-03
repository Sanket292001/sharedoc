import * as React from "react";
import AppBar from "../components/AppBar/AppBar";
import MyDocTile from "../components/DocTile/MyDocTile";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import QrCodeIcon from "@mui/icons-material/QrCode";
import HomeIcon from "@mui/icons-material/Home";
import CropFreeIcon from "@mui/icons-material/CropFree";
import Paper from "@mui/material/Paper";

import "./DocsScreen.css";
import MainButton from "../components/Buttons/MainButton";

const appBarHeading = "My Documents";

const editDoc = () => {
  console.log("To Be Implemented");
};

function DocsScreen() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="docs-screen-body">
      <AppBar title={appBarHeading} />
      <h3>Click a document to edit it.</h3>
      <div className="doc-tiles-container">
        <MyDocTile docName="Aadhar Card" editDocument={editDoc} />
        <MyDocTile docName="PAN Card" editDocument={editDoc} />
        <MyDocTile docName="HackCBS Admit Card" editDocument={editDoc} />
        <MyDocTile docName="Dinner Card" editDocument={editDoc} />
        <MyDocTile docName="HackCBS Admit Card" editDocument={editDoc} />
        <MyDocTile docName="Dinner Card" editDocument={editDoc} />
      </div>
      <MainButton title="Upload A New Doc"/>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0, backgroundColor:"#333", opacity:.9125 }}
        elevation={3}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
            //In the future based on the value of this newValue we will navigate to the next page.
            console.log(newValue);
          }}
        >
          <BottomNavigationAction
            sx={{ color: "black" }}
            selected
            label="Home"
            icon={<HomeIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "black" }}
            label="Show QR"
            icon={<QrCodeIcon />}
          />
          <BottomNavigationAction
            sx={{ color: "black" }}
            label="Scan QR"
            icon={<CropFreeIcon />}
          />
        </BottomNavigation>
        
      </Paper>
    </div>
  );
}

export default DocsScreen;
