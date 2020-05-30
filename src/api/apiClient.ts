const apiBaseUrl = 'https://simpleblogapi.herokuapp.com/'

const apiUrl = (endpoint: string) => apiBaseUrl + endpoint

const headers = {
	Accept: 'application/json',
	'Content-Type': 'application/json',
}

// get
export const get = (endpoint: string, { ...args }) =>
	fetch(apiUrl(getEndpointStr(endpoint, args)), {
		method: 'GET',
		headers: headers,
	}).then((response) => response.json())

// post
export const post = (endpoint: string, { ...args }) =>
	fetch(apiUrl(endpoint), {
		method: 'POST',
		headers: headers,
		body: JSON.stringify(args),
	}).then((response) => response.json())

// put
export const put = (endpoint: string, { ...args }: any, token: any) =>
	fetch(apiUrl(endpoint), {
		method: 'PUT',
		headers: {
			...headers,
			...(token && { Authorization: `Bearer ${token}` }),
		},
		body: JSON.stringify(args),
	}).then((response) => response.json())

// del
export const del = (endpoint: string, id: any, token: string) =>
	fetch(apiUrl(`${endpoint}/${id}`), {
		method: 'DELETE',
		headers: {
			...headers,
			...(token && { Authorization: `Bearer ${token}` }),
		},
	}).then((response) => response.status === 200)

// get endpoint string
const getEndpointStr = (endpoint: string, args: any) => {
	let argStr = '?'
	for (let key of Object.keys(args)) {
		argStr = `${argStr}${key}=${args[key]}&`
	}

	return endpoint + argStr.slice(0, -1)
}
