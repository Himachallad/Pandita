import * as React from "react";
import { Badge, IconButton } from "@material-ui/core";
import NotificationIcon from "../../../../icons/notificationIcon";

export const Notification = (props: any) => {
  return (
    <>
      <IconButton aria-label="show 6 new notifications" color="inherit">
        <Badge badgeContent={6} color="error">
          <NotificationIcon fill={props.fill} />
        </Badge>
      </IconButton>
      {props.showName ? "Notifications" : ""}
    </>
  );
};
