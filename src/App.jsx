import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './compenent/mainPage/HomePage';
import ContactForm from './compenent/formulaire/ContactForm';
import About from './compenent/about/About';
import NavBar from './compenent/navBar/NavBar';
import TagSection from './compenent/tagSection/TagSection';
import TableauGenres from './compenent/genres/TableauGenres';
import Questionnaire from './compenent/questions/Questionnaire';
import Tom1 from './testAPI/Tom1';
import Test2 from './testAPI/Test2';

import { MovieContextProvider } from './testAPI/MovieContext';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='*' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/formulaire' element={<ContactForm />} />
          <Route
            path='/about'
            element={
              <div>
                <About />
              </div>
            }
          />
          <Route
            path='/Test2'
            element={
              <div>
                <MovieContextProvider>
                  <Test2 />
                </MovieContextProvider>
              </div>
            }
          />
          <Route
            path='/pageTest'
            element={
              <div>
                <TagSection />
                <Questionnaire />
                <TableauGenres />
                <Tom1 />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
