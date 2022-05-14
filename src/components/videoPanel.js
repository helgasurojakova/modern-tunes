import React from 'react';
import {
    AspectRatio,
    Button,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/react";

const VideoPanel = ({title, video, link, isOpen, onOpen, onClose}) => {

   function openInInternet (link){
        window.open(link, '_blank');
    }

    return (
        <Modal isOpen={isOpen} onClose={onClose} size={'2xl'}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <AspectRatio  ratio={1}>
                        <iframe
                            title={title}
                            src={video}
                            allowFullScreen
                        />
                    </AspectRatio>
                </ModalBody>

                <ModalFooter>
                    <Button variant='solid' color='#0070c9' mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant='outline' color='#0070c9' onClick={() => {openInInternet(link)}} isexternal="true">Open</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default VideoPanel;