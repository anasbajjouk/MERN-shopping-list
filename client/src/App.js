import React from 'react';

import AppNavbar from './components/AppNavbar';
import ShoppingList from './components/ShoppingList';
import ItemModal from './components/ItemModal';

import { Container } from 'reactstrap';
import { Provider } from 'react-redux';
import { loadUser } from './actions/authAction';

import store from './store';

import './App.css';

class App extends React.Component {
  componentDidMount() {
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
