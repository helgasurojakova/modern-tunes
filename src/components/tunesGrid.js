import React, {useEffect, useState} from 'react';
import {
    Grid,
} from "@chakra-ui/react";
import {useFetching} from "../hooks/useFetching";
import {tunesApi} from "../api/tunesApi";
import TuneGridItem from "./tuneGridItem";

const TunesGrid = () => {

    const [tunes, setTunes] = useState([]);

    const [fetchData, isDataLoading, dataError] = useFetching(async () => {
        const response = await tunesApi.getAll();
        setTunes([...response.data.feed.entry])
    });

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            {tunes.map((tune) => {
                return (
                <TuneGridItem
                    key={tune.id.label}
                    title={tune.title.label}
                    name={tune["im:name"].label}
                    artist={tune["im:artist"].label}
                    date={tune["im:releaseDate"].attributes.label}
                    image={tune["im:image"][2].label}
                    video={tune.link[1].attributes.href}
                    link={tune.link[0].attributes.href}/>
                )
            })}
        </Grid>
    );
};

export default TunesGrid;

