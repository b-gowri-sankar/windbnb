import './App.css';
import styled from 'styled-components'
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Cards/Card';
import FormModel from './Components/formModel/formModel';
const Section = styled.div`
  width: 100%;
`


function App() {
  return (
    <Section>
      <FormModel />
      <Navbar />
      <Card />
      <Card />
      <Card />
    </Section>
  );
}

export default App;
