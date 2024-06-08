import GroupIcon from "@mui/icons-material/Group";
import PersonIcon from "@mui/icons-material/Person";
import KeyIcon from "@mui/icons-material/Key";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AddHomeWorkIcon from "@mui/icons-material/AddHomeWork";
import ListAltIcon from "@mui/icons-material/ListAlt";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";

export const drawerItems = (role: string) => {
  const menuItems = [
    {
      title: "My Profile",
      path: `my-profile`,
      icon: PersonIcon,
    },
    {
      title: "Share a Flat",
      path: `share-flat`,
      icon: AddHomeWorkIcon,
    },
    {
      title: "My Flat Posts",
      path: `my-flats`,
      icon: ApartmentIcon,
    },
    {
      title: "My Flat Requests",
      path: `my-flat-requests`,
      icon: ListAltIcon,
    },
    {
      title: "Change Password",
      path: `change-password`,
      icon: KeyIcon,
    },
  ];

  switch (role) {
    case "admin":
      menuItems.unshift(
        {
          title: "Manage Users",
          path: `manage-users`,
          icon: GroupIcon,
        },
        {
          title: "Manage Flats",
          path: `manage-flats`,
          icon: ApartmentIcon,
        },
        {
          title: "Manage Flat Requests",
          path: `manage-booking-requests`,
          icon: ApartmentIcon,
        }
      );
      break;

    default:
      break;
  }

  return menuItems;
};
