import Header from "./ui/Header";
import { useEffect, useState } from "react";
import Search from "./ui/Search";
import UserDetailsDesktop from "./ui/UserDetailsDesktop";
import toast, { Toaster } from "react-hot-toast";
import DarkModeContext from "./context/DarkModeContext";
import UserContext from "./context/UserContext";
import useUser from "./services/useUser";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState("");
  const { data, isLoading, isError } = useUser(user);

  useEffect(() => {
    if (data) {
      toast.success("User Found", {
        className: "toast-success",
      });
    }

    if (isError) {
      toast.error("Something Wrong , Please try Again", {
        className: "toast-error",
      });
    }
  }, [data, isLoading, isError]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <UserContext.Provider value={{ user, setUser }}>
        <main>
          <Header />
          <Search />
          <UserDetailsDesktop />
          <Toaster />
        </main>
      </UserContext.Provider>
    </DarkModeContext.Provider>
  );
}

export default App;
