'use client';
import { useState } from 'react';
import { Repositories } from '@/app/data/Repositories';
import GitCard from '@/components/GitCard';
import { Tags } from '@/app/data/Tags';
import RevealOnScroll from '@/utils/RevealOnScroll';

function Projects() {
    type FilterType = "All" | keyof typeof Tags;
    const [filter, setFilter] = useState<FilterType>('All');

    const allTags: FilterType[] = ["All"]
    Repositories.forEach((repo) => {
        repo.tags.forEach((tag) => {
            if (!allTags.includes(tag as FilterType) && tag in Tags) {
                allTags.push(tag as FilterType);
            }
        })
    })

    const visibleRepos = Repositories.filter(
        (repo) => filter === "All" || repo.tags.includes(filter as keyof typeof Tags)
    ).sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false));

    return (
        <div className="min-h-screen mx-auto max-w-[110rem]">
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-4xl font-bold text-white">My Projects</h1>
                    <span className="text-slate-400 text-sm">
                        A collection of my personal repositories · {visibleRepos.length} {visibleRepos.length === 1 ? 'repository' : 'repositories'}
                    </span>
                </div>
                {/* Tags*/}
                <RevealOnScroll direction='right'>
                <div className="flex flex-wrap justify-center gap-2 mt-4 mb-10" role="group" aria-label="Filter projects by technology">
                    {allTags.map((tag) => (
                        <button
                            key={tag}
                            type="button"
                            aria-pressed={filter === tag}
                            onClick={() => setFilter(tag)}
                            className={`rounded-full px-4 py-1.5 text-sm transition-colors duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 ${
                                filter === tag
                                    ? 'bg-yellow-400 text-black font-medium'
                                    : 'border border-slate-700 text-slate-300 hover:border-yellow-400 hover:text-white'
                            }`}
                        >
                            {tag}
                        </button>
                    ))}
                </div>
                </RevealOnScroll>
                {/* Cards */}
                <RevealOnScroll direction="up">
                    {visibleRepos.length === 0 ? (
                        <p className="text-center text-slate-400 p-8">No projects found for this filter.</p>
                    ) : (
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                            {visibleRepos.map((repo) => (
                                <GitCard key={repo.url} props={repo} />
                            ))}
                        </div>
                    )}
                </RevealOnScroll>
        </div>
    );
}

export default Projects;
