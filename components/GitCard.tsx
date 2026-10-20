import React from "react";
import Image from "next/image";
import { RepositoriesType } from "@/app/data/Repositories";
import { Tags } from "@/app/data/Tags";

type Repository = RepositoriesType[number];

const TechChip: React.FC<{ tagName: keyof typeof Tags }> = ({ tagName }) => (
  <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/60 px-2.5 py-1 text-xs text-slate-300">
    <Image
      src={Tags[tagName]}
      alt=""
      width={14}
      height={14}
      className="h-3.5 w-3.5"
    />
    {tagName}
  </span>
);

const GitCard: React.FC<{ props: Repository }> = ({ props }) => {
  const isPrivate = props.type === "private";
  const isFeatured = props.featured === true;

  return (
    <a
      href={props.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`View ${props.title} repository on GitHub`}
      className={`group relative flex h-full flex-col rounded-2xl border p-6
                 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/70 hover:shadow-lg hover:shadow-yellow-400/10
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                   isFeatured
                     ? "sm:col-span-2 border-yellow-400/40 bg-gradient-to-br from-gray-900/80 to-sky-950/60 shadow-md shadow-yellow-400/5"
                     : "border-slate-800 bg-gray-900/60"
                 }`}
    >
      {isFeatured && (
        <span className="absolute -top-3 left-6 rounded-full bg-yellow-400 px-3 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-black">
          Featured
        </span>
      )}
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-3">
        <h3 className={`font-semibold text-white transition-colors group-hover:text-yellow-400 ${isFeatured ? "text-2xl" : "text-lg"}`}>
          {props.title}
        </h3>
        <span
          className={`shrink-0 rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide ${
            isPrivate
              ? "bg-slate-800 text-slate-400"
              : "bg-emerald-500/10 text-emerald-400"
          }`}
        >
          {props.type}
        </span>
      </div>

      {/* Description */}
      <p className={`mb-6 whitespace-pre-line leading-relaxed text-slate-400 ${isFeatured ? "text-base" : "line-clamp-3 text-sm"}`}>
        {props.description}
      </p>

      {/* Footer */}
      <div className="mt-auto flex items-end justify-between gap-3">
        <div className="flex flex-wrap gap-1.5">
          {props.tags.map((tag) => (
            <TechChip key={tag} tagName={tag} />
          ))}
        </div>
        <span
          aria-hidden="true"
          className="shrink-0 text-slate-500 transition-all duration-300 group-hover:translate-x-1 group-hover:text-yellow-400"
        >
          →
        </span>
      </div>
    </a>
  );
};

export default GitCard;
