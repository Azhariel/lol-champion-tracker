<script lang="ts">
	export let name: string
	export let srcName: string
	const handleClick = (event: { target: any }) => {
		if (localStorage.getItem(event.target.id) === 'true') {
			localStorage.setItem(event.target.id, 'false')
			event.target.style.filter = 'brightness(0.2)'
			return
		}
		localStorage.setItem(event.target.id, 'true')
		event.target.style.filter = 'brightness(1)'
	}
	let brightness = 0.2
	$: {
		if (typeof window !== 'undefined')
			localStorage.getItem(srcName) === 'true' ? (brightness = 1) : (brightness = 0.2)
	}
</script>

<div>
	<div class="w-[220px] h-[400px] rounded-xl overflow-hidden">
		<div class="h-full overflow-hidden">
			<img
				src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/{srcName}_0.jpg"
				alt={name}
				id={srcName}
				on:click={handleClick}
				on:keydown={handleClick}
				style="filter: brightness({brightness})"
				class="w-full h-full transition duration-300 ease-in-out hover:scale-110"
			/>
		</div>
	</div>
	<div class="text-center text-base p-1">{name}</div>
</div>
