import React from 'react';
import ReactDOM from 'react-dom';
import Header from './components/Header/Header.js'
import './style/main.less';
class Welcome extends React.Component {
  render() {
    return (
    <div className="App">
      <Header/>
    </div>
    )  
}
}
ReactDOM.render( document.getElementById('root'));
