import Link from "next/link";
import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { TDrawerItem } from "@/types/common";
import { usePathname } from "next/navigation";

type TSidebarItemsProps = {
  item: TDrawerItem;
};

const SidebarItems = ({ item }: TSidebarItemsProps) => {
  const linkPath = `/dashboard/${item.path}`;
  const pathname = usePathname();
  return (
    <Link href={linkPath}>
      <ListItem
        disablePadding
        sx={{
          ...(pathname === linkPath
            ? {
                borderBottom: "1px solid #5BE1E6",
                "& svg": {
                  color: "#5BE1E6",
                },
              }
            : {}),
          mb: 1,
        }}
      >
        <ListItemButton>
          <ListItemIcon>{item?.icon && <item.icon />}</ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  );
};

export default SidebarItems;
