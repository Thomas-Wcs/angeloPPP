import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './compenent/mainPage/HomePage';
import ContactForm from './compenent/formulaire/ContactForm';
import About from './compenent/about/About';
import NavBar from './compenent/navBar/NavBar';
import TagSection from './compenent/tagSection/TagSection';
import TableauGenres from './compenent/genres/TableauGenres';
import Questionnaire from './compenent/questions/Questionnaire';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='*' element={<HomePage />} />
          <Route path='/' element={<HomePage />} />
          <Route path='/formulaire' element={<ContactForm />} />
          <Route path='/about' element={<About />} />
          <Route
            path='/pageTest'
            element={
              <div>
                <TagSection />
                <Questionnaire />
                <TableauGenres />
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
