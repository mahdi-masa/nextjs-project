"use client";
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const backgroundImage = `url(/assets/images/errorBackground.webp)`;
  return (
    <div
      className="min-h-screen flex flex-col justify-center items-center "
      style={{ backgroundImage: backgroundImage }}
    >
      <div>
        <span className="text-[#76b852] playfair-display text-[80px] block text-center">
          OOPS
        </span>
        <span className="text-white playfair-display text-[15px] block text-center">
          there is somthing wrong
        </span>
      </div>
    </div>
  );
}
