import PropTypes from 'prop-types';

Person.propTypes = {
  personId: PropTypes.string.isRequired,
  people: PropTypes.array.isRequired,
  setPeople: PropTypes.func.isRequired
};

import useFetch from "../../api_calls";
import style from "./Person.module.scss";

export default function Person({ personId, people, setPeople }) {
  const person = people.find(p => p.id === personId);

  return (
    <>
      <p data-testid="person-item" className={style.attribute}>
        {person.name} has {person.eyes} eyes
      </p>
      <button
        className={style.delete}
        type="button"
        onClick={() => useFetch.deletePerson(personId, setPeople)}
      >
        Delete
      </button>
    </>
  );
}
