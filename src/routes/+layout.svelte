<script>
    import '../global.css'
    import '@fontsource/roboto-condensed';
    import '@fontsource/roboto-condensed/700.css';
    import '@fontsource-variable/cabin';
	import Header from '$lib/Header.svelte';
</script>

<div class="layout">
    <Header/>
    <main class="main">
        <slot/>
    </main>
</div>
