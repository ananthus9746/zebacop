import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import UserStructure from './LayoutNav/UserStructure'
import Home from './pages/User/Home/Home'
import AllProjectPage from './pages/User/AllProjectPage/AllProjectPage'
import ConnectWalletPage from './pages/User/ConnectWalletPage/ConnectWalletPage'
import ViewProject from './pages/User/ViewProject/ViewProject'
import ApplyPage from './pages/User/ApplyPage/ApplyPage'
// -------------------ADMIN-----------------------------//
import AdminStructureNav from './LayoutNav/AdminStructureNav'
import AdminLogin from './pages/Admin/AdminLogin/AdminLogin'
import AdminAuthentication from './ProtectorRoute/AdminAuthentication'
import AdminDashboard from './pages/Admin/AdminDashboard/AdminDashboard'
import PendingPage from './pages/Admin/PendingPage/PendingPage'
import ApprovedPage from './pages/Admin/ApprovedPage/ApprovedPage'
import FinalPage from './pages/Admin/FinalPage/FinalPage'
import OngoingPage from './pages/Admin/OngoingPage/OngoingPage'
import EndedProjectPage from './pages/Admin/EndedProjectPage/EndedProjectPage'
import RejectedPage from './pages/Admin/RejectedPage/RejectedPage'
import ErrorPage from  './pages/ErrorPage/ErrorPage'
import './App.css'

function App() {
  return (
    <>

      <Routes>

      
        <Route path="/" element={<UserStructure />}>
        
          <Route index element={<Home />} />
          <Route path="/projects" element={<AllProjectPage />} />
          <Route path="/ConnectWallets" element={<ConnectWalletPage />} />
          <Route path="/viewProject/:id" element={<ViewProject />} />
          <Route path="/Apply" element={<ApplyPage />} />

        </Route>


        <Route path="adminlogin" element={<AdminLogin />} />

        <Route path="/admin" element={<AdminAuthentication />}>
          <Route path="/admin" element={<AdminStructureNav />}>

            <Route index element={<AdminDashboard />} />
            <Route path="pending" element={<PendingPage />} />
            <Route path="approved" element={<ApprovedPage />} />
            <Route path="final" element={<FinalPage />} />
            <Route path="progrssing" element={<OngoingPage />} />
            <Route path="ended" element={<EndedProjectPage />} />
            <Route path="rejected" element={<RejectedPage />} />

          </Route>
        </Route>


        <Route path='*' element={<ErrorPage/>} />


      </Routes>
    </>
  );
}

export default App;
