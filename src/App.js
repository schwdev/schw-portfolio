import RoutesApp from './routes';
import Header from './components/Header';
import Footer from './components/Footer';
import Container from './components/Container';

function App() {
  return (

   <>
      <Header />


      <Container>
        <RoutesApp />
      </Container>


      <Footer />

      </>

  );
}

export default App;
