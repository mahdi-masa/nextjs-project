import { SeriesSummaryListInfo } from "@/types/series";
import Image from "next/image";
import Link from "next/link";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaHeart } from "react-icons/fa";

export default function VideoCard({
  cardInfo,
}: {
  cardInfo: SeriesSummaryListInfo;
}) {
  return (
    <>
      <div className="min-w-[180px] max-w-[200px] rounded-md mx-auto">
        <div className="relative w-full">
          <OverLay
            vote_average={cardInfo.vote_average}
            isAdult={cardInfo.adult}
            id={cardInfo.id}
          />
          <div>
            <CardPoster id={cardInfo.id} posterPath={cardInfo.poster_path}/>
          </div>
        </div>
        <CardName id={cardInfo.id} videoName={cardInfo.name} />
      </div>
    </>
  );
}

function CardName({ id, videoName }: { id: number; videoName: string }) {
  return (
    <div className="text-center py-5">
      <span className="text-[16px] text-white Playfair Display block w-full truncate cursor-pointer">
        <Link
          className="hover:text-green-500 transition-all duration-300"
          href={`/series/${id}`}
        >
          {videoName}
        </Link>
      </span>
    </div>
  );
}

function CardPoster({ id, posterPath }: { id: number; posterPath: string }) {
  return (
    <Link href={`/series/${id}`}>
      <Image
        src={`${process.env.NEXT_PUBLIC_IMAGE_DOMAIN}${posterPath}`}
        width={230}
        height={300}
        alt="Picture of the author"
        className="rounded-md"
        placeholder="blur"
        blurDataURL="./assets/images/image-plachold.jpeg"
      />
    </Link>
  );
}
function OverLay({
  vote_average,
  isAdult,
  id,
}: {
  vote_average: number;
  isAdult: boolean;
  id: number;
}) {
  return (
    <div className="absolute rounded-md min-w-full min-h-full hidden lg:flex flex-col justify-end bg-gray-800/80 transition-all duration-500 opacity-0 hover:lg:opacity-100">
      <div className="my-2 w-full">
        <span className="text-[13px] text-white pl-5 before:content-['Age:_'] sans-500">
          <span className="bg-gray-200 py-1 px-3 rounded-md text-black">
            {isAdult ? "Adult" : "Teenager"}
          </span>
        </span>
      </div>
      <div className="flex flex-row justify-start items-center pl-5 my-2">
        <div className="bg-gray-900 hover:bg-gray-500 rounded-full w-[30px] h-[30px] flex flex-col justify-center items-center transition-all duration-300 mx-1 hover:scale-125">
          <AiFillLike className="text-[15px] text-white" />
        </div>
        <div className="bg-gray-900 hover:bg-gray-500 rounded-full w-[30px] h-[30px] flex flex-col justify-center items-center transition-all duration-300 mx-1 hover:scale-125">
          <AiFillDislike className="text-[15px] text-white" />
        </div>
      </div>
      <div className="my-2">
        <p className="text-white mb-5 pl-5 sans-500 flex flex-row justify-start items-center ">
          <span>
            <FaHeart className="text-red-600 text-[25px] px-1" />
          </span>
          <span className="text-[14px]">{vote_average}</span>
        </p>
      </div>
      <div className="text-center">
        <Link href={`/series/${id}`}>
          <button className="text-white bg-yellow-500 rounded-md mb-5 p-2 text-[13px]">
            WATCH
          </button>
        </Link>
      </div>
    </div>
  );
}
