import React from 'react';
import './App.css';

import BusinessList from './components/business-list/business-list.component';
import SearchBar from './components/search-bar/search-bar.component';

function App() {
  return (
    <div className="App">
      <h1>ravenous</h1>
      <SearchBar />
      <BusinessList />
    </div>
  );
}

export default App;
