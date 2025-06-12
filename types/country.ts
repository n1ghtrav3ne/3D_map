export interface Country {
    name: {
        common: string;
        official: string;
        nativeName?: {
            [lang: string]: {
                official: string;
                common: string;
            };
        };
    };
    latlng: [number, number];
    flags: {
        png: string;
        svg: string;
        alt?: string;
    };
    population: number;
    region: string;
    subregion?: string;
    cca2: string;
    cca3: string;
}
