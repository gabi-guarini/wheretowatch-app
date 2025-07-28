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
        <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
                type="text"
                value={query}
                onChange={handleChange}
                placeholder={placeholder}
                style={{
                    padding: '8px',
                    borderRadius: '4px',
                    border: '1px solid #ccc',
                    width: '100%',
                }}
            />
        </div>
    );
};

export default Searchbar;