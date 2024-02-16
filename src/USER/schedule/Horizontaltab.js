import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Schedule1 from './Schedule1';
import Schedule2 from './Schedule2';
import Schedule3 from './Schedule3';
export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div><h2 className="titl" style={{ textAlign: 'center', margin: '90px 0px 30px 0', fontSize: '3.6rem', zIndex: 100 }}>
      Schedule
    </h2>
      <Box sx={{ width: '80%', margin: 'auto', typography: 'body1', backgroundColor: '' }}>
        <TabContext value={value}>
          <Box sx={{}}>
            <TabList onChange={handleChange} sx={{ width: '50%', margin: 'auto', typography: 'body1', backgroundColor: '' }} >
              <Tab sx={{ width: '10%', margin: 'auto', borderRadius: '5px', fontSize: '12px', typography: '', backgroundColor: 'pink', height: 15 }} label="Item One" value="1" />
              <Tab sx={{ width: '10%', margin: 'auto', borderRadius: '5px', fontSize: '12px', typography: '', backgroundColor: 'pink', height: 15 }} label="Item Two" value="2" />
              <Tab style={{ borderRadius: '5px' }} sx={{ width: '10%', margin: 'auto', fontSize: '12px', typography: '', backgroundColor: 'pink', height: 15 }} label="Item Three" value="3" />
            </TabList>
          </Box>
          <TabPanel value="1"><Schedule1 /></TabPanel>
          <TabPanel value="2"><Schedule2 /></TabPanel>
          <TabPanel value="3"><Schedule3 /></TabPanel>
        </TabContext>
      </Box>
    </div>
  );
}
