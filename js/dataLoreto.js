region = new museaMoz.Region('Loreto');

	provincia = new museaMoz.Provincia('Maynas');

		distrito = new museaMoz.Distrito('Iquitos');

			museo = new museaMoz.Museo('Museo Amazónico');
			museo.coleccion = 'Histórica y fotográfica';
			museo.addDescripcion('El museo está ubicado en un edificio construido en el año 1863, declarado Patrimonio Cultural de la Nación. En su interior se aprecia decoración mural, madera tallada y un conjunto de muebles antiguos');
			museo.addDescripcion('Resalta la colección de esculturas hechas en fibra de vidrio a escala natural confeccionadas por el artista plástico Felipe Lettersten y que representan a pobladores de las principales comunidades nativas de la Amazonía del Perú, Brasil y Venezuela');
			museo.addDescripcion('Comprende salas de exhibición temporal');
      museo.keywordFlickr = 'museo+amazonico+iquitos';
			museo.direccion = 'Malecón Tarapacá Nº 386';
			museo.addAtencion('Lunes a viernes', '09:00 - 12:30');
			museo.addAtencion('Lunes a viernes', '14:30 - 17:00');
			museo.contacto.addTelefono('065', '234031');
			museo.contacto.addEmail('loreto@mcultura.gob.pe');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Herbario Amazonense');
			museo.coleccion = 'Ciencias naturales';
			museo.addDescripcion('El museo exhibe ejemplares representativos de la ﬂora amazónica del Perú, considerada una de las más diversas del planeta, y cuenta con colecciones provenientes de otros países');
			museo.addDescripcion('Su colección brinda información sobre clasiﬁcación, distribución, temporadas de ﬂoración y fructiﬁcación, y hábitats de los grupos vegetales');
			museo.addDescripcion('En dos ambientes del museo se conservan ordenadamente muestras botánicas de investigadores regionales, nacionales y extranjeros');
			museo.addAtencion('Lunes a viernes', '08:00 - 14:00');
			museo.contacto.addEmail('fccbb@unapiquitos.edu.pe');
			museo.contacto.addTelefono('065', '222649');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

dataApp.push(region);
