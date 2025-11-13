import { BrowserRouter as Router } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import './assets/styles/global.css';
import './assets/styles/animations.css';

function App() {

  return (
    <Router>
      <AnimatePresence mode='wait'>
        <Home />
      </AnimatePresence>
    </Router>
  );
}

export default App;