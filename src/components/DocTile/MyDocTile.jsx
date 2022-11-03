import React from "react";
import '../universal-components.css';

/* Note editDocument is a method. It is expected to be defined within the parent of MyDocTile. That defination must have a parameter
    named - 'route', all the function will do is when clicked, it will navigate to that route.
*/

function MyDocTile(props) {

    return (
        
        <a href="www.google.com" className="doc-tile" onClick={props.editDocument}> 
            <p>{props.docName}</p>
        </a>
        
    );    
}

export default MyDocTile;