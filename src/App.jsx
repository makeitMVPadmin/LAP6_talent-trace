import { CardProvider } from './context/SnapshotContext';
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
      <Header />
      <SkillsProvider>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={'/users/:userId/Profile'} replace />}
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
          <Route path="/SnapshotInfo" element={<SnapshotInfoPage />} />
          <Route
            path="/users/:userid/CreateSnapshot"
            element={<CreateSnapshotPage />}
          />
          <Route
            path="/users/:userId/cards"
            element={
              <CardProvider>
                <SnapshotPage />
              </CardProvider>
            }
          />
        </Routes>
      </SkillsProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
