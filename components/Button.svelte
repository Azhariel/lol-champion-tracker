<script lang="ts">
	export let text: string
	export let handleClick: () => void
	export let activated = false
</script>

<button
	on:click={() => {
		handleClick()
	}}
	class="border-slate-500 border-2 rounded-md text-center align-middle px-6 py-2 text-lg bg-blue-400 "
	class:selected={activated}
	>{text}
</button>

<style>
	.selected {
		background-color: rgb(200 155 60 / var(--tw-bg-opacity));
	}
</style>
