import React, { Component } from 'react';
import '../App.css';
import { Route, BrowserRouter} from 'react-router-dom';
import StreamCreate from './Streams/StreamCreate'
import StreamDelete from './Streams/StreamDelete'
import StreamEdit from './Streams/StreamEdit'
import StreamList from './Streams/StreamList'
import StreamShow from './Streams/StreamShow'
import Header  from './Streams/Header'


class App extends Component {

  render() {
    return (
      <div className='ui container'>

            <BrowserRouter>
                <div>
                    <Header/>
                        <Route path='/' exact component={StreamList}/>
                        <Route path='/streams/new' exact component={StreamCreate}/>
                        <Route path='/streams/edit'  exact component={StreamEdit}/>
                        <Route path='/streams/delete' exact component={StreamDelete}/>
                        <Route path='/streams/show' exact  component={StreamShow}/>

                </div>
            </BrowserRouter>
      </div>
    );
  }
}



export default App;
