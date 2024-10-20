async function fetchUser(user) {
  const apiRes = await fetch(`https://api.github.com/users/${user}`);

  if (!apiRes.ok) throw new Error("something went wrong");

  return apiRes.json();
}

export default fetchUser;
