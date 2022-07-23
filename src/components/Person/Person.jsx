import { useState, useEffect, useCallback } from "react";

import { peopleDataAtom, peopleNumberAtom } from "../../store";
import { useAtom } from "jotai";

import useFetch from "../../api_calls";

import MoveToSideAndFade from "../../transitions/MoveToSideAndFade/MoveToSideAndFade";
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
