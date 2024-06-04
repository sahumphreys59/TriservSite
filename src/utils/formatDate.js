
export function formatDate(string) {
  const date = new Date(string);
  // Array of month names
  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const day = date.getDate();
  const month = monthNames[date.getMonth()];
  const year = date.getFullYear();

  // Get the appropriate suffix for the date
  const suffix = getDaySuffix(day);

  return `${month} ${day}${suffix}, ${year}`;
}

function getDaySuffix(day) {
  if (day > 3 && day < 21) return 'th'; // Handle 11th to 20th
  switch (day % 10) {
      case 1: return 'st';
      case 2: return 'nd';
      case 3: return 'rd';
      default: return 'th';
  }
}