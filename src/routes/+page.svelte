<script lang="ts">
	import autoAnimate from '@formkit/auto-animate'
	import Button from '../../components/Button.svelte'
	import ChampionPortrait from '../../components/ChampionPortrait.svelte'
	import { championStore, type Champion } from '../../stores/ChampionStore.js'
	let searchTerm: string = ''
	let filteredChampions: Champion[] = []
	let onlyAvailable: boolean = false
	let onlyCompleted: boolean = false

	$: {
		if (searchTerm) {
			filteredChampions = $championStore.filter((champion) =>
				champion.name.toLowerCase().includes(searchTerm.toLowerCase())
			)
		} else {
			filteredChampions = [...$championStore]
		}
	}
</script>

<svelte:head>
	<title>LoL Champion Challenge</title>
	<meta name="description" content="League of Legends Champion Tracker for completion challenges" />
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase font-title-bold text-gold-400">
	LoL Champion Challenge
</h1>
<div class="flex items-center flex-col">
	<!-- svelte-ignore a11y-autofocus -->
	<input
		class="bg-grey-600 border-slate-500 m-8 w-5/6 rounded-md text-lg p-4 border-2"
		type="text"
		placeholder="Search Champions"
		bind:value={searchTerm}
		autofocus
	/>
</div>
<div class="flex pb-8 justify-evenly w-auto ">
	<Button
		text="Random"
		handleClick={() => {
			onlyAvailable = false
			onlyCompleted = false
			const randomChampion = $championStore[Math.floor(Math.random() * $championStore.length)]
			searchTerm = randomChampion.name
		}}
	/>
	<Button
		text="Only Available"
		handleClick={() => {
			onlyAvailable = !onlyAvailable
			if (onlyAvailable) {
				onlyCompleted = false
				filteredChampions = $championStore.filter(
					(champion) => localStorage.getItem(champion.codename) !== 'true'
				)
			} else {
				filteredChampions = [...$championStore]
			}
			searchTerm = ''
		}}
		activated={onlyAvailable}
	/>
	<Button
		text="Only Completed"
		handleClick={() => {
			onlyCompleted = !onlyCompleted
			if (onlyCompleted) {
				onlyAvailable = false
				filteredChampions = $championStore.filter(
					(champion) => localStorage.getItem(champion.codename) === 'true'
				)
			} else {
				filteredChampions = [...$championStore]
			}
			searchTerm = ''
		}}
		activated={onlyCompleted}
	/>
	<Button
		text="Reset"
		handleClick={() => {
			onlyAvailable = false
			onlyCompleted = false
			searchTerm = ''
			filteredChampions = [...$championStore]
		}}
	/>
</div>
<div class="flex gap-4 flex-wrap justify-center" use:autoAnimate>
	{#each filteredChampions as champion}
		<ChampionPortrait name={champion.name} srcName={champion.codename} />
	{/each}
</div>
