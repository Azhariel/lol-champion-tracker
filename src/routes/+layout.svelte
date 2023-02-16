<script>
	import Tailwind from '../Tailwind.svelte'
</script>

<Tailwind />
<body class="bg-slate-900">
	<div class="p-8 max-w-8xl mx-auto text-gray-100 h-screen">
		<slot />
	</div>
</body>

<style>
	:root {
		--primary: rgb(15, 23, 42);
		--secondary: #334155;
	}
	*::-webkit-scrollbar {
		width: 15px;
	}
	*::-webkit-scrollbar-track {
		background: var(--primary);
		border-radius: 5px;
	}
	*::-webkit-scrollbar-thumb {
		background-color: var(--secondary);
		border-radius: 14px;
		border: 3px solid var(--primary);
	}
</style>
