import { useQuery } from "@tanstack/react-query";
import Header from "./ui/Header";
import fetchUser from "./services/fetchUser";
import { useEffect, useRef, useState } from "react";
import Search from "./ui/Search";

function App() {
  const [user, setUser] = useState("octocat");
  const userRef = useRef(null);

  const { data, isError } = useQuery({
    queryKey: ["user", user],
    queryFn: () => fetchUser(user),
    enabled: !!user,
  });

  function onSubmit(e) {
    e.preventDefault();
    const newUser = userRef.current.value;
    if (!newUser) return;

    setUser(newUser);
    userRef.current.value = "";
  }

  useEffect(() => {
    const errorElement = document.querySelector(".error");

    if (isError) {
      setUser("octocat");
      errorElement.style.display = "inline-block";
    }
  }, [isError]);

  return (
    <main>
      <Header />
      <Search onSubmit={onSubmit} userRef={userRef} isError={isError} />
      <div>{data?.login}</div>
    </main>
  );
}

export default App;
