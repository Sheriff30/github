import { useQuery } from "@tanstack/react-query";
import Header from "./ui/Header";
import fetchUser from "./services/fetchUser";
import { useEffect, useRef, useState } from "react";
import Search from "./ui/Search";
import UserDetailsDesktop from "./ui/UserDetailsDesktop";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [user, setUser] = useState("");
  const userRef = useRef(null);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["user", user],
    queryFn: () => fetchUser(user),
    enabled: !!user,
    retry: 0,
  });

  function onSubmit(e) {
    e.preventDefault();
    const newUser = userRef.current.value;
    if (!newUser) return;

    setUser(newUser);
    userRef.current.value = "";
    console.log(data);
  }

  useEffect(() => {
    if (data) {
      toast.success("User Found");
    }

    if (isError) {
      toast.error("Something Wrong , Please try Again");
    }
  }, [data, isLoading, isError]);

  return (
    <main>
      <Header />
      <Search onSubmit={onSubmit} userRef={userRef} isError={isError} />
      <UserDetailsDesktop data={data} isLoading={isLoading} isError={isError} />
      <Toaster />
    </main>
  );
}

export default App;
