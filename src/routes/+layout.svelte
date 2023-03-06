<script>
	import '../Tailwind.css'
	import beaufortFont from '../../static/BeaufortforLOL-Regular.otf'
	import spiegelFont from '../../static/Spiegel-Regular.otf'
</script>

<body class="bg-grey-600">
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

	@font-face {
		font-family: 'Spiegel';
		src: url('/Spiegel-Regular.otf') format('opentype');
	}

	@font-face {
		font-family: 'Beaufort for LOL';
		src: url('/BeaufortforLOL-Regular.otf') format('opentype');
	}
</style>
