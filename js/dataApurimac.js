region = new museaMoz.Region('Apurímac');

	provincia = new museaMoz.Provincia('Abancay');

		distrito = new museaMoz.Distrito('Abancay');

			museo = new museaMoz.Museo('Museo Arqueológico, Antropológico de Apurímac');
			museo.coleccion = 'Arqueológica e histórico-artística';
			museo.addDescripcion('El museo se ubica en el emplazamiento de un antiguo trapiche');
			museo.addDescripcion('En sus salas se exhiben más de doscientos bienes culturales de cerámica, líticos, osamentas, metales, textiles, de material orgánico, queros, sandalias de cuero, mates pirograbados, instrumentos textiles y una momia, pertenecientes a las culturas Wari y Chanka');
			museo.addDescripcion('Además exhibe una colección de bienes culturales histórico-artísticos');
      museo.keywordFlickr = 'museo+illanya';
			museo.direccion = 'Casa Hacienda Illanya s/n Anexo Illanya';
			museo.addAtencion('Martes a domingo', '08:30 - 17:00');
			museo.contacto.addEmail('apurimac@mcultura.gob.pe');
			museo.contacto.addTelefono('083', '783178');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

dataApp.push(region);
