import { tmdbApiKey, tmdbBaseURL } from "@/types/general";
import { SeriesActorsList, SeriesCompleteInformation, SeriesList } from "@/types/series";
import { getApi } from "@/types/types";

export async function getSeriesList(
  pageNumber: number | undefined,
  lang: string,
  listType: "popular" | "on_the_air" | "airing_today" | "top_rated"
) {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${tmdbApiKey}`,
  };

  if (!pageNumber) {
    pageNumber = Math.floor(Math.random() * 11);
  }

  const URL = `${tmdbBaseURL}3/tv/${listType}?language=${lang}&page=${pageNumber}`;
  const data = await getApi<SeriesList>(URL, headers);
  return data["results"];
}

export async function getSeriesActors( series_id : number){
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${tmdbApiKey}`,
  };

  const URL = `${tmdbBaseURL}3/tv/${series_id}/credits`;
  const data = await getApi<SeriesActorsList>(URL, headers);
  console.log(data['cast']);
  return data["cast"];
}

export async function getSereisInfo(series_id : number) {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${tmdbApiKey}`,
  };

  const URL = `${tmdbBaseURL}3/tv/${series_id}`;
  const data = await getApi<SeriesCompleteInformation>(URL, headers);
  return data;
}

export async function getEpisodesSeries( seriesId : number, seasonNumber : number, episodeNumber : number) {
  const headers = {
    accept: "application/json",
    Authorization: `Bearer ${tmdbApiKey}`,
  };

  const URL = `${tmdbBaseURL}3/tv/${seriesId}/season/${seasonNumber}/episode/${episodeNumber}`;
  const data = await getApi<SeriesCompleteInformation>(URL, headers);
  return data;

}

