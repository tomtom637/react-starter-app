import { rest } from 'msw';

// Mock Data
export const peopleData = [
  {
    "id": "1",
    "name": "alice",
    "eyes": "brown"
  },
  {
    "id": "2",
    "name": "alexis",
    "eyes": "brown"
  },
  {
    "id": "3",
    "name": "pia",
    "eyes": "black"
  }
];

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  rest.get('http://localhost:8080/people', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(peopleData));
  }),
  rest.post("http://localhost:8080/people", (req, res, ctx) => {
    const newPerson = req.json();
    peopleData.push(newPerson);
    return res(ctx.status(201), ctx.json(newPerson));
  }),
  rest.delete("http://localhost:8080/people/:id", (req, res, ctx) => {
    const id = req.params.id;
    const person = peopleData.find(p => p.id === id);
    peopleData.splice(peopleData.indexOf(person), 1);
    return res(ctx.status(204), ctx.json(peopleData));
  })
  // ...
];