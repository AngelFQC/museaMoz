var dataApp = new Array();

museaMoz = {
	Region : function (_nombre) {
		this.nombre = _nombre;
		this.provincias = new Array();
	},

	Provincia : function (_nombre) {
		this.nombre = _nombre;
		this.distritos = new Array();
	},

	Distrito : function (_nombre) {
		this.nombre = _nombre;
		this.museos = new Array();
	},

	Museo : function (_nombre) {
		this.nombre = _nombre;
		this.coleccion = '';
		this.descripcion = new Array();
		this.direccion = '';
    this.keywordFlick = '';
		this.coordenadas = new museaMoz.Coordenadas(null, null);
		this.atencion = new Array();
		this.contacto = new museaMoz.Contacto();
		this.costos = new Array();

		this.addDescripcion = function (_descripcion) {
			this.descripcion.push(_descripcion);
		}

		this.addAtencion = function (_dias, _horario) {
			this.atencion.push(new museaMoz.Atencion(_dias, _horario));
		}

		this.addCosto = function (_concepto, _precio) {
			this.costos.push(new museaMoz.Costo(_concepto, _precio));
		}

		this.setCoordenadas = function (_latitud, _longitud) {
			this.coordenadas.latitud = _latitud;
			this.coordenadas.longitud = _longitud;
		}
	},

	Coordenadas : function (_latitud, _longitud) {
		this.latitud = _latitud;
		this.longitud = _longitud;
	},

	Atencion : function (_dias, _horario) {
		this.dias = _dias;
		this.horario = _horario;
	},

	Contacto : function () {
		this.emails = new Array();
		this.telefonos = new Array();
		this.web = null;

		this.addEmail = function (_email) {
			this.emails.push(_email);
		}

		this.addTelefono = function (_codigo, _numero) {
			this.telefonos.push(new museaMoz.Telefono(_codigo, _numero));
		}
	},

	Telefono : function (_codigo, _numero) {
		_codigo = _codigo.replace(/(0{1})([0-9]{0,2})/, "$2");

		this.numeroMarcar = '+51' + _codigo + _numero;
		this.numeroMostrar = '(0' + _codigo + ') ' + _numero;
	},

	Costo : function (_concepto, _precio) {
		this.concepto = _concepto;
		this.precio = (new Number(_precio)).toFixed(2);
	}
}

var region, provincia, distrito, museo;
