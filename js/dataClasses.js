var dataApp = new Array();

museaMoz = {
	Region : function (_nombre) {
		this.nombre = _nombre;
		this.provincias = new Array();

		this.addProvincia = function (_provincia) {
			var iPro = this.provincias.length;

			this.provincias[iPro] = _provincia;
		}
	},

	Provincia : function (_nombre) {
		this.nombre = _nombre;
		this.distritos = new Array();

		this.addDistrito = function (_distrito) {
			var iDis = this.distritos.length;

			this.distritos[iDis] = _distrito;
		}
	},

	Distrito : function (_nombre) {
		this.nombre = _nombre;
		this.museos = new Array();

		this.addMuseo = function (_museo) {
			var iMu = this.museos.length;

			this.museos[iMu] = _museo;
		}
	},

	Museo : function (_nombre) {
		this.nombre = _nombre;
		this.coleccion = '';
		this.descripcion = new Array();
		this.direccion = '';
		this.coordenadas = new museaMoz.Coordenadas(null, null);
		this.atencion = new Array();
		this.contacto = new museaMoz.Contacto();

		this.addDescripcion = function (_descripcion) {
			var iDes = this.descripcion.length;

			this.descripcion[iDes] = _descripcion;
		}

		this.addAtencion = function (_dias, _horario) {
			var iA = this.atencion.length;

			this.atencion[iA] = new museaMoz.Atencion(_dias, _horario);
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
			var iEm = this.emails.length;

			this.emails[iEm] = _email;
		}

		this.addTelefono = function (_codigo, _numero) {
			var iTe = this.telefonos.length;

			this.telefonos[iTe] = new museaMoz.Telefono(_codigo, _numero);
		}
	},

	Telefono : function (_codigo, _numero) {
		_codigo = _codigo.replace(/(0{1})([0-9]{0,2})/, "$2");

		this.numeroMarcar = '+51' + _codigo + _numero;
		this.numeroMostrar = '(0' + _codigo + ') ' + _numero;
	}
}

function addRegion(_region) {
	var iDe = dataApp.length;

	dataApp[iDe] = _region;
}

var region, provincia, distrito, museo;