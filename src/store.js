import { atom } from "jotai";

export const peopleDataAtom = atom([]);

export const peopleNumberAtom = atom(get => {
  const peopleData = get(peopleDataAtom);
  return peopleData ? peopleData.length : 0;
});
