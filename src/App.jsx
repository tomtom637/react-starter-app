import { Outlet } from "react-router-dom";
import Footer from "./components/MainFooter/MainFooter";
import MainNav from "./components/MainNav/MainNav";

export default function App() {

  return (
    <div className="App">
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
        className="container"
      >
        <h1>Welcome to our App</h1>
        <MainNav />
      </div>
      <br />
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
}
