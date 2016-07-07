var option=new Vue({
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
			h=(m <= 59) ? h : (h+1);
			m=(s <= 59) ? m : (m+1);
			s=(s <= 59) ? (s+1) : 0;
			this.tiempo = { hora: h , minuto: m, segundo: s};
			
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

