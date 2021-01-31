import { Switch, Route } from 'react-router-dom';
import Container from './component/Container';
import HomeView from './views/HomeView';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import ContactsView from './views/ContactsView';
import AppBar from './component/AppBar';

// console.log(HomeView());
// console.log(LoginView());
// console.log(RegisterView());
// console.log(ContactsView());

export default function App() {
  return (
    <Container>
      <AppBar />

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
        {/* <Route exact path="/" />
        <HomeView />
        <Route />
        <Route path="/register" />
        <RegisterView />
        <Route />
        <Route path="/login" />
        <LoginView/>
        <Route />
        <Route path="/contacts" />
        <ContactsView/>
        <Route /> */}
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
