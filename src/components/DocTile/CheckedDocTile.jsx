import React from "react";
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import "../universal-components.css";

function CheckedDocTile({title}) {
  return (

        <div className="doc-tile">
                <p>{title}</p>
            
            <div className="tile-actions-container">
                <CheckBoxIcon sx={{color:'green'}}/>
            </div>
        </div>
        
  );
}

export default CheckedDocTile;
