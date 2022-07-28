import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import style from "./Redirect.module.scss";

Redirect.propTypes = {};

export default function Redirect(props) {
  return (
    <>
      {true ? <Navigate to="home" /> : <Navigate to="about" />}
    </>
  );
};
