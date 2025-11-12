import { Class } from "@mui/icons-material";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import React from "react";

type Props =
    {
        setClassKey: React.Dispatch<React.SetStateAction<string>>;
    }
const Sidebar = (prop: Props) => {
    return (<>

        <Drawer
            variant="permanent"
            sx={{
                //width: 240,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', background: "#298ACB" },

            }}
        > <Toolbar />
            <Box sx={{
                //  width: 250
            }}
                role="presentation"
            >
                <Divider />
                <Typography sx={{ display: "flex", justifyContent: "center", fontSize: "1.5rem", padding: "15px", color: "white" }}>Sınıf Seç</Typography>
                <Divider />
                <List >
                    {["1-B", "2-A", "3-C"].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ color: "white" }}>
                            <ListItemButton onClick={() => prop.setClassKey(text.replace("-", "").toLowerCase())}>
                                <ListItemIcon sx={{ color: "white" }}>
                                    <Class />
                                </ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Box>
        </Drawer>

    </>);
}
export default Sidebar;