import api from './api-helper'

export const readAllPlants = async () => {
	const resp = await api.get('/plants')
	return resp.data
}

export const postPlant = async (data) => {
	const resp = await api.post('/plants', { plant: data })
	return resp.data
}

export const putPlant = async (id, data) => {
	const resp = await api.put(`/plants/${id}`, { plant: data })
	return resp.data
}

export const readOnePlant = async (id) => {
	const resp = await api.get(`/plants/${id}`)
	return resp.data
}

export const destroyPlant = async (id) => {
	const resp = await api.delete(`/plants/${id}`)
	return resp
}