import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";

const TopBar = () => {
  //#298ACB,#E40236
  return (<>

    <AppBar
      position="fixed"
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1, // Sidebar'ın üstünde olsun
        backgroundColor: "#E40236",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "flex-end" }}>
        <Typography variant="h5" >
         Cihad Hocanın Seçimi
        </Typography>
      </Toolbar>
    </AppBar>

  </>)
}
export default TopBar;