import React from "react";
import { RepositoriesType } from "@/app/data/Repositories";
import { Tags } from "@/app/data/Tags";

type Repository = RepositoriesType[number]

const Tag: React.FC<{ tagName: keyof typeof Tags }> = ({ tagName }) => (
  <span className="p-2 text-xs font-medium bg-white border-2 rounded-full">
    <img src={Tags[tagName]} alt={tagName} className="inline-block w-6 h-6" />
  </span>
);

const GitCard: React.FC<{props: Repository}> = ({ props }) => {
  return (
    <div className="bg-slate-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300">
        <div className="p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-2">{props.title}</h3>
          <p className="text-gray-600 mb-4">{props.description}</p>
          
          
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
            <div className="flex flex-wrap space-x-[2]">
              {props.tags.map((tag, index) => (
                <Tag key={index} tagName={tag as keyof typeof Tags} />
              ))}
            </div>
            <div className="flex space-x-3">
              {/* right Icons */}
            </div>
          </div>
        </div>
    </div>
  );
};

export default GitCard;
