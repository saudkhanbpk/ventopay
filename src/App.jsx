import { Toaster } from "react-hot-toast";
import { BrowserRouter as Router } from "react-router-dom";
import RoutesConfig from "./routes/RoutesConfig";
function App() {
  return (
    <div>
      <Router>
        <RoutesConfig />
      </Router>
      <Toaster />
    </div>
  );
}

export default App;
