Vue.component('cronometro',{
	template:"#cronometro",
	props: {
		'contador':{
			type: Object,
			required: true
		}
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
				if(this.contador.contar){
					this.cronometro();
				}
			}.bind(this), 1000);
		},
		detener: function () {
			this.contador.contar=false;
		},
		borrarhijo() {
			/*this.$dispatch(this.contador);*/
			console.log(this.contador);
            this.$parent.borrar(this.contador);
        }
	},
})
var option=new Vue({
    el:".container-fluid",
    data:{
		contador_new:{
				hora:"00:00:00",
				time:0,
				contar:false,
				tipo:'+'
			},
		contador:[],
    },
    methods: {
		agregar: function (contador) {
			this.contador.push(contador);
			this.limpiar();
		},
		limpiar: function () {
			this.contador_new={
				hora:"00:00:00",
				time:0,
				contar:false,
				tipo:'+'
			}
		},
		borrar(contador) {
			console.log(this.contador+contador);
			this.contador.$remove(contador);
        }
	},
  	computed: {
	},
	ready: function () {
	}
});

