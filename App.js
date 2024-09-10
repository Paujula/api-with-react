import './App.css';


fetch('https://mten.ficatgroup.com/api/v1/formations-listes').
then((response) => {
  response = response.json()
  response.then ((result) => {
    console.log(result)
  })
})

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <h1> 
        Exerxice sur les API
      </h1>
      </header>
    </div>
  );
}

export default App;
