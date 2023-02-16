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
	<div class="card">
		<div class="image-container">
			<img
				src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/{srcName}_0.jpg"
				alt={name}
				id={srcName}
				on:click={handleClick}
				on:keydown={handleClick}
				style="filter: brightness({brightness})"
			/>
		</div>
	</div>
	<div class="name">{name}</div>
</div>

<style>
	.card {
		width: 220px;
		height: 400px;
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
		border-radius: 10px;
		overflow: hidden;
		transition: box-shadow 0.3s;
	}

	.card:hover {
		box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
	}

	.image-container {
		height: 100%;
		position: relative;
		overflow: hidden;
	}

	img {
		height: 100%;
		width: 100%;
		object-fit: fill;
		transition: transform 0.3s;
	}

	.card:hover img {
		transform: scale(1.1);
	}

	.name {
		padding: 0.5rem;
		font-size: 1.2rem;
		text-align: center;
	}
</style>
