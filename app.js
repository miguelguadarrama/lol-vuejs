var app = new Vue({
	el: '#app',
	data: () => ({
		version: '8.17.1',
		champions: null
	}),
	mounted() {
		axios
			.get('http://ddragon.leagueoflegends.com/cdn/8.17.1/data/en_US/champion.json')
			.then(response => {
				this.champions = Object.keys(response.data.data).map(c => {
					return response.data.data[c]
				})
			})
	}
})