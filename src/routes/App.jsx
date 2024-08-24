import { Outlet } from "react-router-dom";
import Footer from "../Components/Footer.jsx";
import Header from "../Components/Header";
import "../index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchItems from "../Components/FetchItems.jsx";
import Loading_Spinner from "../Components/Loading_Spinner.jsx";
import { useSelector } from "react-redux";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <Header></Header>
      <FetchItems></FetchItems>
      <Outlet></Outlet>
      <Footer></Footer>
    </>
  );
}

export default App;
