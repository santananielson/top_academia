<script>
    import Intro from '$lib/Intro.svelte';
	import Card from '$lib/Card.svelte';
    import {modalidades} from '$lib/stores';
	import Seo from '$lib/Seo.svelte';

    console.log($modalidades);
</script>

<Seo
    name="Modalidades"
    description="A Top Academia tem várias modalidades para que você tenha a melhor experiência possível!"
/>

<Intro
    title="Temos a modalidade certa
    para você"
    content="Descubra as diversas modalidades da nossa academia."
    img="alongamento"
    icon="weight"
/>

<section class="modalidades">
    <div class="modalidades__wrapper wrap">
        {#each $modalidades as modalidade}
          <Card info={modalidade}/>  
        {/each}
    </div>
</section>

<style>
    .modalidades {
        margin-top: 60px;
    }
    .modalidades__wrapper{
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: center;
    }
</style>