import { genries, imageBaseURL } from "@/types/general";
import {
  SeriesCompleteInformation,
  SeriesCompleteListInformation,
} from "@/types/series";
import { info } from "console";
import Link from "next/link";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaPlus } from "react-icons/fa";

export default function VideoPreview({
  information,
}: {
  information: SeriesCompleteInformation | SeriesCompleteListInformation;
}) {
  return (
    <>
      <div
        className="h-[700px] bg-center bg-auto bg-no-repeat opacity-80 relative w-full"
        style={{
          backgroundImage: `url(${imageBaseURL}${information.backdrop_path})`,
        }}
      >
        <div className="absolute bottom-0 top-0 left-0 right-0 bg-gray-800 opacity-70"></div>
        <div className="p-5 max-w-[800px] absolute top-[25%] mx-auto w-full">
          <VideoTitle name={information.name} />
          <TagBasedInfo
            voteAverage={information.vote_average}
            isAdult={information.adult}
            firstAirDate={information.first_air_date}
          />
          {information?.overview && (
            <div className="sans-500 text-white pb-5 text-left w-full max-h-[100px] overflow-hidden">
              {information?.overview}
            </div>
          )}

          <Buttons />

          <Categories genres={information.genres} />
        </div>
      </div>
    </>
  );
}

function TagBasedInfo({
  isAdult,
  firstAirDate,
  voteAverage,
}: {
  isAdult: boolean;
  firstAirDate: string;
  voteAverage: number;
}) {
  return (
    <div className="flex flex-row justify-around items-center pb-5 max-w-[300px] mx-auto">
      <div className="bg-yellow-500 rounded-md flex flex-row justify-center items-center p-1">
        <span className="text-[13px] text-white sans-500">
          {isAdult ? "ADULT" : "TEENAGER"}
        </span>
        <span className="flex flex-col justify-center items-center">
          <i className="bi bi-plus text-white text-[13px]"></i>
        </span>
      </div>
      <div className="flex flex-row justify-center items-center">
        <span className="text-white text-[13px] before:content-['Year:ـ']">
          {firstAirDate}
        </span>
      </div>
      <div className="flex flex-row justify-center items-center">
        <span>
          <i className="bi bi-heart-fill text-red-600 px-1 text-[20px]"></i>
        </span>
        <span className="text-[13px] text-white">{voteAverage}</span>
      </div>
    </div>
  );
}
function VideoTitle({ name }: { name: string }) {
  return (
    <div className="text-white pb-5">
      <h1 className="text-white text-[20px] text-center playfair-display !sans-400">
        {name}
      </h1>
    </div>
  );
}
function Buttons() {
  return (
    <div className="hidden md:flex flex-row justify-around items-center pb-5 max-w-[500px]">
      <Link
        className="bg-white/80 hover:bg-sky-500 hover:text-white rounded-lg p-3 sans-500 text-[15px] transition-all duration-300"
        href="/dashboard"
      >
        <div className="flex flex-row justify-center items-center">
          <span>SUBSCRIPTION</span>
        </div>
      </Link>
      <div className="flex flex-row justify-center items-center">
        <div className="bg-[#515151] hover:bg-gray-500 rounded-full w-[50px] h-[50px] flex flex-col justify-center items-center transition-all duration-300 mx-1">
          <AiFillLike className="text-[20px] text-white" />
        </div>
        <div className="bg-[#515151] hover:bg-gray-500 rounded-full w-[50px] h-[50px] flex flex-col justify-center items-center transition-all duration-300 mx-1">
          <AiFillDislike className="text-white text-[20px]" />
        </div>
        <div className="bg-[#515151] hover:bg-gray-500 rounded-full w-[50px] h-[50px] flex flex-col justify-center items-center transition-all duration-300 mx-1">
          <FaPlus className="text-[15px] text-white" />
        </div>
      </div>
      <Link
        className="text-white rounded-lg p-4 sans-500 hover:text-sky-500 transition-all duration-300"
        href="/dashboard"
      >
        <i className="bi bi-info-circle-fill"></i>
        <span className="p-3 uppercase">watch trailer</span>
      </Link>
    </div>
  );
}

function Categories({ genres }: { genres: genries[] }) {
  return (
    <div>
      <span className="text-white sans-500 uppercase text-[15px]">
        categories:
      </span>
      {genres?.map((item) => (
        <span
          className="bg-gray-400 rounded-md mx-2 p-2 text-white text-[13px]"
          key={item.id}
        >
          {item.name}
        </span>
      ))}
    </div>
  );
}
