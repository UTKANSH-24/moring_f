import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import './schedule.css'

function TabPanel(props) {
    const { children, value, index, background, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            style={{
                width: '100%',
                backgroundImage: `url(${background})`,
                backgroundSize: '100% 100%', // Stretch the background image
                backgroundPosition: 'center',
                minHeight: '200px', // Adjust as needed
            }}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
    background: PropTypes.string, // New prop for background image URL
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function VerticalTabs2() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1, width: '100%', margin: 'auto', bgcolor: 'black', display: 'flex', height: 450 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab sx={{ margin: '5px', color: 'white' }} label="Dance Club" {...a11yProps(0)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Dramatics" {...a11yProps(1)} />
                {/* <Tab sx={{ margin: '5px', color: 'white' }} label="Music" {...a11yProps(2)} /> */}
                <Tab sx={{ margin: '5px', color: 'white' }} label="LADC" {...a11yProps(3)} />
                {/* <Tab sx={{ margin: '5px', color: 'white' }} label="Quest" {...a11yProps(4)} /> */}
                <Tab sx={{ margin: '5px', color: 'white' }} label="Rajbhasha" {...a11yProps(5)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Animation" {...a11yProps(6)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Fine Arts" {...a11yProps(7)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="movies" {...a11yProps(8)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Photography" {...a11yProps(9)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="RLC" {...a11yProps(10)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Fashion" {...a11yProps(11)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Sanskriti" {...a11yProps(12)} />
            </Tabs>
            <TabPanel value={value} index={0} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>

                <div> 
                    <h1 className='heads'>BEAT THE STREET</h1>
                        <p className='para'>Venue:NIGHT CANTEEN </p>
                        <p className='para'>Time:02:00 PM</p>

                    </div>
                <div> 
                    <h1 className='heads'>BHANGRA FIESTA</h1>
                        <p className='para'>Venue:CENTRAL SEMINAR HALL </p>
                        <p className='para'>Time:01:00 PM</p>

                    </div>
                    
                </div>
            </TabPanel>
            <TabPanel value={value} index={1} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>
                <div> 
                    <h1 className='heads'>HALLA BOL</h1>
                        <p className='para'>Venue:CENTRAL LAWN </p>
                        <p className='para'>Time:10:00 AM</p>

                    </div>
                <div> 
                    <h1 className='heads'>IMPROV</h1>
                        <p className='para'>Venue:CENTRAL LAWN </p>
                        <p className='para'>Time:03:00 PM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={3} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>
                <div> 
                    <h1 className='heads'>DEBATE LEAGUE</h1>
                        <p className='para'>Venue:SCIENCE BLOCK-2 </p>
                        <p className='para'>Time:10:00 AM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={5} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>
                <div> 
                    <h1 className='heads'>PRAGYANSH</h1>
                        <p className='para'>Venue:SCIENCE BLOCK-2 </p>
                        <p className='para'>Time:02:00 PM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={6} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>
                <div> 
                    <h1 className='heads'>COSCON</h1>
                        <p className='para'>Venue:MBH-GROUND </p>
                        <p className='para'>Time:04:00 PM</p>

                    </div>
                <div> 
                    <h1 className='heads'>EXHIBITION</h1>
                        <p className='para'>Venue:SB-LOBBY </p>
                        <p className='para'>Time:ALL DAY</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={7} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>
                <div> 
                    <h1 className='heads'>PEBBLE PAINTING EXTRAVAGANZA</h1>
                        <p className='para'>Venue:PEBBLE PAINTING EXTRAVAGANZA </p>
                        <p className='para'>Time:10:00 AM</p>

                    </div>
                    <div> 
                    <h1 className='heads'>10 MINUTE CHALLENGE</h1>
                        <p className='para'>Venue: DRAWING HALL </p>
                        <p className='para'>Time:11:30 AM</p>

                    </div>
                <div> 
                    <h1 className='heads'>ART BEYOND SIGHT</h1>
                        <p className='para'>Venue: DRAWING HALL </p>
                        <p className='para'>Time:02:00 PM</p>

                    </div>
                
                <div> 
                    <h1 className='heads'>ART EXHIBITION</h1>
                        <p className='para'>Venue:IT BUILDING </p>
                        <p className='para'>Time:ALL DAY</p>

                    </div>
                

                </div>
            </TabPanel>
            <TabPanel value={value} index={8} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>
                <div> 
                    <h1 className='heads'>MAD-ADS</h1>
                        <p className='para'>Venue: LT/IT BUILDING </p>
                        <p className='para'>Time:10:00 AM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={9} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>
                <div> 
                    <h1 className='heads'>DRISHYA</h1>
                        <p className='para'>Venue:IT BUILDING </p>
                        <p className='para'>Time:09:00 AM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={10} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>
                <div> 
                    <h1 className='heads'>FOLK SINGING</h1>
                        <p className='para'>Venue:CENTRAL SEMINAR HALL </p>
                        <p className='para'>Time:11:00 AM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={11} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>
                <div> 
                    <h1 className='heads'>PANACHE</h1>
                        <p className='para'>Venue:--- </p>
                        <p className='para'>Time:--- AM</p>

                    </div>

                </div>
            </TabPanel>
            <TabPanel value={value} index={12} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>
                <div> 
                    <h1 className='heads'>CULTURAL EXHIBITION</h1>
                        <p className='para'>Venue:CENTRAL LAWN / NIGHT CANTEEN</p>
                        <p className='para'>Time:02:00 PM</p>

                    </div>

                </div>
            </TabPanel>
            {/* Include other TabPanel components with their respective background images */}
        </Box>
    );
}
