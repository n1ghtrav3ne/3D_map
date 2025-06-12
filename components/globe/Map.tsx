'use client'

import dynamic from 'next/dynamic';
import {useRef, useEffect, useState, useMemo} from 'react';
import type { GlobeMethods } from 'react-globe.gl';
import LoadingSpinner from "@/components/global/LoadingSpinner";
import {Country} from "@/types/country";

const PopUp = dynamic(() => import('@/components/global/PopUp'));
const Globe = dynamic(() => import('react-globe.gl'), { ssr: false });

interface GlobeWithSearchProps {
    searchQuery: string;
    nightMode: boolean;
}

const Map = ({ searchQuery,nightMode }: GlobeWithSearchProps) => {
    const globeRef = useRef<GlobeMethods | undefined>(undefined);

    const [loading,setLoading] = useState(false);
    const [error,setError]=useState(false);
    const [errorMessage, setErrorMessage] = useState<string | undefined>(undefined);


    const handleZoomToCountry = async (countryName: string) => {
        if (!countryName) return;

        setLoading(true);

        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fields=name,latlng,cca2,cca3`);
            const data: Country[] = await res.json();

            if (!data || !data[0]?.latlng) {
                setErrorMessage("هیچ کشوری پیدا نشد!");
                setError(true);
                return;
            }

            const [lat, lng] = data[0].latlng;
            globeRef.current?.pointOfView({ lat, lng, altitude: 0.4 }, 1500);
        } catch (err) {
            console.error(err);
            setErrorMessage("خطای غیر منتظره‌ای رخ داد!");
            setError(true);
        } finally {
            setLoading(false);
        }
    };


    useEffect(() => {
        if (searchQuery) {
            handleZoomToCountry(searchQuery);
        }
    }, [searchQuery]);

    const globeImageUrl = useMemo(() => (
        nightMode ? '/globe/earth-night.jpg' : '/globe/earth-blue-marble.jpg'
    ), [nightMode]);

    const backgroundImageUrl = useMemo(() => '/globe/night-sky.png', []);

    return (
        <div
            className="fixed top-0"
            style={{ height: 'var(--app-height)' }}
        >
            <div className="w-full h-full">
                {loading && (
                        <LoadingSpinner />
                )}

                {error && <PopUp close={() => setError(false)} errorText={errorMessage} />}

                <Globe
                    ref={globeRef}
                    globeImageUrl={globeImageUrl}
                    backgroundImageUrl={backgroundImageUrl}
                />
            </div>
        </div>
    );
};

export default Map;