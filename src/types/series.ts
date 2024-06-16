// series types and methods

import { Actor, Company, GuestActors, genries, speak_language } from "./general";


// this inteface is used for fetching (popular |  top_rated  | on_the_air | airing_today) series
export interface SeriesList {
  page: number;
  results: SeriesCompleteListInformation[] | SeriesSummaryListInfo[];
  total_pages: number;
  total_results: number;
}

// a summary list for each series 
export interface SeriesSummaryListInfo {
  adult: boolean;
  vote_average: number;
  poster_path: string;
  name: string;
  id: number;
}

// a complete list for each series 
export interface SeriesCompleteListInformation {
  id: number;
  adult: boolean;
  backdrop_path: string; //main poster of series
  genres: genries[];
  name: string;
  poster_path: string;
  spoken_language?: speak_language[];
  vote_average: number;
  vote_count?: number;
  overview: string;
  number_of_episodes?: number;
  number_of_seasons?: number;
  first_air_date?: string;
  original_language: string;
  original_name: string;
  popularity: number;
  genre_ids: number[];
  origin_country: string[];
}

export interface SeriesActorsList {
  cast: Actor[];
}

export interface SeriesSeason {
  air_date: string;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string
  season_number: number;
  vote_average: number;
}

export interface SeriesCompleteInformation {
  adult: boolean;
  backdrop_path: string;
  first_air_date: string;
  genres: genries[];
  homepage: string;
  id: 1416;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  last_episode_to_air: {
    id: 5170856;
    overview: "Wildfires threaten the Seattle region, leading to a flood of patients and emergency procedures. The doctors juggle overcapacity in the ER, complex surgeries and personal stress. Meanwhile, Meredith makes a rash decision that can't be undone.";
    name: "Burn It Down";
    vote_average: 10;
    vote_count: 1;
    air_date: "2024-05-30";
    episode_number: 10;
    episode_type: "finale";
    production_code: "";
    runtime: 44;
    season_number: 20;
    show_id: 1416;
    still_path: "/7PyFEy7Ljs26Le9a2RiHhSaaTvC.jpg";
  };
  name: string;
  number_of_episodes: number;
  number_of_seasons: 20;
  original_name: string;
  overview: string
  popularity: number;
  poster_path: string
  production_companies: Company[];
  seasons: SeriesSeason[]
  vote_average: number
  vote_count: number
}


// Episode types and methods

interface EpisodeList {
  air_date: string;
  episode_number: number;
  episode_type: string;
  id: number;
  name: string;
  overview: string;
  production_code: string;
  runtime: number;
  season_number: number;
  show_id: number;
  still_path: string;
  vote_average: number;
  vote_count: number;
  crew: {
    department: string;
    job: string;
    credit_id: string;
    adult: boolean;
    gender: number;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
  }[];
  guest_stars: GuestActors[];
}
