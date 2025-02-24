import { CardProvider } from './context/SnapshotContext';
import SnapshotInfoPage from './pages/SnapshotInfoPage/SnapshotInfoPage';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import { QuestionProvider } from './context/QuestionsContext';
import CreateSnapshotPage from './pages/CreateSnapshotPage/CreateSnapshotPage';
import SnapshotPage from './pages/SnapshotPage/SnapshotPage';
import { SkillsProvider } from './context/AllSkillsContext';
import { CardsProvider } from './context/AllSnapshotsContext';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <SkillsProvider>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={'/users/:userid/Profile'} replace />}
          />
          <Route
            path="/users/:userId/Profile"
            element={
              <CardsProvider>
                <ProfilePage />
              </CardsProvider>
            }
          />
          <Route path="/SnapshotInfo" element={<SnapshotInfoPage />} />
          <Route
            path="/users/:userid/CreateSnapshot"
            element={
              <QuestionProvider>
                <CreateSnapshotPage />
              </QuestionProvider>
            }
          />
          <Route
            path="/users/:userId/cards/:cardId"
            element={
              <CardsProvider>
                <CardProvider>
                  <SnapshotPage />
                </CardProvider>
              </CardsProvider>
            }
          />
        </Routes>
      </SkillsProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
