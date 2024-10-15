import {
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import ListItemButton from "@mui/material/ListItemButton";
import HomeIcon from "@mui/icons-material/Home";
import Brightness3Icon from "@mui/icons-material/Brightness3";
import LightModeIcon from "@mui/icons-material/LightMode";
import SportsMartialArtsTwoToneIcon from "@mui/icons-material/SportsMartialArtsTwoTone";
import AirTwoToneIcon from "@mui/icons-material/AirTwoTone";
import FilterHdrTwoToneIcon from "@mui/icons-material/FilterHdrTwoTone";
import AutoModeTwoToneIcon from "@mui/icons-material/AutoModeTwoTone";
import HourglassTopTwoToneIcon from "@mui/icons-material/HourglassTopTwoTone";
import UTurnLeftTwoToneIcon from "@mui/icons-material/UTurnLeftTwoTone";
import VerifiedTwoToneIcon from "@mui/icons-material/VerifiedTwoTone";
import FamilyRestroomTwoToneIcon from "@mui/icons-material/FamilyRestroomTwoTone";
import ReduceCapacityTwoToneIcon from "@mui/icons-material/ReduceCapacityTwoTone";
import AssuredWorkloadTwoToneIcon from "@mui/icons-material/AssuredWorkloadTwoTone";
import PhoneCallbackTwoToneIcon from "@mui/icons-material/PhoneCallbackTwoTone";
import QrCodeIcon from "@mui/icons-material/QrCode";
import StorageIcon from "@mui/icons-material/Storage";
import GridOffIcon from "@mui/icons-material/GridOff";
import SchemaIcon from "@mui/icons-material/Schema";
import PetsIcon from "@mui/icons-material/Pets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { changeTheme } from "../store/store.tsx";
import TypeSpecimenIcon from "@mui/icons-material/TypeSpecimen";
import PhishingIcon from "@mui/icons-material/Phishing";
import AutoAwesomeMotionIcon from "@mui/icons-material/AutoAwesomeMotion";
import PsychologyIcon from "@mui/icons-material/Psychology";
import WebhookIcon from "@mui/icons-material/Webhook";
import RouterIcon from '@mui/icons-material/Router';

export const menuitems = [
  {
    text: "aboutMe",
    icon: <SportsMartialArtsTwoToneIcon />,
    path: "/aboutMe",
  },
  {
    text: "useState",
    icon: <AirTwoToneIcon />,
    path: "/useState",
  },
  {
    text: "useRef",
    icon: <AutoModeTwoToneIcon />,
    path: "/useRef",
  },
  {
    text: "useEffect",
    icon: <FilterHdrTwoToneIcon />,
    path: "/useEffect",
  },
  {
    text: "customHooks",
    icon: <PhishingIcon />,
    path: "/customHooks",
  },

  {
    text: "UseImperativeHandle",
    icon: <HourglassTopTwoToneIcon />,
    path: "/UseImperativeHandle",
  },
  {
    text: "nested",
    icon: <UTurnLeftTwoToneIcon />,
    path: "/nested",
  },
  {
    text: "Parent - Props",
    icon: <VerifiedTwoToneIcon />,
    path: "/parentProps",
  },
  {
    text: "passingDataFromChildToparent",
    icon: <FamilyRestroomTwoToneIcon />,
    path: "/passingDataFromChildToparent",
  },
  {
    text: "useReducer",
    icon: <ReduceCapacityTwoToneIcon />,
    path: "/useReducer",
  },
  {
    text: "useContext",
    icon: <AssuredWorkloadTwoToneIcon />,
    path: "/useContext",
  },
  {
    text: "useCallback",
    icon: <PhoneCallbackTwoToneIcon />,
    path: "/useCallback",
  },
  {
    text: "Material - UI",
    icon: <QrCodeIcon />,
    path: "/material",
  },
  {
    text: "useMemo",
    icon: <StorageIcon />,
    path: "/useMemo",
  },
  {
    text: "useLayoutEffect",
    icon: <GridOffIcon />,
    path: "/useLayoutEffect",
  },
  {
    text: "tan-stack / React-query",
    icon: <SchemaIcon />,
    path: "/reactQuery",
  },
  {
    text: "zustand state management",
    icon: <PetsIcon />,
    path: "/zustand",
  },
  {
    text: "Typescript",
    icon: <TypeSpecimenIcon />,
    path: "/typescript",
  },
  {
    text: "FramerMotion",
    icon: <AutoAwesomeMotionIcon />,
    path: "/framerMotion",
  },
  // {
  //   text: "Custom Element",
  //   icon: <PsychologyIcon />,
  //   path: "/customElement",
  // },
  {
    text: "FAKE - API",
    icon: <WebhookIcon />,
    path: "/api",
  },
  {
    text: "useRouter/useLocation",
    icon: <RouterIcon />,
    path: "/useRouter",
  },
  {
    text: "Simple Application",
    icon: <RouterIcon />,
    path: "/crud",
  },

];

function Sidebar({ mode, setMode }, props) {
  const { dark, darkTheme } = changeTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const newStyle = {
    background: dark ? "#1976d2" : "black",
    color: dark ? "white" : "white",
    cursor: "pointer",
    borderRadius: "5px",
  };
  return (
    <Box flex={1} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position={"fixed"}>
        {menuitems?.map((item, index) => (
          <Box key={item.text}>
            <Box
              // disablePadding
              onClick={() => navigate(item.path)}
              style={location.pathname === item.path ? newStyle : {}}
              sx={{
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                margin: "5px 0",
              }}
            >
              <Box sx={{ color: dark ? "" : "white" }}>{item.icon}</Box>
              <ListItemText primary={item.text} />
            </Box>
            {/* <ListItem disablePadding>
              <ListItemButton component="a" href="#home">
                <ListItemIcon sx={{ display: "flex", alignItems: "center" }}>
                  {mode === "light" ? <LightModeIcon /> : <Brightness3Icon />}
                  <Switch
                    onChange={() =>
                      setMode(mode === "light" ? "dark" : "light")
                    }
                  />
                </ListItemIcon>
              </ListItemButton>
            </ListItem> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
}

export default Sidebar;
