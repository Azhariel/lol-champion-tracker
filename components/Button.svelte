<script lang="ts">
	export let text: string
	export let handleClick: () => void
</script>

<button
	on:click={handleClick}
	class="bg-slate-700 border-slate-500 border-2 rounded-md text-center align-middle px-6 py-2 text-lg"
	>{text}</button
>
