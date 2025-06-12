'use client';

import React, { useState } from 'react';
import { FaSearch } from "react-icons/fa";
import { useCountrySearch } from "@/hooks/useCountrySearch";

interface SearchBarProps {
    onSearch?: (value: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
    const [select, setSelect] = useState(false);
    const { input, setInput, suggestions } = useCountrySearch();

    const handleClick = () => {
        if (select && input.trim()) {
            onSearch?.(input);
        }
        setSelect(true);
    };

    const handleSuggestionClick = (country: string) => {
        setInput(country);
        onSearch?.(country);
        setSelect(false)
    };

    return (
        <div className="relative flex z-50 flex-row items-center border-[#8000FF] p-0.5 border-2 rounded-full overflow-visible">
            <input
                dir="rtl"
                className={`
              outline-0 text-lg bg-transparent
              transition-all duration-300 ease-in-out
              ${select ? 'w-52 opacity-100 mr-4' : 'w-0 opacity-0'}
        `}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && input.trim()) {
                        onSearch?.(input);
                        setSelect(false)
                    }
                }}
                type="text"
                placeholder="جست و جو...."
                aria-label="جست و جو"
            />
            <div
                onClick={handleClick}
                className="rounded-full cursor-pointer text-[14px] max-w-[60px] max-h-[60px] flex justify-center bg-[#8000FF] p-3 items-center"
            >
                <FaSearch
                    size={20}
                    className={`${select ? 'rotate-[360deg]' : 'rotate-0'} transition-all duration-1000`}
                />
            </div>

            {select && suggestions.length > 0 && (
                <div
                    className="fixed top-[60px] z-50 max-h-48 w-52 overflow-auto rounded-md text-black shadow-lg overscroll-none"
                    style={{ scrollbarWidth: 'none' }}
                >
                    {suggestions.map((country) => (
                        <div
                            key={country}
                            className="cursor-pointer bg-gray-900 text-white px-4 py-2 hover:bg-gray-500"
                            onClick={() => handleSuggestionClick(country)}
                        >
                            {country}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default SearchBar;
