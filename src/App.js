import './App.css';

function App() {

  return (
    <div className="App">
      <h1>Submit Your <br/> personal information</h1>
      <form>
        <input type="text" placeholder="First name"/>
        <input type="text" placeholder="Last name"/>
        <p>
        <input type="text" placeholder="E-mail"/>
        </p>
        <input className="blueButton" type="submit" value="Next >"/>
      </form>
    </div>
  );
}

export default App;
