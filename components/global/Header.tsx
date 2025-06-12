'use client';

import React from 'react';
import SearchBar from "@/components/global/SearchBar";
import { useCountrySearch } from "@/hooks/useCountrySearch";

interface HeaderProps {
    onSearch: (value: string) => void;
}

const Header = ({ onSearch }: HeaderProps) => {
    const { setInput } = useCountrySearch();

    const handleSearch = (value: string) => {
        onSearch(value);
        setInput(value);
    };

    return (
        <div className="shine-effect fixed top-0 z-50 w-full bg-black bg-opacity-10 backdrop-blur-sm text-white px-7 py-4">
            <div className="relative inline-block">
                <SearchBar onSearch={handleSearch} />
            </div>
        </div>
    );
};

export default Header;
