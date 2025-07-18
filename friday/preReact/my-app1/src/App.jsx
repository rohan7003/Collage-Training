import './App.css'
import Header from './Header';
import Footer from './Footer';
import Safe from './Safe';
import Denger from './Denger';

function App(){
  const heroin = "Dvesena"
  const speed = 50
  const user = 50
  return (
    <>
    <Header />
      <h1>Hello World</h1>
      <h3>Hii students</h3>
      <h2>My choise is { heroin}</h2>
      { 4+ 9 } <br />
      <Safe/>
      <Denger/>
      {speed < 60?  "you are safe": "you'r in danger "} <br />
      {user < 40? "login":"signup"}
      <Footer />
    </>
  );
}
export default App