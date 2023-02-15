import { writable } from 'svelte/store'
import type { Writable } from 'svelte/store'
import champions from '../data/champions.json'

interface Champion {
	codename: string
	name: string
}

export const championStore: Writable<Champion[]> = writable([])

const getChampionsFromJSON = () => {
	const loadedChampions: Champion[] = Object.entries(champions).map((champion) => {
		const [key, value] = champion
		return {
			codename: key,
			name: value.name
		}
	})
	championStore.set(loadedChampions)
}

getChampionsFromJSON()
