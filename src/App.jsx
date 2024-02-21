import { Provider } from "react-redux";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Page from "./Page";
import PrivateRoute from "./PrivateRoute";
import Login from "./components/auth/Login";
import Registration from "./components/auth/register";
import store from "./redux/store";
import Forget from "./components/auth/forget";

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Router>
          <Routes>
            <Route element={<PrivateRoute />}>
              <Route path="/" element={<Page />} exact />
            </Route>
            <Route exact path="/reset" element={ <Forget /> } />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/signup" element={<Registration />} />
          </Routes>
        </Router>
      </Provider>
      <ToastContainer />
    </div>
  );
};

export default App;
