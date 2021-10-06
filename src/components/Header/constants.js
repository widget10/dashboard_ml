import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AssignmentIcon from "@mui/icons-material/Assignment";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import DescriptionIcon from "@mui/icons-material/Description";
import ReceiptIcon from "@mui/icons-material/Receipt";
import SettingsIcon from "@mui/icons-material/Settings";
const NavigationData = [
  {
    value: "/",
    icon: <PersonOutlineIcon />,
    active: true,
    label: "Dashboard",
  },
  {
    value: "/",
    icon: <ContactSupportIcon />,
    active: false,
    label: "HelpDesk",
  },
  {
    value: "/",
    icon: <ListAltIcon />,
    active: false,
    label: "My Tasks",
  },
  {
    value: "/",
    icon: <AssignmentIcon />,
    active: false,
    label: "Projects",
  },
  {
    value: "/",
    icon: <PeopleOutlineIcon />,
    active: false,
    label: "Clients",
  },
  {
    value: "/",
    icon: <DescriptionIcon />,
    active: false,
    label: "Invoice",
  },
  {
    value: "/",
    icon: <ReceiptIcon />,
    active: false,
    label: "Reports",
  },
  {
    value: "/",
    icon: <SettingsIcon />,
    active: false,
    label: "Settings",
  },
];
export default NavigationData;
