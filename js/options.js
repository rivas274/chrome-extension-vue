new Vue({
    el:".container-fluid",
    data:{
		tiempo:{
			hora: 0,
			minuto: 0,
			segundo: 0
    	},
    },
    methods: {
		cronometro: function () {
			var h= this.tiempo.hora;
			var m= this.tiempo.minuto;
			var s= this.tiempo.segundo;
			h=(m<60) ? h : (h+1);
			m=(s<60) ? m : (m+1);
			s=(s<60) ? (s+1) : 0;
			this.tiempo = { hora: h , minuto: m, segundo: s};
			console.log(JSON.stringify(this.tiempo));
			if(this.tiempo.minuto<2){
				setTimeout(function(){
					this.cronometro();
				}.bind(this), 1000);
			}
		},
	},
    computed: {
		
	},
    ready: function () {
	}
});