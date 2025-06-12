interface CountryAPIResponse {
    name: {
        common: string;
        official: string;
        nativeName?: {
            [key: string]: {
                official: string;
                common: string;
            };
        };
    };
    cca2: string;
    cca3: string;
    latlng: [number, number];
}

export async function fetchAllCountries(): Promise<string[]> {
    const res = await fetch('https://restcountries.com/v3.1/all?fields=name,cca2,cca3,latlng');

    if (!res.ok) {
        const errorText = await res.text();
        throw new Error(`Failed to fetch countries: ${res.status} ${res.statusText} - ${errorText}`);
    }

    const data: CountryAPIResponse[] = await res.json();

    return data
        .filter(c => c.name?.common)
        .map((c) => c.name.common)
        .sort();
}
