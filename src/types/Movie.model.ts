//MOVIE LIST
export interface GetMovieListParams {}

export interface GetMovieListResponse {
  id: number;
  title: string;
  created: string;
  director: string;
  edited: string;
  episode_id: number;
  opening_crawl: string;
  image: any;
  desc: string;
  release_date: string;
  producer: string;
  price: string;
}

export interface GetMovieListResult {
  results: GetMovieListResponse[];
}

//DETAIL
export interface GetDetailParams {
  id: number;
  type: string;
}

export interface GetDetailCharacterResponse {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: [];
  species: [];
  vehicles: [];
  starships: [];
  created: string;
  edited: string;
  url: string;
}

export interface GetDetailPlanetResponse {
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  residents: [],
  films: [];
  created: string;
  edited: string;
  url: string;
}

export interface GetDetailStarshipResponse {
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string,
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: [],
	films: [],
	created: string,
	edited: string,
	url: string
}