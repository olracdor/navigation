import React, { useEffect, useState } from 'react';
import './App.css';
import RichObjectTreeView, { initialState } from './components/navigation/TreeView';
import NavigationLoader from './components/effects/loading/NavigationLoader';
import { fetchData } from './services/NavigationService';


export default function App() {
  const [data, setData] = useState(initialState.renderTree);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchDataAsync = async () => {
      const response = await fetchData();
      setData(response);
      setIsLoading(false);
    }
    fetchDataAsync();
  }, []);

  return (
    <div className="App">
    <header className="App-header">
    {isLoading ? (<NavigationLoader/>) : 
    <RichObjectTreeView tree={data}/>}
    </header>
  </div>
  )
}