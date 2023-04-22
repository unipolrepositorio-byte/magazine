import React from 'react'
import useStyles from './header.styles';
import {searchGiffs} from '../../services';
import LoginIcon from '@mui/icons-material/Login';
import logo from '../../assets/image/logo.png'
import { Link } from 'react-router-dom';
const Header = () => {
  searchGiffs('better call saul');
  const classes = useStyles();
  return (
    <>
        <div className={classes.header}>
            <div className={classes.container}>
              <div className={classes.logo}>
               <Link to='/'><img src = {logo}/></Link> 
              </div>
              <div className={classes.items}>
                <a href={`/users/login`}>
                  <b>Login <LoginIcon /> </b> 
                </a>
              </div>
            </div>
        </div>
    </>
  )
}
export default Header;