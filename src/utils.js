export const getFormattedDate = ((date = new Date()) => {
    const options = {
      month: 'long', // Full name of the month (e.g., 'June')
      day: 'numeric', // Day of the month (e.g., '19')
      year: 'numeric', // Full year (e.g., '2023')
      hour: 'numeric', // Hour (e.g., '7')
      minute: '2-digit', // Minute, zero-padded (e.g., '06')
      hour12: true // Use 12-hour clock (e.g., 'am' or 'pm')
    };
    
    return date.toLocaleString('en-US', options);
});