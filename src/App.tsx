import React, { useEffect, useState } from 'react';
import './App.css';
import RichObjectTreeView, { initialState } from './components/navigation/TreeView';
import { fetchData } from './services/NavigationService';


export default function App() {
  const [data, setData] = useState(initialState.renderTree);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetchData();
      setData(response);
    }
    fetchDataAsync();
  }, []);

  return (
    <div className="App">
    <header className="App-header">
    <RichObjectTreeView tree={data}/>
    </header>
  </div>
  )
}