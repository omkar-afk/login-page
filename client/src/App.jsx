import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/signup'; // Capitalized component names conventionally start with an uppercase letter

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} /> {/* Use uppercase for component name and correct element attribute */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
