import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import App from './App';
import Redirect from './components/Redirect/Redirect';
import Home from './routes/Home/Home';
import About from './routes/About/About';
import NoPageFound from './routes/NoPageFound/NoPageFound';
import Test from "./routes/Test/Test";
import './scss/main.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />} />
        <Route path="/" element={<App />}>
          <Route path="/" element={<Redirect />} />
          <Route path="home" element={<Home />}>
            <Route index element={<Navigate to="hello" />} />
            <Route path="hello" element={<p>Hello from the index route navigating to the hello route</p>} />
            <Route path="goodbye" element={<p>goodbye</p>} />
          </Route>
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPageFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
