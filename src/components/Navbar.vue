<script setup>
const routes = [
	{ to: "/", text: "Connexion" },
	{ to: "/add-currency", text: "Ajouter une devise" },
	{ to: "/add-conversion", text: "Ajouter une conversion" },
];
</script>

<template>
	<div v-for="{ to, text } in routes" :key="to">
		<v-btn :to="to" variant="text">{{ text }}</v-btn>
		<v-divider vertical></v-divider>
	</div>
</template>
