import { Switch } from 'react-router-dom';
import { Suspense, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth';
import Container from './component/Container';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ContactsView from './views/ContactsView';
import AppBar from './component/AppBar';
import PrivateRoute from './component/PrivateRoute';
import PublicRoute from './component/PublicRoute';

// console.log(HomeView());
// console.log(LoginView());
// console.log(RegisterView());
// console.log(ContactsView());

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <AppBar />

      <Switch>
        {/* <Suspense fallback={<p>Download ...</p>}> */}
        {/* <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} /> */}
        <PublicRoute exact path="/">
          <HomeView />
        </PublicRoute>
        <PublicRoute path="/register" restricted>
          <RegisterView />
        </PublicRoute>
        <PublicRoute path="/login" restricted redirectTo="/contacts">
          <LoginView />
        </PublicRoute>
        <PrivateRoute path="/contacts">
          <ContactsView />
        </PrivateRoute>
        {/* </Suspense> */}
      </Switch>
    </Container>
  );
}

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
