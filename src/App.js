import logo from './logo.svg';
import './App.css';
import { Intro } from './component/intro/Intro';
import { About } from './component/about/About';
import { ProductList } from './component/product-list/ProductList';
import { Contact } from './component/contact/Contact';
import { Toggle } from './component/toggle/Toggle';
import { ThemeContext } from "../src/context"
import { useContext } from 'react';

function App() {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App" style={{ backgroundColor: darkMode ? "#222" : "white", color: darkMode && "white" }}>
      <Toggle></Toggle>
      <Intro></Intro>
      <About></About>
      <ProductList></ProductList>
      <Contact></Contact>
    </div>
  );
}

export default App;
