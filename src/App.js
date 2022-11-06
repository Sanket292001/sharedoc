import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RequiredDocsScreen from "./screens/RequiredDocsScreen/RequiredDocsScreen";
import DocsScreen from "./screens/DocsScreen/DocsScreen";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import SignUpScreen from "./screens/SignUpScreen/SignUpScreen";
import ShowQRScreenWithBtn from "./screens/ShowQRScreenWithBtn/ShowQRScreen";
import IndHomeScreen from "./screens/IndividualHomeScreen/IndHomeScreen";
import ScanScreen from "./screens/ScanScreen/ScanScreen";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        
          <Route index element={<LoginScreen />}></Route>
          <Route path="login"  element={<LoginScreen />}></Route>
          <Route path="sign-up" element={<SignUpScreen />}></Route>
          <Route path="docs" element={<DocsScreen />}></Route>
          <Route path="required-docs" element={<RequiredDocsScreen />}></Route>
          <Route path="show-qr-wbtn" element={<ShowQRScreenWithBtn />}></Route>
          <Route path="ind-home" element={<IndHomeScreen />}></Route>
          <Route path="scan" element={<ScanScreen />}></Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;



