import { Switch, Route } from 'react-router-dom';
import Container from './component/Container';
import HomeView from './views/HomeView';

export default function App(props) {
  return (
    <Container>
      {/* <AppBar /> */}

      <Switch>
        <Route exact path="/" component={HomeView} />
        {/* <HomeView />
        <Route /> */}
        {/* <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/todos" component={TodosView} /> */}
      </Switch>
    </Container>
  );
}

// function App() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//     </div>
//   );
// }

// export default App;
