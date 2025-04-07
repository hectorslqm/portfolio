import React from 'react';
import { workHistory, workHistoryType } from '@/app/data/WorkData'; // Adjust import path as needed

const WorkTimeline: React.FC = () => {
    // Sort work history from most recent to oldest
    const sortedWorkHistory = [...workHistory].sort((a, b) => {
        const latestPositionA = a.positions[a.positions.length - 1];
        const latestPositionB = b.positions[b.positions.length - 1];
        return new Date(latestPositionB.start).getTime() - new Date(latestPositionA.start).getTime();
    });

    return (
        <div className="max-w-4xl mx-auto">
            <div className="relative border-l-8 border-white pl-10 rounded-b-sm">
                {sortedWorkHistory.map((company, index) => {
                    const allPositionsEnded = company.positions.every((position) => position.end);

                    return (
                        <div 
                        key={company.company} 
                        className="mb-10 relative group"
                        >
                            {/* Timeline dot */}
                            <div className={`absolute -left-[calc(0.75rem+46px)] top-[-12] w-7 h-7 rounded-full 
                                ${allPositionsEnded ? 'bg-slate-500 group-hover:bg-gray-600' : 'bg-green-500 group-hover:bg-green-600'} 
                                transition-colors flex items-center justify-center`}>
                                <div className="w-3 h-3 bg-white rounded-full"></div>
                            </div>

                            {/* Company Card */}
                            <div className="bg-slate-200 shadow-lg rounded-lg p-6 border border-gray-100 
                                transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02]">
                                <div className="flex justify-between items-start mb-4">
                                    <div>
                                        <a
                                        href={company.companyWebsite}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                        title={company.companyDescription}
                                        >
                                        <h3 className="text-2xl font-semibold text-gray-900 pt-6">{company.company}</h3>
                                        </a>
                                    </div>
                                    {/* Company logo */}
                                    <div className="w-16 h-16 bg-gray-100 rounded-lg  p-1 flex items-center justify-center">
                                        {company.logo ? (
                                        <img 
                                            src={company.logo} 
                                            alt={`${company.company} logo`} 
                                            className="w-full h-full object-contain rounded-lg"
                                        />
                                        ) : (
                                        <span className="text-gray-400 text-sm">Logo</span>
                                        )}
                                    </div>
                                </div>

                                {/* Positions */}
                                {company.positions.slice().reverse().map((position) => (
                                    <div key={position.position} className="mb-4 pb-4 border-b border-amber-600 last:border-b-0">
                                        <div className="flex justify-between items-center">
                                            <div>
                                                <h4 className="font-bold text-slate-900">{position.position}</h4>
                                                <div className='flex justify-around space-x-8'>
                                                    <p className="text-sm text-slate-600">
                                                    {position.start.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })} 
                                                    {position.end ? 
                                                        ` - ${position.end.toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}` : 
                                                        ' - Present'
                                                    }
                                                    </p>
                                                    {position.location && (
                                                        <p className="text-sm text-gray-600 flex">
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                fill="none"
                                                                viewBox="0 0 24 24"
                                                                strokeWidth={1.5}
                                                                stroke="currentColor"
                                                                className="w-4 h-4 text-gray-500"
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
                                                <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
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
                                            className="text-md bg-yellow-300 text-slate-700 px-2 py-1 rounded border-2 border-slate-500 transition-colors duration-200 hover:bg-yellow-500 hover:text-slate-800 cursor-pointer"
                                            >
                                                {tag}
                                            </span>
                                            ))}
                                        </div>
                                        )}
                                        <div>
                                            {position.content && 
                                            position.content.map((content, index) => (
                                            <ul key={index} className="list-disc list-inside mt-2">
                                                <li key={index} className="text-sm text-slate-900">
                                                    {content}
                                                </li>
                                            </ul>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default WorkTimeline;