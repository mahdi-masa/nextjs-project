export const imageBaseURL = process.env.NEXT_PUBLIC_IMAGE_DOMAIN;
export const tmdbApiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;
export const tmdbBaseURL = process.env.NEXT_PUBLIC_API_DOMAIN;

// language types and methods
export interface speak_language {
  english_name: string;
  name: string;
}

// genries types and methods

export interface genries {
  id: number;
  name: string;
}

// actors interfaces
export interface Actor {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

// guest actors interface
export interface GuestActors {
  character: string;
  credit_id: string;
  order: number;
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: string;
}

// company type
export interface Company {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
}
