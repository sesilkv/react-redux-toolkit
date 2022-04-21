import React from 'react'
import { useSelector } from 'react-redux'

function App() {
  //function dengan parameter store untuk mengambil state count di counter
  const count = useSelector(store => store.counter.count)

  return (
    <div className="App">
      <h1>{count}</h1>
    </div>
  );
}

export default App;
