import logo from './logo.svg';
import './App.css';
import HowItWorksPNG from './assets/how_it_works.png';

function App() {
  return (
    <div className="App">
      <h1>COVID-19 Resource Verification bot</h1>
      <h2>
        Please note that this bot is unofficial and its simply made for
        verification check purpose
      </h2>

      <div className="text-xl mt-16">3 simple commands</div>
      <div className="py-2">
        <div className="py-2">
          {' '}
          - <span className="font-bold">"@covid_src verify "</span> (This gives
          you overall verification votes for resource)
        </div>
        <div className="py-2">
          {' '}
          - <span className="font-bold">"@covid_src verify true "</span> (this
          registers "true" vote for resource verification)
        </div>
        <div className="py-2">
          {' '}
          - <span className="font-bold">"@covid_src verify false "</span>(this
          registers "false" vote for resource verification){' '}
        </div>
      </div>
      <h3 className="py-2 mt-16"> How it works</h3>
      <img className="py-2" src={HowItWorksPNG} />
    </div>
  );
}

export default App;
