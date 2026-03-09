<script>
	import favicon from '$lib/assets/favicon.svg';
	import '../app.css';

	let { children } = $props();
</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<title>Digitalbank — Next generation digital banking</title>
</svelte:head>

<div class="app">
	<header class="site-header">
		<div class="container site-header__inner">
			<a href="/" class="site-header__logo" aria-label="Digitalbank home">
				<img src="/images/logo-dark.svg" alt="" width="139" height="20" />
			</a>
			<nav class="site-header__nav" aria-label="Main">
				<a href="/#home">Home</a>
				<a href="/#about">About</a>
				<a href="/#contact">Contact</a>
				<a href="/articles">Blog</a>
				<a href="/#careers">Careers</a>
			</nav>
			<button type="button" class="site-header__cta">Request Invite</button>
		</div>
	</header>
	{@render children()}
</div>
