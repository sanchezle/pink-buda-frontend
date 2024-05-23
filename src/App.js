import { Routes, Route } from 'react-router-dom'
import Public from './components/Public'
import Login from './features/auth/Login';
import Reserva from './components/Reserva';
import DashLayout from './components/DashLayout'
import Welcome from './features/auth/Welcome'
import NotesList from './features/notes/NotesList'
import UsersList from './features/users/UsersList'
import EditUser from './features/users/EditUser'
import NewUserForm from './features/users/NewUserForm'
import EditNote from './features/notes/EditNote'
import NewNote from './features/notes/NewNote'
import Prefetch from './features/auth/Prefetch'
import PersistLogin from './features/auth/PersistLogin'
import RequireAuth from './features/auth/RequireAuth'
import { ROLES } from './config/roles'
import useTitle from './hooks/useTitle';
import Register from './features/users/Register'
import ResetPassword from './features/auth/ResetPassword';
import PasswordResetRequest from './features/auth/PasswordResetRequest';
import EmailConfirmed from './features/users/EmailConfirmed';
import Menu from './components/Menu';
function App() {
  useTitle('Pink Buda Burger')

  return (
    <Routes>
      <Route path="/">
        {/* public routes */}
        <Route index element={<Public />} />
        <Route path="Menu" element={<Menu />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />}/>
        <Route path="passwordResetRequest" element={<PasswordResetRequest/>}/>
        <Route path="reset-password" element={<ResetPassword/>} />
        <Route path="reserva" element={<Reserva />} />
            {/* Route for EmailConfirmed*/}
    
        <Route path="emailConfirmed" element={<EmailConfirmed/>} />

              {/* Route for Password Reset */}
       

        {/* Protected Routes */}
        <Route element={<PersistLogin />}>
          <Route element={<RequireAuth allowedRoles={[...Object.values(ROLES)]} />}>
            <Route element={<Prefetch />}>
              <Route path="dash" element={<DashLayout />}>
              <Route path="ResetPasssword" element={<ResetPassword />}/>

                <Route index element={<Welcome />} />

                <Route element={<RequireAuth allowedRoles={[ROLES.Manager, ROLES.Admin]} />}>
                  <Route path="users">
                    <Route index element={<UsersList />} />
                    <Route path=":id" element={<EditUser />} />
                    <Route path="new" element={<NewUserForm />} />
                  </Route>
                </Route>

                <Route path="notes">
                  <Route index element={<NotesList />} />
                  <Route path=":id" element={<EditNote />} />
                  <Route path="new" element={<NewNote />} />
                </Route>

              </Route>{/* End Dash */}
            </Route>
          </Route>
        </Route>{/* End Protected Routes */}
        
      
      </Route>
    </Routes >
  );
}

export default App;
