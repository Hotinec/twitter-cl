import { Button, Hidden, IconButton, Typography } from "@material-ui/core";
import React, { useState } from "react";
import { useHomeStyles } from "../../pages/home/theme";
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationsIcon from '@material-ui/icons/Notifications';
import EmailOutlined from '@material-ui/icons/EmailOutlined';
import CreateIcon from '@material-ui/icons/Create';
import {
  BookmarkBorderOutlined,
  ListAltOutlined,
  PermIdentityOutlined,
} from '@material-ui/icons';
import { ModalDialog } from "../modal-dialog/Dialog";
import { AddTweetForm } from "../add-tweet-form/AddTweetForm";
import { Link } from "react-router-dom";

interface SideMenuProps {
  classes: ReturnType<typeof useHomeStyles>;
}

export const Sidebar: React.FC<SideMenuProps> = ({ classes }: SideMenuProps): React.ReactElement => {
  const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false)
  
  const handleClickOpenAddTweet = (): void => {
    setVisibleAddTweet(true);
  }

  const onCloseAddTweet = (): void => {
    setVisibleAddTweet(false);
  };

  return (
    <ul className={classes.sideMenuList}>
      <li className={classes.sideMenuListItem}>
        <Link to="/home">
          <IconButton className={classes.logo} aria-label="" color="primary">
            <TwitterIcon className={classes.logoIcon} />
          </IconButton>
        </Link>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <SearchIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Search
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <NotificationsIcon className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Notifications
            </Typography> 
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <EmailOutlined className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Messages
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <BookmarkBorderOutlined className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Bookmarks
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <ListAltOutlined className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              List
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <div>
          <PermIdentityOutlined className={classes.sideMenuListItemIcon} />
          <Hidden smDown>
            <Typography className={classes.sideMenuListItemLabel} variant="h6">
              Profile
            </Typography>
          </Hidden>
        </div>
      </li>
      <li className={classes.sideMenuListItem}>
        <Button
          onClick={handleClickOpenAddTweet}
          className={classes.sideMenuTweetButton}
          variant="contained" 
          color="primary" 
          fullWidth
        >
          <Hidden smDown>Tweet</Hidden>
          <Hidden mdUp>
            <CreateIcon />
          </Hidden>
      </Button>
      <ModalDialog onClose={onCloseAddTweet} open={visibleAddTweet}>
        <div style={{ width: 550 }}>
          <AddTweetForm maxRows={15} classes={classes} />
        </div>
      </ModalDialog>
      </li>
    </ul>
  );
};
