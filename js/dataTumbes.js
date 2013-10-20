region = new museaMoz.Region('Tumbes');

	provincia = new museaMoz.Provincia('Tumbes');

		distrito = new museaMoz.Distrito('Corrales');

			museo = new museaMoz.Museo('Museo de Sitio Cabeza de Vaca "Gran Chilimasa"');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Exhibe bienes culturales provenientes de las diferentes temporadas de investigación institucional como: líticos, cerámicas, malacológicos, fragmentos de adobe con pintura mural; además explica la importancia de la zona arqueológica monumental Cabeza de Vaca y su relación con el Qhapaq Ñan a través de infografías');
			museo.direccion = 'Pasaje el Museo 117 Cabeza de Vaca - Norte - Corrales';
			museo.addAtencion('Lunes a viernes', '08:30 - 15:00');
			museo.addAtencion('Sábado', '08:30 - 14:30');
			museo.contacto.addEmail('tumbes@mcultura.gob.pe');
			museo.contacto.addTelefono('072', '521936');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

dataApp.push(region);