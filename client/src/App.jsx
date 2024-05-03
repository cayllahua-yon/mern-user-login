import './App.css'
import {BrowserRouter, Routes, Route} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import RegisterPage from './pages/RegisterPage';
import { AuthProvider } from './context/AuthContext';
import JobsPage from './pages/JobsPage';
import JobFormPage from './pages/JobFormPage';
import ProfilePage from './pages/ProfilePage';
import HomePage from './pages/HomePage';

import ProtectedRouter from './ProtectedRoute';
import {JobProvider} from "./context/JobsContexto"

import Navbar from './components/Navbar';

function App() {

  return (
    <AuthProvider>
      <JobProvider>
        <BrowserRouter >
        <main className='container mx-auto px-10'>
          <Navbar />
          <Routes>
            <Route path='/' element={ <HomePage />} />
            <Route path='/login' element={<LoginPage /> }/>
            <Route path='/register' element={ <RegisterPage />} />

              <Route element={<ProtectedRouter/>}>
                <Route path='/profile' element={ <ProfilePage />} />

                <Route path='/jobs' element={ <JobsPage />} />
                <Route path='/jobs/new' element={ <JobFormPage />} />
                <Route path='/jobs/:id' element={ <JobFormPage />} />
              </Route>

            <Route path='*' element={ <h1> No hay informacion en esta ruta </h1>} />
          </Routes>
        </main>
        </BrowserRouter>
      </JobProvider>
    </AuthProvider>
  )
}

export default App
