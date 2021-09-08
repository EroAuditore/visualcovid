import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Detail from './components/Detail/Detail';
import Home from './components/Home/Home';
import NavBar from './components/Layout/NavBar';
import { fetchInitialData, fetchCountry } from './redux/data/covid';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInitialData());
    dispatch(fetchCountry());
  }, []);
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route path="/detail" component={Detail} />
        <Route path="/" exact component={Home} />
      </Switch>
    </Router>
  );
}

export default App;
