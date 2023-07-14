
//import { BrowserRouter } from 'react-router-dom';
import './App.css';
//import Myapp from './Component/Routing/Myapp';
//import Employee from './Component/Classss/Employee';
//import Employeelist from './Component/Classss/Employeelist';
import Parent from './Component/Parent';

function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
          <Myapp/>
     </BrowserRouter> */}
     {/* <Employeelist name='priyanka' last='dhawale'/>
     <Employeelist name='ram' last='sdfjk'/>
     <Employeelist name='kjhgu' last='hello'/> */}
     <Parent/>
    
    </div>
  );
}

export default App;
