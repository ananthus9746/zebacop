import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserStructureNav from './LayoutNav/UserStructureNav'
import Home from './pages/User/Home/Home'
import AllProjectPage from './pages/User/AllProjectPage/AllProjectPage'
import ConnectWalletPage from './pages/User/ConnectWalletPage/ConnectWalletPage'
import ViewProject from './pages/User/ViewProject/ViewProject'
import ApplyPage from './pages/User/ApplyPage/ApplyPage'



function App() {
  return (
    <div className="Parent_layout">

      <Routes>

        <Route path="/" element={<UserStructureNav />}>

          <Route path="/Home" element={<Home />} />
          <Route path="/projects" element={<AllProjectPage />} />
          <Route path="/ConnectWallets" element={<ConnectWalletPage />} />
          <Route path="/viewProject/:id" element={<ViewProject />} />
          <Route path="/Apply" element={<ApplyPage />} />
          
        </Route>

      </Routes>

    </div>
  );
}

export default App;
