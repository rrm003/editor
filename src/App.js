import './App.css'
import TitleBar from  './component/titleBar'
import Dashboard from './component/dashboard';
import NewEditor from './component/new-editor';
import Profile from './component/profile';
import ErrorPage from './component/errorPage';
import { BrowserRouter, Route, Routes} from "react-router-dom";


function App() {
  return (
    <div className="App">
      <div className='App-header'>
      <TitleBar />
      </div>

      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Profile/>} />
          <Route exact path="/blog" element={<Dashboard/>} />
          <Route exact path="/new" element={<NewEditor editable={true}/>}/>
          <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
