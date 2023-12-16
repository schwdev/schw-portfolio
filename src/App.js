import RoutesApp from './routes';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

function App() {
  return (
    <BrowserRouter>

      <Header />


      <Container>
        <RoutesApp />
      </Container>


      <Footer />




    </BrowserRouter>
  );
}

export default App;
