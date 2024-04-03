import './App.css';
import SplitScreen from './SplitScreen';

const LeftHandComponent  = ()=>{
return <h1 style={{ backgroundColor: "green" }}>Left</h1>;
}

const RightHandComponent = ()=>{
return <h2 style={{ backgroundColor: "red" }}>Right</h2>;
}

function App() {
  return (
    <div>
      <SplitScreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight={1}
        rightWeight={1}
      />
    </div>
  );
}

export default App;
