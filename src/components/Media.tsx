import { useEffect, useRef } from "react";
import MediaCard from "./MediaCard";

const datas = [
  {
    title: "Lorem ipsum dolor",
    desc: "Lay the foundation for a continuous Ethereum movement in Ethiopia",
  },
  {
    title: "Lorem ipsum dolor",
    desc: "Foster deep collaboration among Africa’s Web3 changemakers, amplifying all efforts to drive impactful change across the continent",
  },
  {
    title: "Lorem ipsum dolor",
    desc: "Inspire the tech-pro Government of Ethiopia into the Ethereum Ecosystem, creating a breeding ground for experiementation",
  },
  {
    title: "Lorem ipsum dolor",
    desc: "Inspire new ways of thinking through immersive cultural experiences",
  },
];

const Media = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const observer = new IntersectionObserver(([entry]) => {
      if (videoElement) {
        if (entry.isIntersecting) {
          videoElement
            .play()
            .catch((err) => console.error("Failed to play video:", err));
        } else {
          videoElement.pause();
        }
      }
    });

    // Start observing the video element
    if (videoElement) {
      observer.observe(videoElement);
    }

    // Cleanup on unmount
    return () => {
      if (videoElement) {
        observer.unobserve(videoElement);
      }
    };
  }, []);

  return (
    <section className="py-10 relative">
      <div className="max-w-[83rem] px-4 md:px-0 lg:px-0 mx-auto">
        <div className="flex-col h-full justify-center items-center gap-5 flex">
          <div className="flex-col items-center text-center gap-4 flex">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              The Goals
            </h2>
            <p className="text-gray-600  leading-relaxed text-base max-w-5xl lg:text-lg">
              Our mission is to unite Africa's brightest Web3 innovators, foster
              collaboration among diverse communities, and showcase Ethiopia as
              a global hub for blockchain technology.
            </p>
          </div>

          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MediaCard textColor="primary" desc={datas[0].desc} index={0} />
            <div className="md:col-span-2">
              <img
                src="https://placehold.co/600x400"
                className="lg:mx-0 mx-auto rounded-3xl object-cover w-full h-auto md:h-64"
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
          <div className="pt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {datas.slice(1).map((data, index) => (
              <MediaCard
                key={index + 1}
                textColor="normal"
                index={index + 1}
                desc={data.desc}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
