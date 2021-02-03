import { useDispatch, useSelector } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
// import defaultAvatar from './default-avatar.png';
import style from './UserMenu.module.css';
import AccountCircle from '@material-ui/icons/AccountCircle';
import IconButton from '@material-ui/core/IconButton';

export default function UserMenu() {
  const dispatch = useDispatch();
  const email = useSelector(authSelectors.getUserEmail);
  console.log(email);
  // const avatar = defaultAvatar;

  return (
    <div className={style.container}>
      <IconButton
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        // onClick={handleMenu}
        color="inherit"
      >
        <AccountCircle />
      </IconButton>
      {/* <img src={avatar} alt="" width="32" className={style.avatar} /> */}
      <span className={style.name}>
        {/* Добро пожаловать, */}
        {email}
      </span>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
