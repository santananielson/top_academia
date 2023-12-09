<script>
    export let name;
    export let description;

    let siteName = 'Top Academia';
    let separator = ' - '
</script>

<svelte:head>
    <title>{name}{separator}{siteName}</title>
    <meta name="description" content="{description}">
</svelte:head>