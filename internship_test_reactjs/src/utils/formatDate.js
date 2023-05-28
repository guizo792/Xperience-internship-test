export default function formatDate(date) {
  const transformedDate = new Date(date);
  const now = new Date();
  const diff = Math.abs(now - transformedDate);
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  if (days > 7) {
    const formattedDate = transformedDate.toLocaleDateString("en-US");
    return formattedDate;
  } else if (hours >= 1) {
    return `${hours} hour${hours > 1 ? "s" : ""} ago`;
  } else if (minutes >= 1) {
    return `${minutes} minute${minutes > 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
}
