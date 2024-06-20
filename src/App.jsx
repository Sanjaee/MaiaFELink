import { BrowserRouter, Routes, Route } from "react-router-dom";

import FormLogin from "./Pages/Login";
import FormRegister from "./Pages/Register";
import Dashboard from "./Pages/Dasboard";
import VerifyEmail from "./Pages/VerifyEmail";
import VerifyPage from "./Pages/VerifyPage";
import ResetPasswordComponent from "./Pages/ResetPasswordComponent";
import ForgotPasswordComponent from "./Pages/ForgotPasswordComponent";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormLogin />} />
        <Route path="/register" element={<FormRegister />} />
        <Route path="/validasi" element={<VerifyPage />} />
        <Route path="/verify/:token" element={<VerifyEmail />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {/* <Route path="/reset" element={<ResetPasswordComponent />} />
        <Route path="/forgot" element={<ForgotPasswordComponent />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
