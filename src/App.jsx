import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import SnapshotInfoPage from './pages/SnapshotInfoPage/SnapshotInfoPage';
import CreateSnapshotPage from './pages/CreateSnapshotPage/CreateSnapshotPage';
import SnapshotPage from './pages/SnapshotPage/SnapshotPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users/:userid/Profile" element={<ProfilePage />}></Route>
        <Route path="/SnapshotInfo" element={<SnapshotInfoPage />}></Route>
        <Route
          path="/users/:userid/CreateSnapshot"
          element={<CreateSnapshotPage />}
        ></Route>
        <Route
          path="/users/:userid/Snapshot"
          element={<SnapshotPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
