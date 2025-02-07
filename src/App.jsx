import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CardProvider } from './context/SnapshotContext'; // Import the context provider
import DisplayComponent from './pages/SnapshotInfoPage/SnapshotInfoPage'; // Component to display card data

function App() {
  return (
    <CardProvider>
      {/* Wrap the app with CardProvider */}
      <Router>
        <Routes>
          {/* Define route for user card page */}
          <Route
            path="/users/:userId/cards/:cardId"
            element={<DisplayComponent />} // Display the card data based on userId and cardId
          />
        </Routes>
      </Router>
    </CardProvider>
  );
}

export default App;
