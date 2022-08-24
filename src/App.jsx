import { Routes, Route } from "react-router-dom";
import TopHeader from "./components/database/TopHeader";
import MenuBar from "./components/database/MenuBar";
import CreateWorkspace from "./pages/auth/CreateWorkspace";
import ForgotPassword from "./pages/auth/ForgotPassword";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import CreateEmail from "./pages/bulkEmailSender/CreateEmail";
import EmailDetails from "./pages/bulkEmailSender/EmailDetails";
import EmailSender from "./pages/bulkEmailSender/EmailSender";
import SentEmail from "./pages/bulkEmailSender/SentEmail";
import CertificateGenerator from "./pages/certificateGenerator/CertificateGenerator";
import CustomizeTemplate from "./pages/certificateGenerator/CustomizeTemplate";
import DesignCertificate from "./pages/certificateGenerator/DesignCertificate";
import ContactDetails from "./pages/databse/ContactDetails";
import Database from "./pages/databse/Database";
import FourOFour from "./pages/fallback/FourOFour";

import Home from "./pages/home/Home";
import UserSettings from "./pages/settings/userSettings/UserSettings";
import WorkspaceSettings from "./pages/settings/workspaceSettings/WorkspaceSettings";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />{" "}
        <Route path="/login" element={<Login />} />{" "}
        <Route path="/forgotpassword" element={<ForgotPassword />} />{" "}


        <Route path="/createworkspace" element={<CreateWorkspace />} />
        <Route path="/database" element={<Database />} />{" "}
        <Route path="/database/:contactId" element={<ContactDetails />} />
        <Route path="/emails" element={<EmailSender />} />{" "}
        <Route path="/emails/:emailId/edit" element={<CreateEmail />} />{" "}
        <Route path="/emails/:emailId/send" element={<SentEmail />} />{" "}
        <Route path="/emails/:emailId/view" element={<EmailDetails />} />
        <Route path="/certificate" element={<CertificateGenerator />} />{" "}
        <Route path="/certificate/templates" element={<DesignCertificate />} />{" "}
        <Route
          path="/certificate/:certificateId/customize"
          element={<CustomizeTemplate />}
        />
        <Route path="/settings" element={<WorkspaceSettings />} />{" "}
        <Route path="/userAccount" element={<UserSettings />} />
        <Route path="/*" element={<FourOFour />} />{" "}
      </Routes>{" "}


    </>
  );
}

export default App;
