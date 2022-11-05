import * as React from "react";
import "./ShowQRScreen.css";
import CircularProgress from '@mui/material/CircularProgress';

function ShowQRScreen(){
    const [source, setSource] = React.useState("");
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
      showQR().then(() => {
        setLoading(false);
      });
    }, []);

    async function showQR() {
        console.log("Show QR");
        //get our qr code from the api.
        const qrURL = "https://mui.com/material-ui/react-progress/#circular";
        const imgSrc = await `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrURL}`;
        setSource(imgSrc);
    }

    return (
      <div className="show-qr-body">
        <h1>Your QR Code</h1>
        <h4>Scan your QR code to share your docs.</h4>
        <div className="qr-code">
            {
              loading ?  <CircularProgress /> : <img src={source} alt="qr-code"/>
            }
        </div>
      </div>
    );
}

export default ShowQRScreen;