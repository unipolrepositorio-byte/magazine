import React from 'react'
import useStyles from './header.styles';
import {searchGiffs} from '../../services';
import MenuComponent from '../MenuComponent';
const Header = () => {
  searchGiffs('better call saul');
  const classes = useStyles();

  const items= [
    {
      name:'ARTICULOS',
      to:'/articles',
      icon:'articles'
    },
    {
      name:'INICIO',
      to:'/',
      icon:'home'
    },
    {
      name:'VOLUMENES',
      to:'/volumes',
      icon:'volumes'
    }
  ]

  return (
    <>
        <div className={classes.header}>
            <MenuComponent items={items}/>
        </div>
    </>
  )
}
export default Header;