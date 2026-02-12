import React from "react";
import { WorkHistory } from "@/app/data/WorkData"; // Adjust import path as needed
import RevealOnScroll from "@/utils/RevealOnScroll";

const WorkTimeline: React.FC = () => {
  // Sort work history from most recent to oldest
  const sortedWorkHistory = [...WorkHistory].sort((a, b) => {
    const latestPositionA = a.positions[a.positions.length - 1];
    const latestPositionB = b.positions[b.positions.length - 1];
    return (
      new Date(latestPositionB.start).getTime() -
      new Date(latestPositionA.start).getTime()
    );
  });

  return (
    <div className="max-w-4xl px-4 md:px-6 mx-auto">
      <div className="relative border-l-4 border-yellow-500 pl-6">
        {sortedWorkHistory.map((company) => {
          const allPositionsEnded = company.positions.every(
            (position) => position.end,
          );

          return (
            <RevealOnScroll key={company.company}>
              <div key={company.company} className="mb-10 relative group">
                {/* Timeline dot */}
                <div
                  className={`absolute -left-[calc(2.5rem)] top-[-12] w-7 h-7 rounded-full 
                                    ${allPositionsEnded ? "bg-slate-500 group-hover:bg-gray-600" : "bg-green-500 group-hover:bg-green-600"} 
                                    transition-colors flex items-center justify-center`}
                >
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>

                {/* Company Card */}
                <div
                  className="shadow-lg rounded-lg p-4 border-2 border-dotted hover:border-yellow-400 bg-gradient-to-tr from-gray-950 to-gray-700
                                    transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]"
                >
                  <div className="flex justify-between items-start mb-0 mt-[-2.8rem]">
                    <div className="bg-white rounded-2xl border-2 mb-4 mr-2">
                      <a
                        href={company.companyWebsite}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                        title={company.companyDescription}
                        aria-label={`opens ${company.company} website in a new window`}
                      >
                        <h3 className="text-lg sm:text-2xl font-semibold text-black p-1">
                          {company.company}
                        </h3>
                      </a>
                    </div>
                    {/* Company logo */}
                    {company.logo && (
                      <div className="w-28 h-24 bg-gray-100 rounded-lg p-1 flex items-center justify-center">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={company.logo}
                          alt={`${company.company} logo`}
                          className="w-full h-full object-contain rounded-lg"
                        />
                      </div>
                    )}
                  </div>

                  {/* Positions */}
                  {company.positions
                    .slice()
                    .reverse()
                    .map((position) => (
                      <div
                        key={position.position}
                        className="mb-4 pb-4 border-b border-yellow-400 last:border-b-0"
                      >
                        <div className="flex justify-between flex-col sm:flex-row sm:items-center">
                          <div>
                            <h4 className="font-bold  text-xl text-yellow-500">
                              {position.position}
                            </h4>
                            <div className="flex justify-around space-x-8">
                              <p className="text-sm text-gray-100">
                                <span suppressHydrationWarning>
                                  {position.start.toLocaleDateString("en-US", {
                                    month: "numeric",
                                    year: "numeric",
                                  })}
                                </span>
                                <span suppressHydrationWarning>
                                  {position.end
                                    ? ` - ${position.end.toLocaleDateString("en-US", { month: "numeric", year: "numeric" })}`
                                    : " - Present"}
                                </span>
                              </p>
                              {position.location && (
                                <p className="text-sm text-gray-100 flex">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={1.5}
                                    stroke="currentColor"
                                    className="w-4 h-4 text-gray-100"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 21.75c-4.97-4.97-7.5-8.25-7.5-11.25a7.5 7.5 0 1115 0c0 3-2.53 6.28-7.5 11.25z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M12 11.25a2.25 2.25 0 100-4.5 2.25 2.25 0 000 4.5z"
                                    />
                                  </svg>
                                  <span>{position.location}</span>
                                </p>
                              )}
                            </div>
                          </div>
                          {position.contractType && (
                            <span className="text-xs text-center bg-blue-100 text-blue-800 px-2 py-1 rounded">
                              {position.contractType}
                            </span>
                          )}
                        </div>

                        {/* Tags */}
                        {position.tags && (
                          <div className="flex flex-wrap gap-2 mt-3">
                            {position.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-md bg-yellow-400 text-black px-2 py-1 rounded-2xl border-2 transition-colors duration-200  hover:bg-black hover:text-white"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                        <div>
                          {position.content &&
                            position.content.map((content, index) => (
                              <ul key={index} className="mt-2">
                                <li key={index} className="text-sm text-white">
                                  {content}
                                </li>
                              </ul>
                            ))}
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  );
};

export default WorkTimeline;
