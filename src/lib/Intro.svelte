<script>
    import imgMusculacao from '$lib/assets/musculacao.avif'
    import iconMuscle from '$lib/assets/icon-muscle.png';
    import imgExercicio from '$lib/assets/exercicios.avif';
    import iconWeight from '$lib/assets/icon-weight.png';
    import imgAlongamento from '$lib/assets/alongamento.avif';

    export let title = "Você está pronto para o desafio?";

    export let content = "A Top Academia está pronta para te ajudar a chegar mais longe e alcançar sua melhor performance.";

    export let btn = "Saiba mais";
    export let href = false;
    export let img = 'musculacao';
    if (img === 'musculacao') img = imgMusculacao;
    if (img === 'exercicios') img = imgExercicio;
    if (img === 'alongamento') img = imgAlongamento;

    export let icon;
    if (icon === 'muscle') icon = iconMuscle;
    if (icon === 'weight') icon = iconWeight;
</script>

<section class="intro" style="background-image: url({img})">
    <div class="intro__wrapper wrap">
        <h1>{@html title} <img src="{icon}" alt=""></h1>
        <p>{content}</p>

        {#if href}
        <a class="btn" href="{href}">{btn}</a>
        {/if}
    </div>
</section>

<style>
    .intro {
        min-height: 360px;
        background-size: cover;
        background-position: center;
        display: grid;
        align-content: center;
        justify-content: start;
        position: relative;
    }

    .intro::after {
        content: '';
        position: absolute;
        inset: 0;
        background-color: var(--overlay);
    }

    .intro__wrapper {
        z-index: 1;
        max-width: 450px;
    }

    .btn{
        margin-top: 24px;
    }

    p {
        font-size: calc(18 / 16 * 1rem);
        margin-top: 16px;
    }
    img{
    display: inline;
    max-width: 36px;
    }
</style>