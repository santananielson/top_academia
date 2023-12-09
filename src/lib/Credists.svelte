<div class="credits">
    <div class="credits__wrapper wrap">
        <span>© Top Academia, 2023</span>
        <span>Desenvolvido por <a href="https://santananielson.github.io/dev-links/" style="color:#FF3E00; text-decoration:none;" target="_blank">Nielson Santana</a></span>
    </div>        
</div>

<style>
    .credits {
        margin-top: 60px;
    }
    .credits__wrapper {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
    .credits__wrapper::before {
        content: '';
        display: flex;
        width: 100%;
        height: 1px;
        background-color: var(--subtle);
    }
    span {
        display: inline-block;
        font-size: calc(14 / 16 * 1rem);
        padding-top: 24px;
        padding-bottom: 24px;
    }

    /* Adicione a media query para telas menores que 800px */
    @media (max-width: 800px) {
        .credits__wrapper {
            flex-direction: column; /* Exibe os itens um abaixo do outro */
            align-items: center; /* Centraliza os itens horizontalmente */
        }
        /* Ajuste o espaçamento inferior (margin-bottom) nas spans */
        span {
         margin-bottom: -30px; /* Ajuste conforme necessário */
        }
    }
</style>
