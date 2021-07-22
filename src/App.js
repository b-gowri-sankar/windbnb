import './App.css';
import styled from 'styled-components'
import Navbar from './Components/Navbar/Navbar';
const Section = styled.div`
 max-width: 85%;
 margin: auto;
`


function App() {
  return (
    <Section>
      <Navbar />
    </Section>
  );
}

export default App;
