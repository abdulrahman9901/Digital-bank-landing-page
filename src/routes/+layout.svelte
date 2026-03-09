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
				<a href="/">Home</a>
				<a href="/about">About</a>
				<a href="/contact">Contact</a>
				<a href="/articles">Blog</a>
				<a href="/careers">Careers</a>
			</nav>
			<a href="#request-invite" class="button site-header__cta">Request Invite</a>
		</div>
	</header>
	{@render children()}
	<footer class="site-footer">
		<div class="container site-footer__inner">
			<div class="site-footer__brand">
				<a href="/" class="site-footer__logo" aria-label="Digitalbank home">
					<img src="/images/logo-light.svg" alt="" width="139" height="20" />
				</a>
				<nav class="site-footer__social-wrap" aria-label="Social media">
					<ul class="site-footer__social">
						<li><a href="#" aria-label="Facebook"><img src="/images/icon-facebook.svg" alt="" width="20" height="20" /></a></li>
						<li><a href="#" aria-label="YouTube"><img src="/images/icon-youtube.svg" alt="" width="20" height="20" /></a></li>
						<li><a href="#" aria-label="Twitter"><img src="/images/icon-twitter.svg" alt="" width="20" height="20" /></a></li>
						<li><a href="#" aria-label="Pinterest"><img src="/images/icon-pinterest.svg" alt="" width="20" height="20" /></a></li>
						<li><a href="#" aria-label="Instagram"><img src="/images/icon-instagram.svg" alt="" width="20" height="20" /></a></li>
					</ul>
				</nav>
			</div>
			<nav class="site-footer__nav" aria-label="Footer">
				<ul class="site-footer__links site-footer__links--col1">
					<li><a href="/about">About Us</a></li>
					<li><a href="/contact">Contact</a></li>
					<li><a href="/articles">Blog</a></li>
				</ul>
				<ul class="site-footer__links site-footer__links--col2">
					<li><a href="/careers">Careers</a></li>
					<li><a href="/support">Support</a></li>
					<li><a href="/privacy">Privacy Policy</a></li>
				</ul>
			</nav>
			<div class="site-footer__cta-wrap">
				<a href="#request-invite" class="button site-footer__cta">Request Invite</a>
				<p class="site-footer__copy">© Digitalbank. All Rights Reserved</p>
			</div>
		</div>
	</footer>
</div>
