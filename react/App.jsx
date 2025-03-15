import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/home.js';
import Search from './components/search.js';
import Search_test from './components/search_test.js';
import Search_detail from './components/search_detail.js';
import Tab from './components/tab.js';
import Article_category from './components/article_category.js'
import Test from './components/test.js'
//import Recommand from './components/recommand.js';
import Recommand from './components/pan_recommand.js';
import Login from './components/login';
import Signup from './components/signup';
import LoadingModal from './components/loading_modal.js';
function App() {
  return (
    <div className="App">
				<Routes>
          <Route path="/" element={<Recommand/>}/>
          <Route path="/search/:query/:option" element={<Search_test/>}/>
          <Route path="/search/:kind/:query/:option" element={<Search_detail/>}/>
          <Route path="/tab" element={<Tab/>}/>
          <Route path="/category/:kind/:c1/:c2" element={<Article_category/>}/>
          <Route path="/recommand" element={<Home/>}/>
          <Route path="/precedent/detail/:num/:p" element={<Test/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/modal" element={<LoadingModal/>}/>
				</Routes>
    </div>
  );
}

export default App;
