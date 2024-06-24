export async function fetchData() {
  try {
    const response = await fetch('/api/v1/events');
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Failed to fetch data:', error);
  }
}

export async function sortDataByDate() {
  const fetchedData = await fetchData();
  
  const today = new Date();

  const sortedData = fetchedData.sort((a,b) => {
    const dateA = new Date(a.start_date);
    const dateB = new Date(b.start_date);
    return getDifferenceInDays(today, dateA) - getDifferenceInDays(today, dateB);
  });

  return sortedData;

}

// Function to calculate the difference in days between two dates
const getDifferenceInDays = (date1, date2) => {
  const diffTime = date2 - date1; // Remove Math.abs to consider the direction of difference
  return diffTime / (1000 * 60 * 60 * 24);
};
