import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home";
import Login from "./pages/Login";
import Signup from "./components/Signup";
import ProtectedRoute from "./components/ProtectedRoute";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import Landing from "./pages/Landing";
import "./sass/index.scss";
import Manuscript from "./pages/Manuscript";
import Guest from "./pages/Guest";
import ForgotPassword from "./pages/Forgot_Pass";
import { AnimatePresence } from "framer-motion";



function App() {
  const location = useLocation();
  return (
    <AnimatePresence exitBeforeEnter>
    <UserAuthContextProvider>
      <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Landing />} />
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/guest" element={<Guest />} />
          <Route path="/resetpassword" element={<ForgotPassword />} />
          <Route
            path="/manuscript"
            element={
              <ProtectedRoute>
                <Manuscript />
              </ProtectedRoute>
            }
          />
        </Routes>
     
    </UserAuthContextProvider>
    </AnimatePresence>
  );
}

export default App;
