import 'bootstrap/dist/css/bootstrap.css';
import Dictionary from './Dictionary';
import './App.css';

function App() {
  return (
   
    <div className="App" >
      <div className='container'>
        <header className="App-header">
          <h1>Dictionary</h1>
        </header>
        <main>
          <Dictionary />
        </main>

       <footer class="ps-5 pe-5">
          <div class="row d-flex justify-content-center">
             <div class="col-lg-6">
            2023, open {" "}
            <a href="https://github.com/carmenavalhas/dictionary-project">source</a>
             {" "} ⎪ coded by {" "}
            Carmen Navalhas
          </div>
          </div>
              </footer>
      </div>
    </div>
    
  );
}

export default App;