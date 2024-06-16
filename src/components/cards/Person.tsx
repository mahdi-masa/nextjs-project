import { imageBaseURL } from "@/types/general"
import Image from "next/image"

export default function Person({ avatar, fullName, role}: {
    avatar: string,
    fullName: string,
    role: string
}){

    return( 
        <div className="w-fit">
            <div className="w-fit">
                <Image
                src={`${imageBaseURL}${avatar}`}
                height={150}
                width={150}
                alt="actor"
                className="rounded-full w-[80px] h-[80px] md:h-[150px] md:w-[150px] object-fit"
                />
            </div>
            <div className="my-2 w-[80px] md:w-auto">
                <span className="sans-500 text-[15px] text-center block text-white">
                    { fullName }
                </span>
            </div>
            <div className="my-1">
                <span className="sans-500 text-[10px] text-center block text-white">
                    { role }
                </span>
            </div>
        </div>
    )

}