import { Routes, Route } from 'react-router-dom';

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Container from "./components/Container/Container";
import Navigation from "./components/Navigation/Navigation";
import About from "./pages/About/About";
import Shop from "./pages/Shop/Shop";
import Gallery from "./pages/Gallery/Gallery";
import Contacts from "./pages/Contacts/Contacts";
import WishList from "./pages/WishList/WishList";

import './App.css';

function App() {
    console.log(process.env);
  return (
    <Container>
        <div className="App">
            <Header />
            <Main>
                <Routes>
                    <Route exact path='/' element={<Navigation />}/>
                    <Route exact path='/about' element={<About />}/>
                    <Route exact path='/shop' element={<Shop />}/>
                    <Route exact path='/gallery' element={<Gallery />}/>
                    <Route exact path='/contacts' element={<Contacts />}/>
                    <Route exact path='/wish-list' element={<WishList />}/>
                </Routes>
            </Main>
        </div>
    </Container>
  );
}

export default App;
