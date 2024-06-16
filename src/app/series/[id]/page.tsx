import { getSereisInfo, getSeriesActors } from "@/app/fetchDataMethods";
import EpisodesContainer from "@/components/container/EpisodesContainer";
import VideoPreview from "@/components/section/VideoPreview";
import PersonCardSlider from "@/components/slider/PersonCardSlider";

export default async function Page({
  params,
}: {
  params: {
    id: number;
  };
}) {
  const credits = await getSeriesActors(params.id);
  const seriesInfo = await getSereisInfo(params.id);

  console.log(seriesInfo);
  return (
    <>
      <VideoPreview information={seriesInfo}/>
      <PersonCardSlider persons={credits} sectionTitle={"CREDITS"} />
      <EpisodesContainer seasons={seriesInfo.seasons}/>
    </>
  );
}
