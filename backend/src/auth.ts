import { GoTrueClient, SupportedStorage } from '@supabase/gotrue-js'
import fetch from 'cross-fetch'
const { GOTRUE_URL, GOTRUE_JWT_SECRET } = process.env

const inMemoryStorageFactory = (): SupportedStorage => {
	let data: Record<string, string> = {}
	return {
		getItem: key => data[key] ?? null,
		removeItem: key => {
			data = Object.fromEntries(Object.entries(data).filter(([k]) => k !== key))
		},
		setItem: (key, value) => {
			data = {
				...data,
				[key]: value,
			}
		},
	}
}

export const userAuthClient = new GoTrueClient({
	url: GOTRUE_URL,
	fetch,
	autoRefreshToken: true,
	persistSession: true,
	storage: inMemoryStorageFactory(),
})

export const createUserAuthClient = (accessToken?: string) =>
	new GoTrueClient({
		url: GOTRUE_URL,
		fetch,
		autoRefreshToken: true,
		persistSession: true,
		storage: inMemoryStorageFactory(),
		headers: {
			Authorization: `Bearer ${accessToken}`,
		},
	})
