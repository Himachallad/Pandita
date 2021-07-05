import React, { useContext, useRef, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Menu, MenuItem, FormHelperText } from "@material-ui/core";
import { SearchField } from "./GlobalSearch";
import MenuIcon from "../../../icons/menuIcon";
import { AccountProfile } from "./AccountProfile";
import { Notification } from "./Notification";
import MoreIcon from "../../../icons/moreIcon";
import SideNavBar from "./SideNavBar";
import BrightnessMediumIcon from "../../../icons/ThemeIcon";
import { ThemeContext } from "../../../theme";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    menu: {
      cursor: "pointer",
      marginRight: theme.spacing(2),
    },
    sectionDesktop: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "flex",
        "flex-direction": "row",
        "align-items": "center",
      },
    },
    mobileView: {
      display: "none",
      [theme.breakpoints.down("xs")]: {
        display: "flex",
      },
    },
    dropdown: {
      "margin-top": "30px",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    }
  })
);

interface SideBarRef {
  openSideBar: (val: boolean) => void;
}

export default function NavigationBar(props: any): JSX.Element {
  const classes = useStyles();
  const themeObj = useContext(ThemeContext);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const sideBarref = useRef<SideBarRef>();

  const mobileOptions = (): JSX.Element[] => {
    const menuOptions: JSX.Element[] = [];
    menuOptions.push(
      <MenuItem key="theme_menu_item" onClick={changeTheme}>
        <IconButton>
          <BrightnessMediumIcon fill="#2196f3" />
        </IconButton>
        Theme
      </MenuItem>
    );
    menuOptions.push(
      <MenuItem key="notification_menu_item">
        <Notification fill="#2196f3" showName />
      </MenuItem>
    );
    menuOptions.push(
      <MenuItem key="profile_menu_item">
        <AccountProfile fill="#2196f3" showName />
      </MenuItem>
    );

    return menuOptions;
  };

  const toggleSideNav = () => {
    if (sideBarref.current) {
      sideBarref.current.openSideBar(true);
    }
  };

  const changeTheme = () => {
    const newTheme = themeObj.themeValue === "light" ? "dark" : "light";
    themeObj.changeTheme(newTheme);
  };;

  return (
    <>
      <div className={classes.grow}>
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            {/* <IconButton
              edge="start"
              className={classes.menu}
              color="inherit"
              aria-label="menu"
              onClick={toggleSideNav}
            >
              <MenuIcon fill="white" />
            </IconButton> */}
            <SearchField
              placeholder="Search"
              width={300}
              background="#FFFFFF"
              expandOnClick={true}
            />
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              <IconButton onClick={changeTheme}>
                <BrightnessMediumIcon fill="white" />
              </IconButton>
              <Notification fill="white" />
              <AccountProfile fill="white" />
            </div>
            <div className={classes.mobileView}>
              <IconButton onClick={handleClick}>
                <MoreIcon fill="white" />
              </IconButton>
              <Menu
                id="account-options"
                className={classes.dropdown}
                anchorEl={anchorEl}
                keepMounted
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                {mobileOptions()}
              </Menu>
            </div>
          </Toolbar>
        </AppBar>
        {/* <SideNavBar ref={sideBarref} openit={false} /> */}
        <div>{props && props.children}</div>
      </div>
    </>
  );
}
