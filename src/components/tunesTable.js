import React, {useEffect, useState} from 'react';
import {Button, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {useFetching} from "../hooks/useFetching";
import { Image } from '@chakra-ui/react';
import {tunesApi} from "../api/tunesApi";

const TunesTable = () => {

    const [tunes, setTunes] = useState([]);

    const [fetchData, isDataLoading, dataError] = useFetching(async () => {
        const response = await tunesApi.getAll();
        setTunes([...response.data.feed.entry])
    });

    useEffect(() => {
        fetchData()
    }, []);

    function openInInternet (link){
        window.open(link, '_blank');
    }

    return (
        <TableContainer>
            <Table variant='simple'>
                <Thead>
                    <Tr>
                        <Th>#</Th>
                        <Th>Title</Th>
                        <Th>Release Date</Th>
                        <Th></Th>
                        <Th></Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {tunes.map((tune, index) => {
                        return (
                            <Tr key={index}
                                _hover={{backgroundColor: 'rgba(0,112,201,0.05)',}}
                            >
                                <Td>{index + 1}</Td>
                                <Td>
                                    <Text width='400px' isTruncated>
                                        {tune.title.label}
                                    </Text>
                                </Td>
                                <Td>{tune["im:releaseDate"].attributes.label}</Td>
                                <Td>
                                    <Image src={tune["im:image"][0].label} alt={tune.title.label} />
                                </Td>
                                <Td>
                                    <Button
                                        variant='outline'
                                        color='#0070c9'
                                        onClick={() => {openInInternet(tune.link[0].attributes.href)}}
                                        isexternal="true"
                                    >Open
                                    </Button>
                                </Td>
                            </Tr>
                        )
                    }) }
                </Tbody>
            </Table>
        </TableContainer>
    );
};

export default TunesTable;

