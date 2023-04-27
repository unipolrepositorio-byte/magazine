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
      icon:''
    },
    {
      name:'INICIO',
      to:'/',
      icon:''
    },
    {
      name:'VOLUMENES',
      to:'/volumes',
      icon:''
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