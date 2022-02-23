import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Labs from "./pages/Labs";
import PersonalInformation from "./pages/PersonalInformation";

const app = document.getElementById("app");

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Labs />} />
        <Route path="/personal-information" element={<PersonalInformation />} />
      </Routes>
    </BrowserRouter>
  </RecoilRoot>,
  app
);
