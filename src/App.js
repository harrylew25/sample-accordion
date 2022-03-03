import Accordion from './components/Accordion';
import sampleAccordionData from './data';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Accordion Example</h1>
      {sampleAccordionData.map(({ id, title, content }) => {
        return <Accordion key={id} title={title} content={content} />;
      })}
    </div>
  );
}

export default App;
