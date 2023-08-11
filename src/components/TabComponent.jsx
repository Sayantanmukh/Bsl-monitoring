import Tab from '@material-ui/core/Tab';
import TabContext from '@material-ui/lab/TabContext';
import TabPanel from '@material-ui/lab/TabPanel';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import * as React from 'react';
import GridComponent from './GridComponent';
import TableComponent from './TableComponent';

export default function CenteredTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <TabContext value={value}>
            <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                <Tabs value={value} onChange={handleChange} centered>
                    <Tab label="Data" value="1" />
                    <Tab label="Charts" value="2" />
                </Tabs>
            </Box>
            <TabPanel value="1">
                <TableComponent />
            </TabPanel>
            <TabPanel value="2">
                <GridComponent />
            </TabPanel>
        </TabContext>
    );
}