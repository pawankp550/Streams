import React, { Component } from 'react';
import '../App.css';
import { Route} from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import Header  from './Streams/Header';
import history from '../history';
import Router from 'react-router-dom/Router';


class App extends Component {

  render() {
    return (
      <div className='ui container'>
            <Router history={history}>
                <div>
                        <Header/>
                        <Route path='/' exact component={StreamList}/>
                        <Route path='/streams/new' exact component={StreamCreate}/>
                        <Route path='/streams/edit/:id'  exact component={StreamEdit}/>
                        <Route path='/streams/delete/:id' exact component={StreamDelete}/>
                        <Route path='/streams/show/:id' exact  component={StreamShow}/>
                </div>
            </Router>
      </div>
    );
  }
}



export default App;
