import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';

function App() {
  return (
    <div className='min-vh-100 d-flex flex-column'>
      <Navbar />
      <div className='flex-grow-1'>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;