import './App.css';
import styled from 'styled-components'
import Navbar from './Components/Navbar/Navbar';
const Section = styled.div`
  width: 100%;
`


function App() {
  return (
    <Section>
      <Navbar />
    </Section>
  );
}

export default App;
