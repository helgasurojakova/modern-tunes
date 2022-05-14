import React from 'react';
import {Tab, TabList, TabPanel, TabPanels, Tabs} from "@chakra-ui/react";
import TunesGrid from "./tunesGrid";
import TunesTable from "./tunesTable";

const GeneralTab = () => {
        return (
            <Tabs isLazy>
                <TabList>
                    <Tab>Grid</Tab>
                    <Tab>Table</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <TunesGrid/>
                    </TabPanel>
                    <TabPanel>
                        <TunesTable/>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        )
};

export default GeneralTab;