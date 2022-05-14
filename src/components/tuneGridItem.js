import React from 'react';
import {
    Box, Button,
    Image,
    useDisclosure
} from "@chakra-ui/react";
import { AspectRatio } from '@chakra-ui/react';
import VideoPanel from "./videoPanel";

const TuneGridItem = ({title, name, artist, date, image, video, link}) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    function openInInternet (link){
        window.open(link, '_blank');
    }

    return (
        <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
            <AspectRatio maxW='400px' ratio={4 / 3}>
                <Image
                    src={image}
                    alt={title}
                    onClick={onOpen}
                    _hover={{opacity: 0.5}}
                />
            </AspectRatio>
            <VideoPanel title={title} video={video} link={link} isOpen={isOpen} onClose={onClose}/>
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
                    <Button variant='outline' color='#0070c9' onClick={() => {openInInternet(link)}} isexternal="true">Open</Button>
                </Box>
            </Box>
        </Box>
    );
};

export default TuneGridItem;