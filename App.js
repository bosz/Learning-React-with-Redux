import React, {Component} from 'react';
import HomeScreen from './src/screens/HomeScreen';
import TodosScreen from './src/screens/TodosScreen';

import {createStore, applyMiddleware } from 'redux'; 
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';

import reducers from './src/redux/reducers/index'; 

const store = createStore(reducers, applyMiddleware(thunk));

type Props = {};
export default class App extends Component<Props> {
    render() {
      return (
          // <HomeScreen />
      		<Provider store={store}>
          		<TodosScreen />
      		</Provider>
      );
    }
}