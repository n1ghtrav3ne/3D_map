import { useEffect, useState } from 'react';
import { fetchAllCountries } from '@/services/countries';
import { filterCountries } from '@/utils/filterCountries';

export const useCountrySearch = () => {
    const [allCountries, setAllCountries] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [suggestions, setSuggestions] = useState<string[]>([]);

    useEffect(() => {
        fetchAllCountries().then(setAllCountries);
    }, []);

    useEffect(() => {
        setSuggestions(filterCountries(input, allCountries));
    }, [input, allCountries]);

    return { input, setInput, suggestions };
};
