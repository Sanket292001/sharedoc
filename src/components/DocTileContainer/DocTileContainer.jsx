import React from "react";
import CheckedDocTile from "../DocTile/CheckedDocTile";
import UploadDocTile from "../DocTile/UploadDocTile";
import "../universal-components.css";

function DocTileContainer(props) {

  return (
    <div className="tile-container-body">
        <h2>{props.title}</h2>
        <p>{props.subtitle}</p>

        
    
      {props.isMatching === 'true'
        ? 
            props.docsList.map((value, index) => {
                return <CheckedDocTile title={value} key={index} />
            })
        :
            props.docsList.map((value, index) => {
                return <UploadDocTile title={value} key={index} />
            })
       }

  
    </div>

    
  );
}

export default DocTileContainer;
