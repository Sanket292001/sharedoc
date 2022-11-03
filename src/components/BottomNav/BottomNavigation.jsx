import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import QrCodeIcon from "@mui/icons-material/QrCode";
import HomeIcon from "@mui/icons-material/Home";
import CropFreeIcon from "@mui/icons-material/CropFree";
import Paper from "@mui/material/Paper";

function BottomNavBar(){
    const [value, setValue] = React.useState(0);

    return (
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
    );
}

export default BottomNavBar;