import MenuBookIcon from "@mui/icons-material/MenuBook";
import { AppBar, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
        <Toolbar>
          <Typography>
            <MenuBookIcon></MenuBookIcon>
          </Typography>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="secondary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="ADD PRODUCT"></Tab>
            <Tab LinkComponent={NavLink} to="about" label="ABOUT US"></Tab>
            <Tab LinkComponent={NavLink} to="/books" label="BOOKS"></Tab>
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
