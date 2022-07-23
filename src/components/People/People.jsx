import { useState, useEffect } from "react";

import { peopleNumberAtom } from "../../store";
import { useAtom } from "jotai";

import useFetch from "../../api_calls";

import style from "./People.module.scss";
import Loading from "../Loading/Loading";
import Person from "../Person/Person";

import { TransitionGroup } from "react-transition-group";
import MoveToSideAndFade from "../../transitions/MoveToSideAndFade/MoveToSideAndFade";

export default function People() {
  const [people, setPeople] = useFetch.getPeople();
  const [peopleNumber] = useAtom(peopleNumberAtom);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (people.length > 0) {
      // setTimeout(() => {
      setLoading(false);
      // }, 500);
    }
  }, [people]);

  return (
    <div className={style.people}>
      <h2 className={style.people__count}>{peopleNumber} people</h2>
      {loading ? (
        <Loading />
      ) : (
        people && (
          <TransitionGroup>
            {[...people].reverse().map(person => (
              <MoveToSideAndFade key={person.id}>
                <div className={style.people__item}>
                  <Person
                    personId={person.id}
                    people={people}
                    setPeople={setPeople}
                  />
                </div>
              </MoveToSideAndFade>
            ))}
          </TransitionGroup>
        )
      )}
    </div>
  );
}
