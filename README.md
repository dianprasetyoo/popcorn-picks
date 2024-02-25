# Popcorn Pick: Star Wars Movie Rental

![Starwars-logo](https://github.com/dianprasetyoo/popcorn-picks/assets/55281092/a54228f6-7920-4d4d-8cd2-611da811b0c8)

Popcorn Pick is a web application designed for renting Star Wars movies. Built using [React JS](https://github.com/facebook/create-react-app), [TypeScript](https://www.typescriptlang.org/), and [Tailwind CSS](https://tailwindcss.com/), Popcorn Pick utilizes data from the [swapi.dev](https://swapi.dev/) API to offer a curated selection of Star Wars films available for rental.

## Features
- **Browse Catalog:** Explore a diverse catalog of Star Wars movies.
- **Add to Cart:** Select movies to add them to your cart for rental.
- **Movie Detail:** View comprehensive details about each movie.
- **Character Detail:** Discover in-depth information about Star Wars characters.
- **Planet Detail:** Explore details about planets featured in the Star Wars universe.
- **Starship Detail:** Learn more about the starships used in the Star Wars saga.

## Demo
You can see a demo of Popcorn Pick on [Google Drive](https://drive.google.com/drive/folders/1oWKsnN9qsLea3-1wmNQdiHtx_rC2HPe7?usp=sharing).

## Project Structure

```plaintext
/src
  /assets
  /components
  /configs
  /middlewares
  /pages
  /routes
  /stores
  /types
  /utils
```

## Installation
To run Popcorn Pick locally, follow these steps:
1. Clone this repository to your computer.
   ```bash
   git clone git@github.com:dianprasetyoo/popcorn-picks.git

2. Navigate to the project directory.
   ```bash
   cd popcorn-picks
   
3. Create a .env file based on the .env.example template.
   ```bash
   cp .env.example .env

4. Install dependencies.
   ```bash
   npm install
5. Run the application.
   ```bash
   npm start

Ensure you have Node.js (version 20.2.0) and npm installed on your system.

## Running Unit Tests
To run unit tests for Popcorn Pick using Jest, follow these steps:
1. Ensure you have Node.js (version 20.2.0) and npm installed on your system.
2. Navigate to the project directory in your terminal.
3. Install the required dependencies, including Jest, if you haven't already done so:
   ```bash
   npm install
4. Run the following command to execute the unit tests:
   ```bash
   npm test
This command will run all the unit tests in the project and display the results in your terminal.

## Usage
1. Open Popcorn Pick in your web browser.
2. Browse the catalog of Star Wars movies available for rental.
3. Click on a movie to view its details.
4. Add movies to your cart by selecting them.
5. Explore character, planet, and starship details for a deeper understanding of the Star Wars universe.
