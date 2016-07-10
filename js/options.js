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
			this.contador.time=moment(this.contador.hora, "HH:mm:ss");
			if(!this.contador.contar){
				this.contador.contar=true;
				this.cronometro();
			}
		},
		cronometro: function () {
			setTimeout(function(){
				timeOrigin=moment(this.contador.time);
				if(this.contador.contar){
					if(this.contador.tipo=='+')
						time=timeOrigin.add(1, 's');
					if(this.contador.tipo=='-'&& this.temporizadorValido()){
						time=timeOrigin.subtract(1, 's');
					}
					this.contador.time=time;
					this.contador.hora=moment(time).format('HH:mm:ss');
					this.cronometro();
				}
			}.bind(this), 1000);
		},
		temporizadorValido:function () {
			valid=(moment(this.contador.time).diff(moment('00:00:00',"HH:mm:ss"),'HH:mm:ss')>0);
			if(valid)return true;
			this.detener();
			return false;
			
		},
		detener: function () {
			this.contador.contar=false;
		},
		borrarhijo() {
            this.$parent.borrar(this.contador);
        }
	},
  	computed: {
		labelInput:function () {
			return (this.contador.contar) ? true : (this.contador.tipo== "-");
		},
	},
})
var option=new Vue({
    el:".container-fluid",
    data:{
		contador_new:{
				hora:"00:00:00",
				time:"00:00:00",
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
				time:"00:00:00",
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