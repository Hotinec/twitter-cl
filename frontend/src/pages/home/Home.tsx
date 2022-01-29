import React, { useEffect } from 'react'
import { 
  Container, 
  Grid,  
  Paper, 
  Typography, 
  Button,
  Avatar,
  InputAdornment,
  List,
  ListItem,
  ListItemText,
  Divider,
  ListItemAvatar,
} from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import { Tweet } from '../../components/tweet/Tweet';
import { Sidebar } from '../../components/sidebar/Sidebar';
import { AddTweetForm } from '../../components/add-tweet-form/AddTweetForm';
import { useHomeStyles } from './theme';
import { SearchTextField } from './SearchTextField';
import { useDispatch, useSelector } from 'react-redux';
import { fetchTweets } from '../../store/ducks/tweets/actionCreators';
import { selectIsTweetsLoading, selectTweetsItems } from '../../store/ducks/tweets/selectors';
import CircularProgress from '@material-ui/core/CircularProgress';
import { fetchTags } from '../../store/ducks/tags/actionCreators';
import { Tags } from '../../components/tags/Tags';
import { Route } from 'react-router-dom';

export const Home = (): React.ReactElement => {
  const classes = useHomeStyles();
  const dispatch = useDispatch();
  const tweets = useSelector(selectTweetsItems);
  const isLoading = useSelector(selectIsTweetsLoading);

  useEffect(() => {
    dispatch(fetchTweets());
    dispatch(fetchTags())
  }, [dispatch]);

  return (
    <Container className={classes.wrapper} maxWidth="lg">
      <Grid container spacing={3}>
        <Grid sm={1} md={3} item>
          <Sidebar classes={classes} />
        </Grid>
        <Grid item sm={8} md={6}>
          <Paper className={classes.tweetsWrapper} variant="outlined">
            <Paper className={classes.tweetsHeader} variant="outlined" square>
              <Typography variant="h6">Main</Typography>
            </Paper>
            <Route path="/home">
              <Paper>
                <div className={classes.addForm}>
                  <AddTweetForm classes={classes} />
                </div>
                <div className={classes.addFormBottomLine} />
              </Paper>
            </Route>
            <Route path="/home" exact>
              {isLoading ? (
                <div className={classes.tweetsCentered}>
                  <CircularProgress />
                </div>) : (tweets?.map((tweet) => (
                <Tweet
                  key={`${tweet._id}${tweet.user}`}
                  classes={classes}
                  {...tweet}
                />
              )))}
            </Route>
          </Paper>
        </Grid>
        <Grid sm={3} md={3} item>
          <div className={classes.rightSide}>
            <SearchTextField 
              variant="outlined"
              placeholder="Twitter search"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchOutlinedIcon />
                  </InputAdornment>
                )
              }}
              fullWidth
            />
            <Tags classes={classes} />
            <Paper className={classes.rightSideBlock}>
              <Paper className={classes.rightSIdeBlockHeader} variant="outlined">
                <b>Whom to read</b>
              </Paper>
              <List>
                <ListItem className={classes.rightSideBlockItem}>
                  <ListItemAvatar>
                    <Avatar
                      alt="Remy Sharp"
                      src="https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=671&q=80"
                    />
                  </ListItemAvatar>
                  <ListItemText 
                    primary="Dock of Shame"
                    secondary={
                      <Typography component="span" variant="body2">
                        @FavDockOfShame
                      </Typography>
                    }
                  />
                  <Button color="primary">
                    <PersonAddIcon />
                  </Button>
                </ListItem>
                <Divider component="li" />
              </List>
            </Paper>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};
