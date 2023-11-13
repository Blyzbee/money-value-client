import { createRouter, createWebHistory } from "vue-router";

import Login from "../views/Login.vue";
import AddCurrency from "../views/AddCurrency.vue";
import AddConversion from "../views/AddConversion.vue";

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: "/",
			name: "login",
			component: Login,
		},
		{
			path: "/add-currency",
			name: "AddCurrency",
			component: AddCurrency,
		},
		{
			path: "/add-conversion",
			name: "AddConversion",
			component: AddConversion,
		},
	],
});

export default router;
