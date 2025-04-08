'use client';
import {useState} from 'react';
import { Repositories } from '@/app/data/Repositories';
import GitCard from '@/components/GitCard';
import { Tags } from '@/app/data/Tags';

function portfolio() {
    type FilterType = "All" | keyof typeof Tags;
    const [filter, setFilter] = useState<FilterType>('All');

    const allTags: FilterType[] = ["All"]
    Repositories.forEach((repo) => {
        repo.tags.forEach((tag) => {
            if(!allTags.includes(tag as FilterType) && tag in Tags) {
                allTags.push(tag as FilterType);
            }
        })
    })

    return ( 
        <div className="min-h-screen">
            <div className="flex flex-col justify-center items-center">
                <span className="text-4xl font-bold text-white">My Portfolio</span>
                <span className="text-slate-400 text-sm">A collection of my personal repositories</span>
            </div>

            {/* Tags*/}
            <div className="flex flex-wrap justify-center gap-2 mt-4 mb-10">
                {allTags.map((tag, index) => (
                    <span key={index} className={`text-sm px-4 py-2 rounded-full ${filter === tag ? 'bg-slate-700' : 'bg-slate-800'} hover:bg-slate-700 text-white`} onClick={() => setFilter(tag)}>
                        {tag}
                    </span>
                ))}
            </div>
            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {Repositories.filter(repo => filter === "All" || repo.tags.includes(filter as keyof typeof Tags)).map((repo, index) => (
                    <GitCard key={index} props={repo} />
                ))}
            </div>
        </div>
    );
}

export default portfolio;