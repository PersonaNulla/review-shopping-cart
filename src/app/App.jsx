import AppRouter from "./router";
import AppProvider from "./providers";
import "./global.css";

function App() {
  return (
    <AppProvider>
      <AppRouter />
    </AppProvider>
  );
}

export default App;
