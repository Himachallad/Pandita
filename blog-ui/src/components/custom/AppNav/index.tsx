import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { AppBar, Toolbar, IconButton, Menu, MenuItem } from "@material-ui/core";
import { SearchField } from "./GlobalSearch";
import MenuIcon from "../../../icons/menuIcon";
import { AccountProfile } from "./AccountProfile";
import { Notification } from "./Notification";
import MoreIcon from "../../../icons/moreIcon";

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
  })
);

export default function NavigationBar(): JSX.Element {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const mobileOptions = (): JSX.Element[] => {
    const menuOptions: JSX.Element[] = [];
    menuOptions.push(
      <MenuItem>
        <Notification fill="#2196f3" showName />
      </MenuItem>
    );
    menuOptions.push(
      <MenuItem>
        <AccountProfile fill="#2196f3" showName />
      </MenuItem>
    );

    return menuOptions;
  };

  return (
    <div className={classes.grow}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menu}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon fill="white" />
          </IconButton>
          <SearchField
            placeholder="Search"
            width={300}
            background="#FFFFFF"
            expandOnClick={true}
          />
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
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
    </div>
  );
}
