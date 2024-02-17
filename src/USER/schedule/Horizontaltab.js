import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Schedule1 from './Schedule1';
import Schedule2 from './Schedule2';
import Schedule3 from './Schedule3';
import styled from 'styled-components';

const Container = styled.div`
  h2 {
    text-align: center;
    margin: 90px 0px 30px 0;
    font-size: 3.6rem;
    z-index: 100;
  }
`;

const ResponsiveTabList = styled(TabList)`
  width: 60%;
  margin-left: 35%;
  typography: body1;
  // background-color: pink;

  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 10%;
  }
`;

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  
  return (
    <Container>
      <h2 className="title">Schedule</h2>
      <Box sx={{ width: '90%', margin: 'auto', paddingTop: '20px', borderRadius: '20px', typography: 'body1', backgroundColor: 'rgb(115, 124, 175)', boxShadow:'0 0 25px 30px rgba(167, 98, 231, 0.5)'}}>
        <TabContext value={value}>
          <Box>
            <ResponsiveTabList onChange={handleChange}>
              <Tab sx={{ width: '10%', margin: '1.5%', borderRadius: '5px', fontSize: '12px', typography: '', backgroundColor: 'pink', height: 15 }} label="Day 1" value="1" />
              <Tab sx={{ width: '10%', margin: '1.5%', borderRadius: '5px', fontSize: '12px', typography: '', backgroundColor: 'pink', height: 15 }} label="Day 2" value="2" />
              <Tab sx={{ width: '10%', margin: '1.5%', borderRadius: '5px', fontSize: '12px', typography: '', backgroundColor: 'pink', height: 15 }} label="Day 3" value="3" />
            </ResponsiveTabList>
          </Box>
          <TabPanel value="1"><Schedule1 /></TabPanel>
          <TabPanel value="2"><Schedule2 /></TabPanel>
          <TabPanel value="3"><Schedule3 /></TabPanel>
        </TabContext>
      </Box>
    </Container>
  );
}
