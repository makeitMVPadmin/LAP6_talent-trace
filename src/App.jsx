import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Buttons from './components/Buttons/Buttons';
import Header from './components/Header/Header';

import { CategoriesProvider } from './context/AllCategoriesContext';
import { SkillsProvider } from './context/AllSkillsContext';
import { CardsProvider } from './context/AllSnapshotsContext';
import { CardProvider } from './context/SnapshotContext';

import ProfilePage from './pages/ProfilePage/ProfilePage';
import { QuestionProvider } from './context/QuestionsContext';
import CreateSnapshotPage from './pages/CreateSnapshotPage/CreateSnapshotPage';
import SnapshotPage from './pages/SnapshotPage/SnapshotPage';
import SnapshotInfoPage from './pages/SnapshotInfoPage/SnapshotInfoPage';

function App() {
  return (
    <>
      <div>
        <h1 className="bg-red-500">
          Check the console for Firebase connection status!
        </h1>
        <Buttons />
      </div>
      <BrowserRouter>
        <Header />
        <CategoriesProvider>
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
                element={<CreateSnapshotPage />}
              />
              <Route
                path="/users/:userId/cards/:cardId"
                element={
                  <CardProvider>
                    <SnapshotPage />
                  </CardProvider>
                }
              />
            </Routes>
          </SkillsProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </>
=======
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
