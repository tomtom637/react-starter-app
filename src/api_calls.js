import { useEffect } from "react";
import { peopleDataAtom } from "./store";
import { useAtom } from "jotai";

const URLS = {
  test: "http://localhost:8080",
};
const baseURL = URLS.test;

class FetchData {
  // GET THE PEOPLE DATA
  getPeople() {
    const [people, setPeople] = useAtom(peopleDataAtom);
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(baseURL + "/people");
          const data = await response.json();
          setPeople(data);
        } catch (error) {
          console.error(error);
        }
      };
      fetchData();
    }, []);
    return [people, setPeople];
  }

  // ADD A NEW PERSON
  addPerson(person, setPeople) {
    const fetchData = async () => {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(person),
      };
      try {
        await fetch(baseURL + "/people", options);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData().then(() => setPeople(curr => [...curr, person]));
  }

  // DELETE A PERSON
  deletePerson(id, setPeople) {
    const fetchData = async () => {
      const options = {
        method: "DELETE",
      };
      try {
        await fetch(baseURL + "/people/" + id, options);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData().then(() =>
      setPeople(curr => curr.filter(person => person.id !== id))
    );
  }
}

const useFetch = new FetchData();
export default useFetch;
