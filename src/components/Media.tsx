import { useEffect, useRef } from "react";
import MediaCard from "./MediaCard";

const datas = [
  {
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque alias eaque voluptate ipsum maxime at libero excepturi natus ex deserunt.",
  },
  {
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque alias eaque voluptate ipsum maxime at libero excepturi natus ex deserunt.",
  },
  {
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque alias eaque voluptate ipsum maxime at libero excepturi natus ex deserunt.",
  },
  {
    title: "Lorem ipsum dolor",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque alias eaque voluptate ipsum maxime at libero excepturi natus ex deserunt.",
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
            <p className="px-8 py-1 border uppercase rounded-full text-sm font-medium">
              Lorem, ipsum.
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Lorem ipsum dolor sit amet consectetur
            </h2>
            <p className="text-gray-600 font-light leading-relaxed text-base max-w-5xl lg:text-lg">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere porro et, corporis vero iure dicta.
            </p>
          </div>
          <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <MediaCard
              textColor="primary"
              title={datas[0].title}
              desc={datas[0].desc}
              index={0}
            />
            <div className="md:col-span-2">
              <img
                src="https://placehold.co/600x400"
                className="lg:mx-0 mx-auto rounded-3xl object-cover w-full h-auto md:h-96"
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
                title={data.title}
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
