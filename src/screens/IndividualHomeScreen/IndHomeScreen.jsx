import * as React from "react";
import AppBar from "../../components/AppBar/AppBar";
import AuthButton from "../../components/Buttons/AuthButton";

function IndHomeScreen() {

    const navigateToScan = () => {
        window.location.href = "/scan";
    };


    const navigateToShow = () => {
        window.location.href = "/show-qr-wbtn";
    };

    return (
        <div>
            <AppBar title="Home"/>
            <div className="home-options">
                <AuthButton title="Scan QR Code" onClick={navigateToScan}/>
                <AuthButton title="Show QR Code" onClick={navigateToShow}/>
            </div>
        </div>
    );
}

export default IndHomeScreen;