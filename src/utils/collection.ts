export const deleteItem = (items: [], id: number) => {
	return items.filter((i: { id: number }) => i.id !== id)
}

export const addItem = (sourceItems: [], newItem: {}) => {
	return [...sourceItems, newItem]
}

export const updateCollection = (items: [], item: { id: number }) => {
	const clone = items.map((i: { id: number }) => {
		if (i.id === item.id) {
			return item
		}

		return i
	})

	return clone
}

const updateDataObject = (sourceItems: [], item: any) => ({
	...sourceItems,
	[item.id]: item,
})
