import * as React from "react";
import AppBar from "../../components/AppBar/AppBar";
import MyDocTile from "../../components/DocTile/MyDocTile";
import "./DocsScreen.css";

const appBarHeading = "My Documents";

const editDoc = () => {
  console.log("To Be Implemented");
};

function DocsScreen() {

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
    </div>
  );
}

export default DocsScreen;
