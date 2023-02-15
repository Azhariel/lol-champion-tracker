<script lang="ts">
	import ChampionPortrait from '../../components/ChampionPortrait.svelte'
	import { championStore } from '../../stores/ChampionStore.js'
</script>

<svelte:head>
	<title>LoL Champion Challenge</title>
	<meta name="description" content="A test app for the LoL Champion Challenge" />
</svelte:head>
<h1>LoL Champion Challenge</h1>

<div class="gallery">
	{#each $championStore as champion}
		<ChampionPortrait name={champion.name} srcName={champion.codename} />
	{/each}
</div>

<style>
	.gallery {
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}
	h1 {
		text-align: center;
	}
</style>
