import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Dashboard from "./pages/Dashboard";
import Quiz from "./pages/Quiz";
import Report from "./components/Questions/Report";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />

        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route element={<PrivateRoute />}>
          <Route path="/quiz" element={<Quiz />} />
        </Route>

        <Route element={<PrivateRoute />}>
          <Route
            path="/report"
            element={
              <Report
                questionDetails={[
                  {
                    type: "mtf",
                    questionStatement: "Match the Following",
                    column1: ["1+2", "2+3", "3+1", "4+6"],
                    optionsSelected: ["2", "3", "4", "10"],
                    correctOptions: ["3", "5", "4", "10"],
                  },
                  {
                    type: "ln",
                    questionStatement: "Select the Largest Number",
                    optionsGiven: ["1", "2", "3", "4"],
                    optionSelected: "4",
                    correctOptions: "4",
                  },
                  {
                    type: "ftb",
                    questionStatement: "Fill in the blanks",
                    column1: ["", "", "", ""],
                    optionsWritten: ["", "", "", ""],
                    correctOptions: ["", "", "", ""],
                  },
                ]}
              />
            }
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
