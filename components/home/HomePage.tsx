'use client'

import React, {useState} from 'react';
import Map from '@/components/globe/Map'
import Header from "@/components/global/Header";
import NightMode from "@/components/global/NightMode";
const HomePage = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [night,setNight]=useState(false);

    return (
        <div>
            <Header onSearch={setSearchQuery} />
            <NightMode night={night} setNight={setNight} />
            <Map searchQuery={searchQuery} nightMode={night} />
        </div>
    );
};

export default HomePage;