import Header from "./ui/Header";
import { useEffect, useState } from "react";
import Search from "./ui/Search";
import toast, { Toaster } from "react-hot-toast";
import DarkModeContext from "./context/DarkModeContext";
import UserContext from "./context/UserContext";
import useUser from "./services/useUser";
import UserDetails from "./ui/UserDetails";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [user, setUser] = useState("");
  const { data, isError } = useUser(user);

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
  }, [data, isError]);

  return (
    <DarkModeContext.Provider value={{ darkMode, setDarkMode }}>
      <UserContext.Provider value={{ user, setUser }}>
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
