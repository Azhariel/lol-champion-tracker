<script lang="ts">
	export let name: string
	export let srcName: string
</script>

<div>
	<div class="card">
		<div class="image-container">
			<img
				src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/{srcName}_0.jpg"
				alt={name}
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
