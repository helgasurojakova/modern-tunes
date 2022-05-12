import React, {useEffect, useState} from 'react';
import {
    Grid,
} from "@chakra-ui/react";
import {useFetching} from "../hooks/useFetching";
import {tunesApi} from "../api/tunesApi";
import GridItemComponent from "./gridItemComponent";

const TunesGrid = () => {

    const [tunes, setTunes] = useState([]);

    const [fetchData, isDataLoading, dataError] = useFetching(async () => {
        const response = await tunesApi.getAll();
        console.log(response, 'res')
        setTunes([...response.data.feed.entry])
    });

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <Grid templateColumns='repeat(5, 1fr)' gap={6}>
            {tunes.map((tune) => {
                return (
                <GridItemComponent
                    key={tune.id.label}
                    title={tune.title.label}
                    name={tune["im:name"].label}
                    artist={tune["im:artist"].label}
                    date={tune["im:releaseDate"].attributes.label}
                    image={tune["im:image"][2].label}
                    video={null}
                    open={null}/>
                )
            })}
        </Grid>
    );
};

export default TunesGrid;

