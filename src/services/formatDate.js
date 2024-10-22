function formatDate(dateString) {
  const date = new Date(dateString);

  const day = date.getDate(); // Get day
  const month = date.toLocaleString("default", { month: "short" }); // Get short month name
  const year = date.getFullYear(); // Get year

  return `Joined ${day} ${month} ${year}`;
}

export default formatDate;
