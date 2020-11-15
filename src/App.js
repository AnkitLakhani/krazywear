import './App.css';
import {Route} from 'react-router-dom'
import HomePage from './pages/homepage/homepage.component'
import Shop from './pages/shop/shop.component'
import Header from './components/header/header.component'
function App() {
  return (
    <div>
      <Header></Header>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/shop/" component={Shop}></Route>
    </div>
  );
}

export default App;
