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
        component: () => import("../views/About"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "*",
    component: () => import("../views/Error404.vue"),
  },
];

export default routes;
