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

    return (
        <div className="min-h-screen mx-auto max-w-[110rem]">
                <div className="flex flex-col justify-center items-center">
                    <span className="text-4xl font-bold text-white">My Projects</span>
                    <span className="text-slate-400 text-sm">A collection of my personal repositories</span>
                </div>
                {/* Tags*/}
                <RevealOnScroll direction='right'> 
                <div className="flex flex-wrap justify-center gap-2 mt-4 mb-10">
                    {allTags.map((tag, index) => (
                        <span key={index} className={`text-md transform transition-transform hover:scale-110 duration-500 px-4 py-2 rounded-full ${filter === tag ? 'border border-yellow-500 text-white' : 'bg-yellow-400 text-black'} cursor-pointer`} onClick={() => setFilter(tag)}>
                            {tag}
                        </span>
                    ))}
                </div>
                </RevealOnScroll>
                {/* Cards */}
                <RevealOnScroll direction="up">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
                        {Repositories.filter(repo => filter === "All" || repo.tags.includes(filter as keyof typeof Tags)).map((repo, index) => (
                            <GitCard key={index} props={repo} />
                        ))}
                    </div>
                </RevealOnScroll>
        </div>
    );
}

export default Projects;