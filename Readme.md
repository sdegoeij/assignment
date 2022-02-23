# DevSecOps Assessment

This repository contains the code for the DevSecOps Technical Assessment.

Made with [Parcel](http://parceljs.org/), [Tailwind](https://tailwindcss.com) and [json-server](https://github.com/typicode/json-server).

## Assignment

### Assignment 3 – A React SPWA with 2 routes

The style and specific content of the website are up to you, but it should be a statically served SPWA
with 2 routes (or pages):

* 1 route calls an API and renders a series information cards based on what is returned
  * You may stub the API as just an async function that returns an array of objects, but it
would be good to demonstrate `fetch` if you can call an actual API
  * The information should be easy to read on a variety of screen sizes.
* The second route contains a form on which the user can update their personal information
  * The submission of the form should be handled without a page refresh.

The web application should also display the current user’s name in the top right of the screen.

## Setup

### NodeJS

Be sure you have a recent installation of [nodejs](http://nodejs.org/).

### Dependencies

Run `npm install` or `yarn install` to install dependencies.

## Getting started

Run `yarn start` to start the Parcel development server. The PWA will be available on http://localhost:1234/.

Run `yarn api` to start the API server for the app.
