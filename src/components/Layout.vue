<template>
	<div class="layout">{{msg}}</div>
</template>

<script>
export default {
	data() {
		return {
			msg: '',
		}
	},
	created() {
		this.load()
	},
	methods: {
		load() {
			this.$axios
				.get('/login')
				.then(({ data }) => {
					this.msg = data.msg
				})
				.catch(err => {
					this.$message.error(err.message)
				})
		},
	},
}
</script>

<style scoped>
</style>
