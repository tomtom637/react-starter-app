import { rest } from 'msw';

// Mock Data
export const peopleData = [
  {
    "id": 1,
    "name": "alice",
    "eyes": "brown"
  },
  {
    "id": 2,
    "name": "alexis",
    "eyes": "brown"
  },
  {
    "id": 3,
    "name": "pia",
    "eyes": "black"
  },
  {
    "id": "48f404a1-3632-4c8b-943a-300aa1b22e53",
    "name": "alan",
    "eyes": "blue"
  }
];

// Define handlers that catch the corresponding requests and returns the mock data.
export const handlers = [
  rest.get('http://localhost:8080/people', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(peopleData));
  }),
  // ...
];