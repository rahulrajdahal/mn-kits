import React from "react";

export default function Card({
  name,
  time,
  post,
  earthIcon,
  messageIcon,
  dislikeIcon,
  likeIcon,
}: {
  likeIcon?: React.ReactNode;
  dislikeIcon?: React.ReactNode;
  messageIcon?: React.ReactNode;
  earthIcon?: React.ReactNode;
  post: React.ReactNode;
  name: string;
  time: string;
}) {
  return (
    <div className="rounded-[2.5rem] bg-white p-8 w-fit max-w-[37.5rem]">
      <div className="flex items-center gap-3 mb-3">
        <img
          src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=1600"
          className="w-[3.75rem] h-[3.75rem] rounded-full object-cover"
          alt="profile"
        />

        <div className="flex flex-col gap-0">
          <strong className="text-grey-900 text-lg leading-8 -tracking-[0.025rem] font-semibold">
            {name}
          </strong>
          <span className="flex items-center gap-[0.69rem]">
            <p className="text-grey-500 text-sm leading-6 -tracking-[0.0175rem] font-normal">
              {time}
            </p>
            {earthIcon}
          </span>
        </div>
      </div>
      {post}

      <div className="mt-4 flex items-start gap-4">
        <span className="flex items-center">
          <span className="px-3 py-2 border border-grey-200 rounded-tl-lg rounded-bl-lg flex items-center gap-[0.31rem]">
            {likeIcon}
            <p>Like</p>
          </span>
          <span className="p-2 border border-grey-200 border-l-0 rounded-tr-lg rounded-br-lg">
            {dislikeIcon}
          </span>
        </span>

        <span className="flex items-start gap-[0.31rem] px-3 py-2 rounded-lg border border-grey-200 w-full">
          {messageIcon}
          <textarea
            rows={1}
            className="text-grey-400 h-full outline-none border-none text-base w-full font-medium -tracking-[0.02rem]"
            placeholder="Add a comment"
          />
        </span>
      </div>
    </div>
  );
}
