<template>
	<div class="min-h-screen flex items-center justify-center bg-gray-100">
		<div class="bg-white p-8 rounded shadow-md w-96">
			<h1 class="text-2xl font-semibold mb-4">Connexion</h1>
			<form @submit.prevent="login">
				<div class="mb-4">
					<label
						for="username"
						class="block text-gray-600 text-sm font-medium mb-2"
						>Nom d'utilisateur</label
					>
					<input
						type="text"
						v-model="username"
						id="username"
						name="username"
						class="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div class="mb-4">
					<label
						for="password"
						class="block text-gray-600 text-sm font-medium mb-2"
						>Mot de passe</label
					>
					<input
						type="password"
						v-model="password"
						id="password"
						name="password"
						class="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
					/>
				</div>
				<button type="submit" class="w-full bg-blue-500 text-white p-2 rounded">
					Se connecter
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			username: "",
			password: "",
		};
	},
	methods: {
		login() {
			console.log("Tentative de connexion avec", this.username, this.password);
		},
	},
};
</script>

<style scoped></style>
