<template>
	<div class="min-h-screen flex items-center justify-center bg-gray-100">
		<div class="bg-white p-8 rounded shadow-md w-96">
			<h1 class="text-2xl font-semibold mb-4">Ajouter une devise</h1>
			<form @submit.prevent="addCurrency">
				<div class="mb-4">
					<label for="code" class="block text-gray-600 text-sm font-medium mb-2"
						>Code de la devise</label
					>
					<input
						type="text"
						v-model="code"
						id="code"
						name="code"
						class="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
					/>
				</div>
				<div class="mb-4">
					<label for="name" class="block text-gray-600 text-sm font-medium mb-2"
						>Nom de la devise</label
					>
					<input
						type="text"
						v-model="name"
						id="name"
						name="name"
						class="w-full border p-2 rounded focus:outline-none focus:border-blue-500"
					/>
				</div>
				<button
					type="submit"
					class="w-full bg-green-500 text-white p-2 rounded"
				>
					Ajouter la devise
				</button>
			</form>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			code: "",
			name: "",
		};
	},
	methods: {
		addCurrency() {
			console.log("Tentative d'ajout de devise avec", this.code, this.name);
			// axios.post('/api/currencies', { code: this.code, name: this.name })
			//   .then(res => {
			//     console.log(res);
			//   })
			//   .catch(err => {
			//     console.error('err);
			//   });
		},
	},
};
</script>

<style scoped></style>
