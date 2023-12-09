<script>
    export let description;

    let siteName = 'Top Academia';
    let separator = ' - '
</script>

<svelte:head>
    <title>{siteName}{separator}A Academia pertinho de você!</title>
    <meta name="description" content="{description}">
</svelte:head>