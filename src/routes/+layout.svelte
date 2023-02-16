<script>
	import Tailwind from '../Tailwind.svelte'
</script>

<Tailwind />

<body class="bg-slate-900">
	<div class="p-8 max-w-8xl mx-auto text-gray-100 h-screen">
		<slot />
	</div>
</body>
