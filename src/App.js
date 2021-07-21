import './App.css';
import styled from 'styled-components'
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Cards/Card';
const Section = styled.div`
  width: 100%;
`


function App() {
  return (
    <Section>
      <Navbar />
      <Card />
      <Card />
      <Card />
    </Section>
  );
}

export default App;
