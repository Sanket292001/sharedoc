import React from "react";
import UploadFileIcon from '@mui/icons-material/UploadFile';
import "../universal-components.css";

function UploadDocTile({ title }) {
  const uploadDocument = () => {
    //logic for uploading that document, using its title value
  };

  return (
    <div className="doc-tile">
        <p>{title}</p>
        
      <div className="tile-actions-container">
        <UploadFileIcon sx={{ color: "orange" }} className="actions" onClick={uploadDocument} />
      </div>
    </div>
  );
}

export default UploadDocTile;
