import { Country } from '@/types/country';

export async function fetchAllCountries(): Promise<string[]> {
    const res = await fetch(
        'https://restcountries.com/v3.1/all?fields=name,cca2,cca3,latlng'
    );

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(
            `Failed to fetch countries: ${res.status} ${res.statusText} - ${errorText}`
        );
    }

    const data: Country[] = await res.json();

    return data
        .filter((c) => c.name?.common)
        .map((c) => c.name.common)
        .sort();
}
