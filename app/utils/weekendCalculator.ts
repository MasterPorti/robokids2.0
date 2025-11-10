export function getUpcomingWeekends(): string[] {
  const now = new Date();
  const weekends: string[] = [];
  const checkedDates = new Set<string>();

  while (weekends.length < 6) {
    const day = now.getDay();
    
    // Check if it's Saturday (6) or Sunday (0)
    if (day === 6 || day === 0) {
      const dateKey = now.toISOString().split('T')[0];
      
      // Avoid duplicates (in case we check the same date twice)
      if (!checkedDates.has(dateKey)) {
        checkedDates.add(dateKey);
        
        const time = day === 6 ? "4-6pm" : "3-5pm";
        const dateStr = now.toLocaleDateString("es-MX", {
          weekday: "long",
          day: "numeric",
          month: "long",
        });
        
        // Capitalize first letter
        const capitalized = dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
        weekends.push(`${capitalized} ${time}`);
      }
    }
    
    // Move to next day
    now.setDate(now.getDate() + 1);
  }

  return weekends;
}

