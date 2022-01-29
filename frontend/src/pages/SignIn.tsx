import React, { useState } from 'react';
import { Button, FormControl, FormGroup, makeStyles, TextField, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import { ModalDialog } from '../components/modal-dialog/Dialog';

export const useStylesSignIn = makeStyles((theme) => ({
  wrapper: {
    display: 'flex',
    height: '100vh',
  },
  blueSide: {
    position: 'relative',
    backgroundColor: '#71C9F8',
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 380,
    overflow: 'hidden',
    '& h6': {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      fontWeight: 700,
      fontSize: 20,
    }
  },
  blueSideBigIcon: {
    position: 'absolute',
    left: '50%',
    top: '53%',
    transform: 'translate(-50%, -50%)',
    width: '2600%',
    height: '260%',  
  },
  blusideListInfo: {
    position: 'relative',
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  blusideListInfoIcon: {
    fontSize: 32,
    marginRight: 15,
  },
  blusideListInfoItem: {
    marginBottom: 40,
  },
  loginSide: {
    flex: '0 0 50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  loginSideTwitterIcon: {
    fontSize: 45,
  },
  loginSideWrapper: {
    width: 380,
  },
  loginSideTitle: {
    fontWeight: 700,
    fontSize: 32,
    marginBottom: 45,
    marginTop: 20,
  },
  loginSideField: {
    marginBottom: 18,
  },
  registerField: {
    marginBottom: theme.spacing(5),
  },
  loginFormControl: {
    marginBottom: theme.spacing(2),
  }
}));

export const SignIn = () => {
  const classes = useStylesSignIn()

  const [openModal, setOpenModal] = useState<'signIn' | 'signUp'>()

  const handleClickOpenSignIn = (): void => {
    setOpenModal('signIn');
  };

  const handleClickOpenSignUp = (): void => {
    setOpenModal('signUp');
  };

  const handleCloseModal = (): void => {
    setOpenModal(undefined);
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.blueSide}>
        <TwitterIcon color='primary' className={classes.blueSideBigIcon} />
        <ul className={classes.blusideListInfo}>
          <li className={classes.blusideListInfoItem}>
            <Typography variant="h6">
              <SearchIcon className={classes.blusideListInfoIcon} />
              Read about what is interesting
            </Typography>
          </li>
          <li className={classes.blusideListInfoItem}>
            <Typography variant="h6">
              <PeopleOutlineIcon className={classes.blusideListInfoIcon} />
              Find out what the world is talking about
            </Typography>
          </li>
          <li className={classes.blusideListInfoItem}>
            <Typography variant="h6">
              <ChatBubbleOutlineIcon className={classes.blusideListInfoIcon} />
              Join the conversation
            </Typography>
          </li>
        </ul>
      </div>
      <div className={classes.loginSide}>
        <div className={classes.loginSideWrapper}>
          <TwitterIcon
            color='primary'
            className={classes.loginSideTwitterIcon}
          />
          <Typography className={classes.loginSideTitle} gutterBottom variant="h4">
            Find out what's going on in the world now
          </Typography>
          <Typography>
            <b>Join Twitter Now</b>
          </Typography>
          <br />
          <Button
            onClick={handleClickOpenSignUp}
            style={{marginBottom: 20}}
            variant="contained"
            color="primary" 
            fullWidth
          >
            SignUp
          </Button>
          <Button onClick={handleClickOpenSignIn} variant="outlined" color="primary" fullWidth>
            SignIn
          </Button>

          <ModalDialog
            classes={classes}
            title="SignIn to account"
            open={openModal === 'signIn'}
            onClose={handleCloseModal}
          >
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  type="email"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                />
                <TextField
                  className={classes.loginSideField}
                  autoFocus
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                />
                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                  Enter
                </Button>
              </FormGroup>
            </FormControl>
          </ModalDialog>

          <ModalDialog
            classes={classes}
            title="Create your account"
            open={openModal === 'signUp'}
            onClose={handleCloseModal}
          >
            <FormControl className={classes.loginFormControl} component="fieldset" fullWidth>
              <FormGroup aria-label="position" row>
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="name"
                  label="Name"
                  type="name"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="email"
                  label="E-Mail"
                  type="email"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                />
                <TextField
                  className={classes.registerField}
                  autoFocus
                  id="password"
                  label="Password"
                  type="password"
                  fullWidth
                  InputLabelProps={{
                    shrink: true
                  }}
                  variant="filled"
                />
                <Button onClick={handleCloseModal} variant="contained" color="primary" fullWidth>
                  Enter
                </Button>
              </FormGroup>
            </FormControl>
          </ModalDialog>
        </div>
      </div>
    </div>
  );
}
