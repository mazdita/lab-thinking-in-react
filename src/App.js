
import React from 'react';
import jsondata from './data/data.json';
import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import { render } from '@testing-library/react';


class App extends React.Component {
  render() {
    return(
    <div className="App">
      <FilterableProductTable products={ jsondata.data } />
    </div>
    )
  };
}

export default App;
