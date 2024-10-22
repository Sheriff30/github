import fetchUser from "./fetchUser";
import { useQuery } from "@tanstack/react-query";

function useUser(user) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["user", user],
    queryFn: () => fetchUser(user),
    enabled: !!user,
    retry: 0,
  });

  return { data, isLoading, isError };
}

export default useUser;
