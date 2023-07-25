export const useDate = (date?: string) => {
	if (date) {
		const newDate = new Date(date)
		const year = newDate.getFullYear().toString()
		const month = (newDate.getMonth() + 1).toString().padStart(2, '0')
		const day = newDate.getDate().toString().padStart(2, '0')
		const formatDate = `${day}.${month}.${year}`
		return [formatDate]
	} else {
		const creationTime = new Date()
		const formatDate = new Intl.DateTimeFormat('en-US', { timeStyle: 'short', dateStyle: 'short' }).format(creationTime)
		return [formatDate]
	}
}
