import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import Users from "./pages/Users/Users";
import EditUser from "./pages/EditUser/EditUser";
import Navigation from "./components/Navigation/Navigation";

function App() {
  return (
    <>
      <Navigation />

      <Routes>
        <Route path="/" element={<EditUser />} />
        <Route path="/users" element={<Users />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
