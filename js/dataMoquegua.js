region = new museaMoz.Region('Moquegua');

	provincia = new museaMoz.Provincia('Ilo');

		distrito = new museaMoz.Distrito('El Algarrobal');

			museo = new museaMoz.Museo('Museo Municipal de Sitio "El Algarrobal"');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Actualmente se denomina Museo Chiribaya');
			museo.addDescripcion('Exhibe cerámicas, textiles, material orgánico, restos humanos, restos animales y botánicos de la cultura Chiribaya, provenientes en los proyectos de investigación realizados en la zona');
      museo.keywordFlickr = 'museo+el+algarrobal';
			museo.direccion = 'El Algarrobal s/n';
			museo.addAtencion('Lunes a viernes', '08:00 - 15:30');
			museo.addAtencion('Sábado, domingo y feriado', '09:00 - 14:00');
			museo.contacto.addEmail('museo_chiribaya@munialgarrobal.gob.pe');
			museo.contacto.addTelefono('053', '837103');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Naval Sede Ilo');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('Se exhiben bienes de la Guerra del Pacífico de valor histórico');
			museo.direccion = 'Calle Costa Azul';
			museo.addAtencion('Lunes a sábado', '09:00 - 13:00');
			museo.addAtencion('Lunes a sábado', '14:00 - 17:00');
			museo.contacto.addEmail('capitania.ilo@dicapi.mil.pe');
			museo.contacto.addTelefono('053', '781151');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Mariscal Nieto');

		distrito = new museaMoz.Distrito('Moquegua');

			museo = new museaMoz.Museo('Museo Contisuyo');
			museo.coleccion = 'Arqueológica e histórica';
			museo.addDescripcion('La infraestructura del museo está inspirada en la tradición arquitectónica de la región');
			museo.addDescripcion('Exhibe bienes culturales recuperados en las investigaciones arqueológicas realizadas en la región, en el marco de la secuencia cronológica de la historia regional de Moquegua, desde la prehistoria hasta el imperio Inca');
      museo.keywordFlickr = 'museo+contisuyo';
			museo.direccion = 'Jr. Tacna 294 y/o Calle Moquegua s/n Plaza de Armas';
			museo.addAtencion('Lunes a domingo', '08:00 - 13:00');
			museo.addAtencion('Lunes a domingo', '14:30 - 17:30');
			museo.addAtencion('Martes', '08:00 - 12:00');
			museo.addAtencion('Martes', '16:00 - 20:00');
			museo.contacto.addEmail('muscont@terra.com.pe');
			museo.contacto.addTelefono('053', '463521');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

dataApp.push(region);
