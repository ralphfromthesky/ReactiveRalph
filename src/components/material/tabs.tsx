import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Post from '../post';
import ZustandChild1 from '../../views/zustandChild1.tsx';
import TextFiedlGlobal from './textField.jsx';
import ReactQuery from '../../views/reactQuery.jsx';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
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

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{
            '.css-1aquho2-MuiTabs-indicator': {
                color: 'red',
                backgroundColor: 'red'
            }
          }}>
          <Tab label="Item One" {...a11yProps(0)} sx={{
            '.css-1aquho2-MuiTabs-indicator': {
                color: 'red',
                backgroundColor: 'red'
            }
          }}/>
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
          <Tab label="Item Three" {...a11yProps(3)} />
          <Tab label="Item four" {...a11yProps(4)} />
          <Tab label="Item ralph" {...a11yProps(5)} />
          <Tab label="Item anop?" {...a11yProps(6)} />


        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <h1 style={{color: 'red'}}>
        Item One
        </h1>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <ZustandChild1/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Post/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <TextFiedlGlobal/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
      <img src="image/cas.png" alt="" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        <img src="image/girl.jpg" alt="" />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
      
      </CustomTabPanel>

    </Box>
  );
}
