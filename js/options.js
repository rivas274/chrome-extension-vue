var option=new Vue({
    el:".container-fluid",
    data:{
		contador:{hora:"00:00:00",time:0,contar:false},
    },
    methods: {
		temporizador: function () {
			this.contador.time=moment(this.contador.hora, "H[h]:mm[m]:ss[s]");
			if(!this.contador.contar){
				this.cronometro();
				this.contador.contar=true;
			}
		},
		cronometro: function () {
			setTimeout(function(){
				time=moment(this.contador.time).subtract(1, 's');
			/*	time=moment(this.contador.time).add(1, 's');*/
				this.contador.time=time;
				this.contador.hora=moment(time).format('HH:mm:ss');
				this.cronometro();
			}.bind(this), 1000);
		}
	},
  	computed: {
	},
	ready: function () {
	}
});

