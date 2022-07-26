import { useId, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import style from "./Input.module.scss";

Input.propTypes = {
  label: PropTypes.string
};

export default function Input({ label, type }) {
  const [value, setValue] = useState('');
  const inputId = useId();

  const handleChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  return (
    <div className={style.form_control}>
      <label className={`${style.floating_label} ${value ? style.filled : ''}`} htmlFor={inputId}>{label}</label>
      <input
        data-testid="floating-input"
        className={style.input_field}
        id={inputId}
        type={type}
        value={value}
        onChange={e => handleChange(e)}
      />
    </div>
  );
};
