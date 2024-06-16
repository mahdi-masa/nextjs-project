import Image from "next/image";

// icons
import { FaHeart, FaPlay } from "react-icons/fa";
import { AiTwotoneDislike, AiTwotoneLike } from "react-icons/ai";
import { IoDownloadOutline } from "react-icons/io5";


export default function EpisodeComponent({ episodeInformation } : {
    episodeInformation : episodeInformation
}){
    return (
      <div className="rounded-md max-w-[400px] cursor-pointer p-3 mx-5 bg-gray-900 my-5">
        <div className="relative">
          <Image
            src={`${ episodeInformation.still_path ? process.env.NEXT_PUBLIC_IMAGE_DOMAIN + episodeInformation.still_path : '/assets/images/image-no-available.png'}`}
            alt="actor"
            width={350}
            height={100}
            className="rounded-md"
          />
          <div className="absolute bottom-5 right-3 bg-gray-700 p-2 rounded-md opacity-90">
            <span className="text-white text-[13px] before:content-['Minitue:_'] sans-500">
              {episodeInformation.runtime}
            </span>
          </div>
          <div className="absolute bottom-0 top-0 left-0 right-0 bg-gray-900/20 relative opacity-0 hover:opacity-100 transition-all duration-300">
            <FaPlay className="absolute bottom-5 left-3 text-white" />
          </div>
        </div>
        <div className="text-start my-2">
          <span className="text-white text-[14px] sans-500">
            {episodeInformation.name}
          </span>
        </div>
        <div className="flex flex-row justify-between items-center my-3">
          <div className="flex flex-row justify-center items-center">
            <FaHeart className="sm:text-[20px] hover:text-red-600 transition-all duration-300 hover:scale-125 text-white" />
            <span className="sans-500 text-justify text-white mx-3 text-[14px]">
              {episodeInformation.vote_average}
            </span>
          </div>
          <div className="flex flex-row justify-between items-center">
            <AiTwotoneLike className="text-[30px] sm:text-[35px] bg-[#414141] mx-2 rounded-full p-1 text-white hover:scale-125 transition-all duration-300" />
            <AiTwotoneDislike className="text-[30px] sm:text-[35px] bg-[#414141] mx-2 rounded-full p-1 text-white hover:scale-125 transition-all duration-300" />
            <IoDownloadOutline className="text-[30px] sm:text-[35px] bg-[#414141] mx-2 rounded-full p-1 text-white hover:scale-125 transition-all duration-300" />
          </div>
        </div>
      </div>
    );
}