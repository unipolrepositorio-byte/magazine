import React from 'react'
import useStyles from './header.styles';
import MenuComponent from '../MenuComponent';
import SearchComponent from '../MenuComponent/SearchComponent';

const Header = () => {
  const classes = useStyles();

  const items = [
    {
      name: 'ARTICULOS',
      to: '/articles',
      icon: 'articles'
    },
    {
      name: 'INICIO',
      to: '/',
      icon: 'home'
    },
    {
      name: 'VOLUMENES',
      to: '/volumes',
      icon: 'volumes'
    },
    {
      name: 'REPOSITORIO',
      to:'http://repositoriounipol.com/',
      icon: 'repo'
    }
  ]

  return (
    <div className={classes.header}>
      <MenuComponent items={items} />
      <SearchComponent />
    </div>
  )
}
export default Header;