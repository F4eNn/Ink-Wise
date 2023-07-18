export const useDate = (date: string) => {
	const newDate = new Date(date);
	const year = newDate.getFullYear().toString();
	const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
	const day = newDate.getDate().toString().padStart(2, '0');
	const finalDate = `${day}.${month}.${year}`;
	return { finalDate };
  };