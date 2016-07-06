new Vue({
    el:".container-fluid",
    data:{
        nombre:"",
    },
    methods: {
    },
    computed: {
		validation: function () {
			return {
				name: !!this.newUser.name.trim(),
				email: emailRE.test(this.newUser.email),
				address: !!this.newUser.address.trim()
			}
		}
	},
    ready: function () {
	}
});