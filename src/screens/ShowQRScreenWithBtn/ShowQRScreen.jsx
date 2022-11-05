import * as React from "react";
import "./ShowQRScreen.css";

function ShowQRScreen(){
    const [source, setSource] = React.useState("");

    const showQR = () => {
        console.log("Show QR");
        //get our qr code from the api.
        const qrURL = "https://mui.com/material-ui/react-progress/#circular";
        setSource(`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrURL}`);
    }

    return (
      <div className="show-qr-body">
        <h1>Your QR Code</h1>
        <h4>Click Show QR to view your QR code.</h4>
        <div className="qr-code">
            <img src={source} alt="qr-code"/>
        </div>
        <div className='qr-btn-container'>
            <p onClick={showQR} className='show-qr-btn'>Show QR</p>
        </div>
      </div>
    );
}

export default ShowQRScreen;