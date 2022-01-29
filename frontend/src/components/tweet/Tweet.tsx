import React from "react";
import { Avatar, IconButton, Paper, Typography } from "@material-ui/core";
import classNames from "classnames";
import {
  ChatBubbleOutline,
  FavoriteBorder,
  RepeatOutlined,
  ShareOutlined,
} from "@material-ui/icons";
import { useHomeStyles } from "../../pages/home/theme";
import { Link, Route } from "react-router-dom";

interface TweetProps {
  _id: string;
  text: string;
  classes: ReturnType<typeof useHomeStyles>;
  user: {
    fullname: string;
    username: string;
    avatarUrl: string;
  };
}

export const Tweet: React.FC<TweetProps> = ({
  _id,
  text,
  user,
  classes,
}: TweetProps): React.ReactElement => {

  return (
    <Paper
      className={classNames(classes.tweet, classes.tweetsHeader)}
      variant="outlined"
      square
    >
      <Link to={`/home/tweet/${_id}`}>
        <Avatar
          className={classes.tweetAvatar}
          alt={`User Avatar ${user.username}`}
          src={user.avatarUrl}
        />
        <div>
          <Typography>
            <b>{user.username}</b>
            <span className={classes.tweetUserName}>@{user.fullname}</span>&nbsp;
            <span className={classes.tweetUserName}>.</span>&nbsp;
            <span className={classes.tweetUserName}>1h</span>&nbsp;
          </Typography>
          <Typography variant="body1" gutterBottom>
            {text}
          </Typography>
          <div className={classes.tweetFooter}>
            <div>
              <IconButton aria-label="delete">
                <ChatBubbleOutline style={{ fontSize: 20 }} />
              </IconButton>
              <span>1</span>
            </div>
            <div>
              <IconButton aria-label="delete">
                <RepeatOutlined style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton aria-label="delete">
                <FavoriteBorder style={{ fontSize: 20 }} />
              </IconButton>
            </div>
            <div>
              <IconButton aria-label="delete">
                <ShareOutlined style={{ fontSize: 20 }} />
              </IconButton>
            </div>
          </div>
        </div>
      </Link>
    </Paper>
  );
};
