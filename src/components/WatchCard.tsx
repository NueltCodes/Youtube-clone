import React from "react";
import { RecommendedVideos } from "../Types";
import { Link } from "react-router-dom";

export default function WatchCard({ data }: { data: RecommendedVideos }) {
  return (
    <div className="flex flex-col w-72 mb-3 gap-3 group">
      <div className="relative min-w-fit ">
        <span className="absolute bottom-0 right-5 lg:right-0 text-sm bg-gray-900 px-2 py-0.5 z-10">
          {data.videoDuration}
        </span>
        <Link to={`/watch/${data.videoId}`}>
          <img
            src={data.videoThumbnail}
            className="lg:h-36 lg:w-80 w-64 object-cover"
            alt="thumbnail"
          />
        </Link>
      </div>
      <div className="flex gap-1 flex-col">
        <h4 className="text-sm">
          <a href="#" className="line-clamp-2">
            {data.videoTitle}
          </a>
        </h4>
        <div className="text-xs text-grap-400">
          <div>
            <a
              href="#"
              className="group-hover:text-white text-sm text-gray-300"
            >
              {data.channelInfo.name}
            </a>
          </div>
          <div>
            <div>
              <span className="after:content-['•'] after:mx-1">
                {data.videoViews} views
              </span>
              <span>{data.videoAge}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
