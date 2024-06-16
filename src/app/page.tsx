import VideosCardSlider from "@/components/slider/VideosCardSlider";
import { getSeriesList } from "./fetchDataMethods";
import VideosPreviewSlider from "@/components/slider/VideosPreviewSlider";

export default async function Page() {
  const popularSeries = await getSeriesList(undefined, "en-US", "popular");
  const onAirSeries = await getSeriesList(undefined, "en-US", "on_the_air");
  const topRatedSeries = await getSeriesList(undefined, "en-US", "top_rated");

  return (
    <>
      <VideosPreviewSlider videos={popularSeries} />
      <VideosCardSlider sectionTitle="POPULAR SERIES" videos={popularSeries} />
      <VideosCardSlider sectionTitle="ON AIR SERIES" videos={onAirSeries} />
      <VideosCardSlider
        sectionTitle="TOP RATED SERIES"
        videos={topRatedSeries}
      />
    </>
  );
}
