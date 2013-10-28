region = new museaMoz.Region('Cusco');

	provincia = new museaMoz.Provincia('Cusco');

		distrito = new museaMoz.Distrito('Cusco');

			museo = new museaMoz.Museo('Museo Histórico Regional del Cusco');
			museo.coleccion = 'Arqueológica, histórico-artística, etnográfica';
			museo.addDescripcion('El museo ocupa la casa del cronista mestizo Inca Garcilaso de la Vega');
			museo.addDescripcion('En sus catorce salas se exhiben bienes culturales arqueológicos, etnográficos e histórico-artísticos, entre los que destacan pinturas de la Escuela Cusqueña');
      museo.keywordFlickr = 'casa+garcilaso';
			museo.direccion = 'Calle Heladeros s/n Casa del Inca Garcilaso de la Vega';
			museo.addAtencion('Lunes a sábado', '08:00 - 18:00');
			museo.addAtencion('Domingo', '09:00 - 13:00');
			museo.contacto.addEmail('museos@drc-cusco.gob.pe');
			museo.contacto.addTelefono('084', '223245');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Urubamba');

		distrito = new museaMoz.Distrito('Chincheros');

			museo = new museaMoz.Museo('Museo de Sitio Chincheros');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('La mayor parte de bienes culturales que exhibe este museo proviene de las investigaciones arqueológicas desarrolladas en la zona');
			museo.addDescripcion('Posee metales, cerámica ceremonial y utilitaria, morteros y una escultura lítica que representa un puma');
			museo.addDescripcion('La colección etnográfica está conformada por instrumentos de labranza, textiles y vestimenta típica de la zona');
      museo.keywordFlickr = 'museo+chincheros';
			museo.direccion = 'Plazoleta del Conjunto Arqueológico de Chincheros';
			museo.addAtencion('Martes a domingo', '09:00 - 19:00');
			museo.contacto.addEmail('museos@drc-cusco.gob.pe');
			museo.contacto.addTelefono('084', '223245');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('Machu Picchu');

			museo = new museaMoz.Museo('Museo de Sitio Manuel Chávez Ballón');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El museo se ubica a 1.7 km. de Aguas Calientes');
      museo.addDescripcion('La exhibición comprende cerámica, líticos, metales, osamentas, entre otros, procedentes de las investigaciones realizadas en el Santuario Histórico de Machu Picchu');
      museo.keywordFlickr = 'museo+machu+picchu';
      museo.direccion = 'Altura del Antiguo Puente Ruinas, km. 112 vía férrea';
			museo.addAtencion('Lunes a domingo', '09:00 - 16:30');
			museo.contacto.addEmail('museodesitiomapi@drc-cusco.gob.pe');
			museo.contacto.addTelefono('084', '211067');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

dataApp.push(region);
