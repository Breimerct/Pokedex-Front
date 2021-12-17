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
        path: "/settings",
        name: "settings",
        component: () => import("../views/Settings"),
      },
    ],
  },
  {
    path: "*",
    name: "notFound",
    component: () => import("../views/Error404.vue"),
  },
];

export default routes;
