import React from 'react';
import { Autocomplete } from '@react-google-maps/api';
import { AppBar, Toolbar, Typography, InputBase,} from '@mui/material';
import { Search } from '@mui/icons-material';

import useStyles from './styles.js';
import style from './Header.module.css'

const Header = () => {
  const classes = useStyles();
  return (
    <AppBar position='static'>
      <Toolbar className={style.toolbar}>
        <Typography variant='h5' className={classes.title}>
          My City Advisor
        </Typography>
        <div className={style.toolbar}>
          <Typography variant='h6' className={classes.title}>
            Explore Best Places
          </Typography>
          <div>

          </div>
          {/* <Autocomplete> */}
            <div className={style.searchBox}>
              <InputBase placeholder='Search....' className={{root: classes.inputRoot, input: classes.inputInput}}/>
              <Search className={style.searchIcon}/>
            </div>
          {/* </Autocomplete> */}
        </div>
      </Toolbar>
    </AppBar>
  )
};

export default Header;