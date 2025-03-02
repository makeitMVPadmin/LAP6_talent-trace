import SnapshotInfoPage from './pages/SnapshotInfoPage/SnapshotInfoPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import CreateSnapshotPage from './pages/CreateSnapshotPage/CreateSnapshotPage';
import SnapshotPage from './pages/SnapshotPage/SnapshotPage';
import { SkillsProvider } from './context/AllSkillsContext';
import { CardsProvider } from './context/AllSnapshotsContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { UserProvider } from './context/UserDetailsContext';

function App() {
  return (
    <BrowserRouter>
      <SkillsProvider>
        <UserProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <Navigate to={'/users/YBkt2uL3tGxFwhW0Ryrc/Profile'} replace />
              }
            />
            <Route
              path="/users/:userId/Profile"
              element={
                <UserProvider>
                  <CardsProvider>
                    <ProfilePage />
                  </CardsProvider>
                </UserProvider>
              }
            />
            <Route
              path="/SnapshotInfo/:userId"
              element={<SnapshotInfoPage />}
            />
            <Route
              path="/users/:userId/CreateSnapshot"
              element={
                <UserProvider>
                  <CreateSnapshotPage />
                </UserProvider>
              }
            />
            <Route
              path="/users/:userId/cards"
              element={
                <UserProvider>
                  <CardsProvider>
                    <SnapshotPage />
                  </CardsProvider>
                </UserProvider>
              }
            />
          </Routes>
        </UserProvider>
      </SkillsProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
