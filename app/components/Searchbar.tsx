'use client';
import React, { useState } from 'react';

interface SearchbarProps {
    placeholder?: string;
    onSearch?: (query: string) => void;
}

const Searchbar: React.FC<SearchbarProps> = ({ placeholder = "Search...", onSearch }) => {
    const [query, setQuery] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        if (onSearch) {
            onSearch(e.target.value);
        }
    };

    return (
        <div className='w-full flex items-center'>
            <input
                className='
                    text-xl
                    w-full p-2 px-5 rounded-3xl bg-neutral-900 text-neutral-400 outline-none
                    focus:bg-neutral-800 hover:bg-neutral-800 transition-colors duration-200'
                type="text"
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Searchbar;