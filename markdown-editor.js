var vm = new Vue({
	el: "#app",
	data: {
		rawMarkdown: '',
		renderedMarkdown: ''
	},
	methods: {
		renderPreview: function() {
			// POST request to GitHub API
			this.$http({
				url: 'https://api.github.com/markdown',
				method: 'POST',
				data: {text: this.rawMarkdown, mode: 'gfm'}
			}).then(function (response) {
				// success callback
				this.renderedMarkdown = response.data;
			}, function (response) {
				// error callback
				console.log(response.data);
			});
		}
	}
});