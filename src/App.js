import { AppRoutes } from './Routes';
import { Page } from './styles';
import './App.css';
{/*import Home from './Pages/Home';
import Products from './Pages/Products';*/}



function App() {
  return (
    <Page>
      {/*<Header/>
      <Main/>
      <Products/>*/}
      <AppRoutes/>
      {/*<Products/>*/}
    </Page>
  );
}

export default App;
