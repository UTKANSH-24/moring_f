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

export default function VerticalTabs() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{ flexGrow: 1,width:'100%', margin: '', bgcolor: 'black', display: 'flex', height: 450 }}
        >
            <Tabs
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical tabs example"
                sx={{ borderRight: 1, borderColor: 'divider' }}
            >
                <Tab sx={{ margin: '5px', color: 'white' }} label="Dance " {...a11yProps(0)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Dramatics" {...a11yProps(1)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Music" {...a11yProps(2)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Debating" {...a11yProps(3)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Quest" {...a11yProps(4)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Rajbhasha" {...a11yProps(5)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Animation" {...a11yProps(6)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Fine arts" {...a11yProps(7)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Movies" {...a11yProps(8)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label=" Photography" {...a11yProps(9)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label=" RLC" {...a11yProps(10)} />
                {/* <Tab sx={{ margin: '5px', color: 'white' }} label="Fashion" {...a11yProps(11)} /> */}
                {/* <Tab sx={{ margin: '5px', color: 'white' }} label="Sanskriti" {...a11yProps(12)} />` */}
            </Tabs>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={0}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'> Duet Dance</h1>
                        <p className='para'>Venue:Lecture Theater</p>
                        <p className='para'>Time:02:00 PM</p>
                    </div>
                   
                </div>
            </TabPanel>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={1}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'> Rangmanch</h1>
                        <p className='para'>Venue:Central Seminar Hall</p>
                        <p className='para'>Time:10:00 AM</p>
                    </div>
                    <div> 
                    <h1 className='heads'>MIME</h1>
                        <p className='para'>Venue:Community Center</p>
                        <p className='para'>Time:04:00 PM</p>
                    </div>
                   
                </div>
            </TabPanel>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={2}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'> The Voice</h1>
                        <p className='para'>Venue:Open Air Theatre</p>
                        <p className='para'>Time:10:00 AM</p>
                    </div>
                  
                   
                </div>
            </TabPanel>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={3}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'> Debate League</h1>
                        <p className='para'>Venue:Science Block(2-3)</p>
                        <p className='para'>Time:10:00 AM</p>
                    </div>
                  
                   
                </div>
            </TabPanel>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={4}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'> Cognito</h1>
                        <p className='para'>Venue:Conference Hall(IT)</p>
                        <p className='para'>Time:10:00 AM</p>
                    </div>
                  
                   
                </div>
            </TabPanel>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={5}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'> Patrokar Babu</h1>
                        <p className='para'>Venue:Science Block</p>
                        <p className='para'>Time:10:30 AM</p>
                    </div>
                  
                   
                </div>
            </TabPanel>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={6}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'> Coscon</h1>
                        <p className='para'>Venue:MBH Ground</p>
                        <p className='para'>Time:04:00 PM</p>
                    </div>
                    <div> 
                    <h1 className='heads'> Exhibition</h1>
                        <p className='para'>Venue:Science Block Lobby</p>
                        <p className='para'>Time:All Day</p>
                    </div>
                  
                   
                </div>
            </TabPanel>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={7}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'> Relay Art Challenge</h1>
                        <p className='para'>Venue:Drawing Hall</p>
                        <p className='para'>Time:11:00 AM</p>
                    </div>
                    <div> 
                    <h1 className='heads'> Do-Art</h1>
                        <p className='para'>Venue:Drawing Hall</p>
                        <p className='para'>Time:01:30 PM</p>
                    </div>
                    <div> 
                    <h1 className='heads'>Cineart Odyssey</h1>
                        <p className='para'>Venue:Drawing Hall</p>
                        <p className='para'>Time:04:00 PM</p>
                    </div>
                    <div> 
                    <h1 className='heads'>Art Exhibition</h1>
                        <p className='para'>Venue:IT Building</p>
                        <p className='para'>Time:All Day</p>
                    </div>
                  
                   
                </div>
            </TabPanel>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={8}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'> Creative Chaos</h1>
                        <p className='para'>Venue:LT/IT Building</p>
                        <p className='para'>Time:10:00 AM</p>
                    </div>
                
                </div>
            </TabPanel>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={9}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'> Drishya</h1>
                        <p className='para'>Venue:IT Building</p>
                        <p className='para'>Time:09:00 AM</p>
                    </div>
                
                </div>
            </TabPanel>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={10}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'>Mushaira</h1>
                        <p className='para'>Venue:Open Air Theater</p>
                        <p className='para'>Time:04:00 PM</p>
                    </div>
                
                </div>
            </TabPanel>
            {/* Include other TabPanel components with their respective background images */}
        </Box>
    );
}
