import { NavLink } from 'react-router-dom';
import style from './Navigation.module.css';
// console.log(style.activeLink);
// console.log(style.link);

// const styles = {
//     link: {
//       display: 'inline-block',
//       textDecoration: 'none',
//       padding: 12,
//       fontWeight: 700,
//       color: '#2A363B',
//     },
//     activeLink: {
//       color: '#E84A5F',
//     }}

// console.log(styles.activeLink);
// console.log(style.activeLink);

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      exact
      className={style.link}
      activeClassName={style.activeLink}
      //  style={styles.link}
      //  activeStyle={styles.activeLink}
    >
      Главная
    </NavLink>

    <NavLink
      to="/contacts"
      exact
      className={style.link}
      activeClassName={style.activeLink}
      // style={styles.link}
      // activeStyle={styles.activeLink}
    >
      Контакти
    </NavLink>
  </nav>
);

export default Navigation;
