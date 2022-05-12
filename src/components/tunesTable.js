import React, {useEffect, useState} from 'react';
import {Link, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr} from "@chakra-ui/react";
import {useFetching} from "../hooks/useFetching";
import { Image } from '@chakra-ui/react';
import {tunesApi} from "../api/tunesApi";

const TunesTable = () => {

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
                            <Tr key={index}>
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
                                    <Link href={tune.link[0].attributes.href}
                                          style={{
                                              color: '#0070c9',
                                              border: '1px solid #0070c9',
                                              borderRadius: '4px',
                                              padding: '7px 10px 7px',
                                          }}
                                          isExternal>
                                        Open
                                    </Link>
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

