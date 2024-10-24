import Header from "./ui/Header";
import { useState } from "react";
import Search from "./ui/Search";
import { Toaster } from "react-hot-toast";
import DarkModeContext from "./context/DarkModeContext";
import UserContext from "./context/UserContext";
import UserDetails from "./ui/UserDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <UserContext.Provider
        value={{ data, setData, isLoading, setIsLoading, error, setError }}
      >
        <main>
          <Header />
          <Search />
          <UserDetails />

          <Toaster />
        </main>
      </UserContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default App;
