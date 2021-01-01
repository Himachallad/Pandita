import * as React from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { IconButton, Menu, MenuItem } from "@material-ui/core";
import AccountIcon from "../../../../icons/accountIcon";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dropdown: {
      "margin-top": "30px",
    },
  })
);

export const AccountProfile = (props: any): JSX.Element => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const getMenuItems = (): JSX.Element[] => {
    let menuItems = [];
    menuItems.push(
      <MenuItem key="profile" onClick={handleClose}>
        Profile
      </MenuItem>
    );
    menuItems.push(
      <MenuItem key="logout" onClick={handleClose}>
        Logout
      </MenuItem>
    );

    return menuItems;
  };

  const accountOptions = (): JSX.Element => {
    const classes = useStyles();
    const menuItems = (
      <Menu
        id="account-options"
        className={classes.dropdown}
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {getMenuItems()}
      </Menu>
    );
    return <div>{menuItems}</div>;
  };

  return (
    <>
      <div onClick={handleClick}>
        <IconButton aria-label="Account Options" color="inherit">
          <AccountIcon fill={props.fill} />
        </IconButton>
        {props.showName ? "Profile" : ""}
      </div>
      {accountOptions()}
    </>
  );
};
