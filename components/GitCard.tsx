import React from "react";
import Image from "next/image";
import { RepositoriesType } from "@/app/data/Repositories";
import { Tags } from "@/app/data/Tags";

type Repository = RepositoriesType[number]

const Tag: React.FC<{ tagName: keyof typeof Tags }> = ({ tagName }) => (
    <Image src={Tags[tagName]} alt={tagName} width={24} height={24} className="inline-block w-6 h-6" />
);

const GitCard: React.FC<{ props: Repository }> = ({ props }) => {
  return (
    <div className=" bg-gray-950 ring ring-amber-400 rounded-xl shadow-sm shadow-slate-700 overflow-hidden hover:shadow-xl transition-shadow duration-300 hover:scale-105 flex flex-col h-full">
      <div className="p-4 flex-grow">
        <h3 className="text-xl font-bold text-white mb-2">{props.title}</h3>
        <p className="text-gray-400 mb-4">{props.description}</p>
      </div>
      <div className="flex from-gray-50 to-yellow-400 bg-gradient-to-r p-2 justify-between mt-auto">
        <div className="flex flex-wrap items-center gap-2">
          {props.tags.map((tag, index) => (
            <Tag key={index} tagName={tag as keyof typeof Tags} />
          ))}
        </div>
        <a
          href={props.url}
          aria-label={`View ${props.title} Repository`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-900 transition-colors flex items-center space-x-2"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.529 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.983 1.029-2.681-.103-.253-.446-1.27.098-2.645 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.845c.85.004 1.705.115 2.504.337 1.91-1.294 2.75-1.025 2.75-1.025.544 1.375.201 2.392.099 2.645.64.698 1.028 1.59 1.028 2.681 0 3.841-2.337 4.687-4.565 4.935.36.31.682.92.682 1.855 0 1.34-.012 2.421-.012 2.749 0 .268.18.58.688.482C19.138 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z"
              clipRule="evenodd"
            />
          </svg>
          <span>View Repo</span>
        </a>
      </div>
    </div>
  );
};

export default GitCard;