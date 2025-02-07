import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CardProvider } from './context/SnapshotContext';
import SnapshotInfoPage from './pages/SnapshotInfoPage/SnapshotInfoPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/users/:userId/cards/:cardId"
          element={
            <CardProvider>
              <SnapshotInfoPage />
            </CardProvider>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
