<script lang="ts">
	import ChampionPortrait from '../../components/ChampionPortrait.svelte'
	import { championStore } from '../../stores/ChampionStore.js'
</script>

<svelte:head>
	<title>LoL Champion Challenge</title>
	<meta name="description" content="A test app for the LoL Champion Challenge" />
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">LoL Champion Challenge</h1>

<div class="flex gap-4 flex-wrap justify-center">
	{#each $championStore as champion}
		<ChampionPortrait name={champion.name} srcName={champion.codename} />
	{/each}
</div>
