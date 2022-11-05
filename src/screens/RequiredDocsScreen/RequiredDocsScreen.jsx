import * as React from "react";
import AppBar from "../../components/AppBar/AppBar";
import DocTileContainer from "../../components/DocTileContainer/DocTileContainer";
import "./RequiredDocsScreen.css";

function RequiredDocsScreen() {
  const matchingDocsList = ["Aadhar Card", "Hack CBS Card", "PAN Card"];
  const missingDocsList = [
    "Driving License",
    "College ID",
    "Driving License",
    "College ID",
  ];

  const submitDocs = () => {
    console.log("Handle Submitting the documents now");
  };

  return (
    <div>
      <AppBar title="Upload Required Documents" />
      <DocTileContainer
        title="Matching Documents"
        subtitle="You have these required documents"
        isMatching="true"
        docsList={matchingDocsList}
      />
      <DocTileContainer
        title="Missing Documents"
        subtitle="You need to upload these required documents"
        isMatching="false"
        docsList={missingDocsList}
      />
      
        <p onClick={submitDocs} className="auth-btn">
          Submit Documents
        </p>
      
       <div className="spacer">
            
       </div>
    </div>
  );
}

export default RequiredDocsScreen;
