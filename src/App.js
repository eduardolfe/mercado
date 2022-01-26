import './App.css';
import Header from './Components/Header';
import Main from './Components/Main';
import Products from './Components/Products';
import "./Images/banana.jpeg";
import { Page } from './styles';

function App() {
  return (
    <Page>
      <Header/>
      <Main/>
      <Products/>
    </Page>
  );
}

export default App;
