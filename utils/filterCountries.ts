export function filterCountries(query: string, countries: string[], limit = 5): string[] {
    if (!query) return [];
    return countries
        .filter(country => country.toLowerCase().startsWith(query.toLowerCase()))
        .slice(0, limit);
}
