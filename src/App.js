import './App.scss';
import Menu from './components/Menu/Menu';
import SideBar from './components/SideBar/SideBar';
import Button from './CustomeComponents/Button';
import Table from './components/Table/Table';

function App() {
  return (
    <div className="App">
       <Menu />
       <div className="content-section">
         <div className='left-section'>
           <SideBar />
         </div>
         <div className='right-section'>
           <Button> Sample Button </Button>
           <Table />
         </div>
       </div>
    </div>
  );
}

export default App;
