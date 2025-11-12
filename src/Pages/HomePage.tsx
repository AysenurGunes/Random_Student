import { Box, Button, Card, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { Class } from "@mui/icons-material";
import Sidebar from "../Layout/Sidebar";
import TopBar from "../Layout/TopBar";
import ClassPage from "./ClassPage";

const HomePage = () => {
    const [open, setOpen] = useState(false);
    const [classKey, setClassKey] = useState<string>("1b");

    const toggleDrawer = (newOpen: boolean) => () => {
        setOpen(newOpen);
    };

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <TopBar />
                <Sidebar setClassKey={setClassKey} />
                <Box component="main" sx={{ flexGrow: 1, p: 3, ml: "240px" }}>
                    <Toolbar />
                    <Box
                        sx={{
                            boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "flex-end",
                            mb: 2,
                        }}
                    >

                        <Button size="small"
                            sx={{
                                minWidth: 60,
                                padding: "5",
                                height: 50,
                            }}
                            variant="contained"
                            style={{ backgroundColor: "#298ACB" }}>
                            Kişi Listesi Güncelle
                        </Button>
                    </Box>
                    <ClassPage classKey={classKey} />
                </Box>
            </Box>

        </>
    );
}
export default HomePage;