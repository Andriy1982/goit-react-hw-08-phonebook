import style from './AppBar.module.css';
import Navigation from '../Navigation';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
// console.log(Navigation);

export default function AppBar() {
  // const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);
  return (
    <header className={style.header}>
      <Navigation />
      <UserMenu />
      <AuthNav />

      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />}  */}
    </header>
  );
}
