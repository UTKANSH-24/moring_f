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
                <Tab sx={{ margin: '5px', color: 'white' }} label="Dance Club" {...a11yProps(0)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Item Two" {...a11yProps(1)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Item Three" {...a11yProps(2)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Item Four" {...a11yProps(3)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Item Five" {...a11yProps(4)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Item Six" {...a11yProps(5)} />
                <Tab sx={{ margin: '5px', color: 'white' }} label="Item Seven" {...a11yProps(6)} />
            </Tabs>
            <TabPanel  sx={{ blur:'10%' }}value={value} index={0}background="https://images.unsplash.com/photo-1508197149814-0cc02e8b7f74?q=80&w=1995&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D">
                <div className='each'>

                    <div> 
                    <h1 className='heads'> Duet Dance</h1>
                        <p className='para'>Venue:Lecture Theater</p>
                        <p className='para'>Time:02:00 PM</p>
                    </div>
                    <div> 
                    <h1 className='heads'> Duet Dance</h1>
                        <p className='para'>Venue:Lecture Theater</p>
                        <p className='para'>Time:02:00 PM</p>
                    </div>
                    <div> 
                    <h1 className='heads'> Duet Dance</h1>
                        <p className='para'>Venue:Lecture Theater</p>
                        <p className='para'>Time:02:00 PM</p>
                    </div>
                    <div> 
                    <h1 className='heads'> Duet Dance</h1>
                        <p className='para'>Venue:Lecture Theater</p>
                        <p className='para'>Time:02:00 PM</p>
                    </div>
                    <div> 
                    <h1 className='heads'> Duet Dance</h1>
                        <p className='para'>Venue:Lecture Theater</p>
                        <p className='para'>Time:02:00 PM</p>
                    </div>
                    <div> 
                    <h1 className='heads'> Duet Dance</h1>
                        <p className='para'>Venue:Lecture Theater</p>
                        <p className='para'>Time:02:00 PM</p>
                    </div>
                    <div> 
                    <h1 className='heads'> Duet Dance</h1>
                        <p className='para'>Venue:Lecture Theater</p>
                        <p className='para'>Time:02:00 PM</p>
                    </div>
                    <div> 
                    <h1 className='heads'> Duet Dance</h1>
                        <p className='para'>Venue:Lecture Theater</p>
                        <p className='para'>Time:02:00 PM</p>
                    </div>
                    <div> 
                    <h1 className='heads'> Duet Dance</h1>
                        <p className='para'>Venue:Lecture Theater</p>
                        <p className='para'>Time:02:00 PM</p>
                    </div>
                </div>
            </TabPanel>
            <TabPanel value={value} index={1} background="https://unsplash.it/1920/500?image=11">
                <div className='each'>

                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>3</div>
                    <div>1</div>
                    
                    <div>1</div>
                    <div>2</div>
                    <div>3</div>
                    <div>3</div>
                </div>
            </TabPanel>
            {/* Include other TabPanel components with their respective background images */}
        </Box>
    );
}
