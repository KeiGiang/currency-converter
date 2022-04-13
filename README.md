# Currency Exchange Calculator

A simple currency exchange calculator built to demonstrate using redux with react hooks.

Based on the tutorial found at https://egghead.io/lessons/react-introducing-redux-with-react-hooks

## Deviations from tutorial

* Changed how reducer actions, selectors, and types are declared and called

* All components receive state data directly from store instead of via parent component

* Modified testing utils & testing strategy to work in new setup

* Added support for absolute paths when importing

### Setup

`yarn` or `npm install`

### Run It

`yarn start` or `npm start`

---

### Updates

- **May 15, 2021** The API we rely on for this exercise [exchangeratesapi.io](https://exchangeratesapi.io/) stopped being free. I've added a mock fetch library which allows you to keep on using the existing API as-is, but requires you to add `import { fetch } from "./lib/fetch";` to the top of api.js. This update also includes error handling that will log the message from the API and avoid showing the react crash screen.

---

This app was built using [Create React App](https://create-react-app.dev/).
