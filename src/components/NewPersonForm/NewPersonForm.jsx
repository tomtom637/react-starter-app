import { useState, useCallback, useRef } from "react";
import { peopleDataAtom } from "../../store";
import { useAtom } from "jotai";
import { v4 as uuid } from 'uuid';
import style from "./NewPersonForm.module.scss";
import useClearErrorWithDelay from "./hooks/useClearErrorWithDelay";

import useFetch from "../../api_calls";

export default function NewPersonForm() {
  const [people, setPeople] = useAtom(peopleDataAtom);
  const [displayEmptyInputError, setDisplayEmptyInputError] =
    useClearErrorWithDelay();
  const [nameInputValue, setNameInputValue] = useState("");
  const [eyesInputValue, setEyesInputValue] = useState("");
  const firstInputRef = useRef();

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();
      setDisplayEmptyInputError(false);
      if (nameInputValue.trim() === "" || eyesInputValue.trim() === "") {
        return setDisplayEmptyInputError(true);
      }
      const newPerson = {
        id: uuid(),
        name: nameInputValue,
        eyes: eyesInputValue,
      };
      useFetch.addPerson(newPerson, setPeople);
      setNameInputValue("");
      setEyesInputValue("");
      firstInputRef.current.focus();
    },
    [people, nameInputValue, eyesInputValue]
  );

  return (
    <form className={style["person-form"]} onSubmit={e => handleSubmit(e)}>
      {displayEmptyInputError && (
        <div className={style["person-form__error"]}>
          Please fill in all fields
        </div>
      )}
      <div className={style["person-form__form-control"]}>
        <label htmlFor="add-name">new person's name</label>
        <input
          ref={firstInputRef}
          type="text"
          id="add-name"
          placeholder="Enter a name"
          autoComplete="off"
          value={nameInputValue}
          onChange={e => setNameInputValue(e.target.value)}
        />
      </div>
      <div className={style["person-form__form-control"]}>
        <label htmlFor="add-eye">new person's eye color</label>
        <input
          type="text"
          id="add-eye"
          placeholder="Enter an eye color"
          autoComplete="off"
          value={eyesInputValue}
          onChange={e => setEyesInputValue(e.target.value)}
        />
      </div>
      <button className={style["person-form__button"]} type="submit">
        Add new person
      </button>
    </form>
  );
}
