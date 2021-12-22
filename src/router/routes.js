const routes = [
  {
    path: "/",
    component: () => import("../layouts/MainLayout.vue"),
    redirect: {
      name: "home",
    },
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/Home"),
      },
      {
        path: "/pokedex",
        name: "pokedex",
        component: () => import("../views/pokedex/Pokedex"),
      },
      {
        path: "/pokemon-datail/:pokemonName",
        name: "pokemonDetail",
        component: () => import("../views/pokedex/PokemonDetail"),
      },
      {
        path: "/settings",
        name: "settings",
        component: () => import("../views/Settings"),
      },
    ],
  },
  {
    path: "*",
    redirect: "404",
  },
  {
    path: "/404",
    name: "404",
    component: () => import("../views/NotFound"),
  },
];

export default routes;
