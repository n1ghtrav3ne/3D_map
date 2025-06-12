import React from 'react';

interface Props {
    suggestions: string[];
    onSelect: (value: string) => void;
}

const DropDown = ({ suggestions, onSelect }: Props) => {
    if (!suggestions.length) return null;

    return (
        <div className="absolute top-10 mt-2 z-50 max-h-48 w-52 overflow-auto rounded-md bg-white text-black shadow-lg">
            {suggestions.map((country) => (
                <div
                    key={country}
                    className="cursor-pointer px-4 py-2 hover:bg-gray-100"
                    onClick={() => onSelect(country)}
                >
                    {country}
                </div>
            ))}
        </div>
    );
};

export default DropDown;
