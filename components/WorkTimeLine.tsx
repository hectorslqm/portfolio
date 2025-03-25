import { workHistory } from "@/app/data/WorkData";

const formatDate = (date?: Date) =>
    date ? date.toLocaleDateString("en-US", { year: "numeric", month: "short" }) : "Present";

const WorkTimeline: React.FC = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <div className="space-y-2">
                {workHistory.slice().reverse().map((job, idx) => (
                    <div key={idx} className="border-l-2 pl-4">
                        <div className="mb-4">
                            <h3 className="text-2xl font-semibold text-white-900">
                                <a
                                    href={job.companyWebsite}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                    title={job.companyDescription}
                                >
                                    {job.company}
                                </a>
                            </h3>
                        </div>
                        <div className="space-y-4">
                            {job.positions.slice().reverse().map((pos, pIdx) => (
                                <div key={pIdx} className="bg-gray-100 p-4 rounded-lg shadow-md">
                                    <h4 className="text-lg font-medium text-gray-900">{pos.position}</h4>
                                    <p className="text-sm text-gray-500">
                                        {formatDate(pos.start)} - {formatDate(pos.end)} | {pos.contractType}
                                    </p>
                                    {pos.content && (
                                        <ul className="mt-2 text-sm text-gray-700 list-disc list-inside">
                                            {pos.content.map((point, i) => (
                                                <li key={i}>{point}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {pos.tags && (
                                        <div className="mt-2 flex flex-wrap gap-2">
                                            {pos.tags.map((tag, tIdx) => (
                                                <span key={tIdx} className="bg-primary border-2 rounded-2xl text-slate-700 px-2 py-1 text-xs">
                                                    {tag}
                                                </span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default WorkTimeline;