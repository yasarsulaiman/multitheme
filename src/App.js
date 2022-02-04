import './App.scss';
import Menu from './components/Menu/Menu';
import SideBar from './components/SideBar/SideBar';
import Button from './CustomeComponents/Button';
import Table from './components/Table/Table';
import { customizeTheme } from './utils/customizeTheme';
import { ThemeProvider } from '@mui/material/styles';
import { theme as customeTheme } from './themes';

function App({theme}) {
  let themeDetails = null;
  themeDetails = theme === "dark" ? customizeTheme(customeTheme.darkTheme) : customizeTheme(customeTheme.lightTheme);
  console.log({themeDetails});
  return (
  <ThemeProvider theme={themeDetails} >
    <div className="App">
       <Menu />
       <div className="content-section">
         <div className='left-section'>
           <SideBar />
         </div>
         <div className='right-section'>
           <Button theme={themeDetails} > Sample Button </Button>
           <Table />
         </div>
       </div>
    </div>
  </ThemeProvider>
  );
}

export default App;
