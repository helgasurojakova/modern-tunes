import React from 'react';
import {Box, Image, Link} from "@chakra-ui/react";
import { AspectRatio } from '@chakra-ui/react';

const GridItemComponent = ({title, name, artist, date, image, video, link}) => {
    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <AspectRatio maxW='400px' ratio={4 / 3}>
                <Image src={image} alt={title}/>
            </AspectRatio>
            <Box p='6'>
                <Box display='flex' alignItems='baseline'>
                    <Box
                        color='gray.500'
                        fontWeight='semibold'
                        letterSpacing='wide'
                        fontSize='xs'
                        textTransform='uppercase'
                    >
                        {date}
                    </Box>
                </Box>

                <Box
                    mt='1'
                    fontWeight='semibold'
                    as='h4'
                    lineHeight='tight'
                    isTruncated
                >
                    {name}
                </Box>

                <Box isTruncated>
                    {artist}
                </Box>

                <Box display='flex' mt='2' alignItems='center'>
                    <Link href={link}
                          style={{
                              color: '#0070c9',
                              border: '1px solid #0070c9',
                              borderRadius: '4px',
                              padding: '7px 10px 7px',
                          }}
                          isExternal>
                        Open
                    </Link>
                </Box>
            </Box>
        </Box>
    );
};

export default GridItemComponent;