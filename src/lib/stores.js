import {writable} from "svelte/store";

export const modalidades = writable([
    {
        name: 'Musculação',
        slug: 'musculacao',
        img: '/musculacao.avif'
    },
    {
        name: 'Crossfit',
        slug: 'crossfit',
        img: '/crossfit.avif'
    },
    {
        name: 'Alongamento',
        slug: 'alongamento',
        img: '/alongamento.avif'
    },
    {
        name: 'Exercícios em grupo',
        slug: 'exercicios',
        img: '/exercicios.avif'
    },
    {
        name: 'Natação',
        slug: 'natacao',
        img: '/natacao.avif'
    },
]);