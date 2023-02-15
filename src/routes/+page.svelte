<script lang="ts">
	import ChampionPortrait from '../../components/ChampionPortrait.svelte'
	import champions from '../../data/champions.json'
</script>

<svelte:head>
	<title>LoL Champion Challenge</title>
	<meta name="description" content="A test app for the LoL Champion Challenge" />
</svelte:head>
<h1>LoL Champion Challenge</h1>

<div class="gallery">
	{#each Object.keys(champions) as champion}
		<ChampionPortrait name={champions[champion].name} srcName={champion} />
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
