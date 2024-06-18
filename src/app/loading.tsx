import Image from "next/image";

export default function Loading() {
  return (
    <div className="max-w-[500px] mx-auto flex flex-col justify-center items-center min-h-screen">
      <p className="playfair-display text-white">Loading ...</p>
      <Image
        src="/assets/images/loading.gif"
        alt="loading"
        width={200}
        height={200}
      />
    </div>
  );
}
