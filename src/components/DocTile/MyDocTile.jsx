import React from "react";
import DeleteIcon from '@mui/icons-material/Delete';
import UpdateIcon from '@mui/icons-material/AddCircle';
import '../universal-components.css';

/* Note editDocument is a method. It is expected to be defined within the parent of MyDocTile. That defination must have a parameter
    named - 'route', all the function will do is when clicked, it will navigate to that route.
*/

function MyDocTile(props) {

    return (
        
        <div className="doc-tile">
            <a href="www.google.com"  onClick={props.editDocument}> 
                <p>{props.docName}</p>
            </a>
            <div className="tile-actions-container">
                <UpdateIcon className="actions"/>
                <DeleteIcon className="actions"/>
            </div>
        </div>
        
    );    
}

export default MyDocTile;