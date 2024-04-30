import './App.css';
import { AlertCircle } from "lucide-react"
 
import {
  Alert,
  AlertDescription,
  AlertTitle,
} from "./components/ui/alert"

function App() {
  return (
    <div className="App">
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Error</AlertTitle>
        <AlertDescription>
          Finally it worked
        </AlertDescription>
      </Alert>
    </div>
  );
}

export default App;
