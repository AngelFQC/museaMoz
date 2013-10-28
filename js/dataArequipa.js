region = new museaMoz.Region('Arequipa');

	provincia = new museaMoz.Provincia('Arequipa');

		distrito = new museaMoz.Distrito('Arequipa');

			museo = new museaMoz.Museo('Museo Arqueológico de la Universidad Católica de Santa María');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Se encuentra ubicado en el Centro Histórico de Arequipa');
			museo.addDescripcion('En sus siete salas de exposición se aprecian bienes culturales cerámicos, líticos, textiles y fardos funerarios de estilos y culturas que muestran el desarrollo cultural de Arequipa, desde la presencia de cazadores recolectores alto andinos hace 7000 años hasta la llegada de los españoles. Asimismo, posee una valiosa colección de vasos ceremoniales');
      museo.keywordFlickr = 'museo+ucsm';
			museo.direccion = 'Calle Cruz Verde 303';
			museo.addAtencion('Lunes a viernes', '08:00 - 16:00');
			museo.contacto.addTelefono('054', '286613');
			museo.contacto.addTelefono('054', '200345');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Arqueológico José María Morante de la Universidad Nacional de San Agustín');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Ubicado en un edificio histórico declarado Patrimonio Cultural de la Nación, en las salas de este museo se exhibe una colección de bienes culturales líticos y cerámica de las culturas Nasca, Tiahuanaco, Wari, Chiribaya, Churajón, Chuquibamba e Inca, así como textiles Nasca, Wari e Inca');
      museo.keywordFlickr = 'museo+unsa';
			museo.direccion = 'Calle Álvarez Thomas 200';
			museo.addAtencion('Lunes a viernes', '08:15 - 16:15');
			museo.contacto.web = 'www.unsa.edu.pe';
			museo.contacto.addTelefono('054', '288881');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Convento La Recoleta');
			museo.coleccion = 'Arqueológica, histórico-artística y etnográfica';
			museo.addDescripcion('En cuatro claustros del antiguo convento franciscano se encuentra el Museo de Arte Precolombino y Sala Fernández, que exhibe bienes culturales prehispánicos de cerámica, textiles y restos humanos; la Pinacoteca, el Museo Amazónico, el Museo Etnográfico y el Museo de Arte Religioso, que presentan bienes culturales histórico-artísticos y etnográficos; y la Biblioteca, que conserva documentos que datan del siglo XVI');
      museo.keywordFlickr = 'museo+la+recoleta+arequipa';
			museo.direccion = 'Calle La Recoleta 117';
			museo.addAtencion('Lunes a sábado', '09:00 - 12:00');
			museo.addAtencion('Lunes a sábado', '15:00 - 17:00');
			museo.contacto.addEmail('convento_la_recoleta@hotmail.com');
			museo.contacto.addTelefono('054', '270966');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Arte Contemporáneo');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('La casona del museo está ubicada en el denominado barrio inglés de Arequipa');
			museo.addDescripcion('Está distribuido en doce salas que exhiben una colección de pinturas, esculturas, grabados y fotografías de artistas peruanos y extranjeros contemporáneos, como Fernando de Szyszlo, Venancio Shinki, Eduardo Moll, Leoncio Villanueva, Eduardo Tokeshi, los Hermanos Vargas, entre otros');
      museo.keywordFlickr = 'museo+arte+contemporaneo+arequipa';
			museo.direccion = 'Tacna y Arica 201';
			museo.addAtencion('Lunes a viernes', '10:00 - 16:30');
			museo.addAtencion('Sábado y domingo', '10:00 - 13:00');
			museo.contacto.addEmail('mac_arequipa@yahoo.es');
			museo.contacto.addTelefono('054', '221068');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Arte Virreinal de Santa Teresa');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('El Convento de Santa Teresa, fundado en 1710 por la Orden de las Carmelitas Descalzas, cuenta con una Sala de Interpretación de Arte Virreinal y posee una colección de bienes culturales como pinturas, esculturas, pinturas murales, ornamentos religiosos, trabajos en metal y mobiliario, entre otros, de uso cotidiano de la comunidad religiosa');
      museo.keywordFlickr = 'museo+santa+teresa';
			museo.direccion = 'Calle Melgar 303';
			museo.addAtencion('Lunes a sábado', '09:00 - 17:00');
			museo.addAtencion('Domingo', '09:00 - 13:00');
			museo.contacto.addEmail('museocarmelitas@yahoo.es');
			museo.contacto.addTelefono('054', '281188');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de la Ciudad de Arequipa');
			museo.coleccion = 'Fotográfica e histórica';
			museo.addDescripcion('Se encuentra ubicado en el edificio de la Municipalidad Provincial de Arequipa, en el centro histórico de la ciudad');
			museo.addDescripcion('Está distribuido en seis salas y presenta una colección de fotografías, videos y maquetas de los procesos constructivos y del desarrollo edilicio de la ciudad de Arequipa');
      museo.keywordFlickr = 'plaza+armas+arequipa';
			museo.direccion = 'Plaza de Armas, Portal de la Municipalidad';
			museo.addAtencion('Lunes a viernes', '09:00 - 17:00');
			museo.contacto.addTelefono('054', '204081');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo del Banco Central de Reserva de Arequipa');
			museo.coleccion = 'Numismática, histórico-artística y arqueológica';
			museo.addDescripcion('El museo está ubicado en el edificio del Banco Central de Reserva de Arequipa y está distribuido en cuatro ambientes: Sala la Moneda en el Perú, que muestra la colección de billetes emitidos e impresos en esta ciudad durante la República; la Sala Arqueología Peruana, con bienes culturales prehispánicos de cerámica y metal de las culturas Chavín, Virú, Vicús, Moche, Nasca, Recuay, Chimú e Inca; la Pinacoteca, que exhibe pinturas de la Escuela Cusqueña de autores anónimos del siglo XVIII; y la Sala de Colección de Esculturas Virreinales');
			museo.direccion = 'Calle La Merced 205';
			museo.addAtencion('Lunes a viernes', '09:00 - 17:00');
			museo.contacto.addEmail('sucursal.arequipa@bcrp.gob.pe');
			museo.contacto.addTelefono('054', '211281');
			museo.contacto.addTelefono('054', '212251');
			museo.contacto.addTelefono('054', '212201');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo del Monasterio de Santa Catalina');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('El monasterio de época colonial alberga colecciones de bienes culturales histórico-artísticos de los siglos XVII, XVIII y XIX, como pinturas coloniales, ornamentos religiosos, mobiliario y bienes de uso cotidiano de la comunidad dominica que habitó este monasterio de clausura');
      museo.keywordFlickr = 'museo+santa+catalina+arequipa';
			museo.direccion = 'Calle Santa Catalina 301';
			museo.addAtencion('Lunes a domingo', '08:00 - 17:00');
			museo.contacto.addEmail('informes@santacatalina.org.pe');
			museo.contacto.web = 'www.santacatalina.org.pe';
			museo.contacto.addTelefono('054', '608282');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo del Periodismo Editora Perú');
			museo.coleccion = 'Industrial';
			museo.addDescripcion('Ubicado en un edificio histórico declarado Patrimonio Cultural de la Nación, el museo está distribuido en cinco salas en las que se exhiben las primeras máquinas de imprenta utilizadas para la impresión del diario oficial El Peruano en la ciudad de Arequipa');
			museo.direccion = 'Calle Consuelo 202';
			museo.addAtencion('Lunes a viernes', '09:00 - 13:00');
			museo.contacto.addEmail('editoraperu@editoraperu.com.pe');
			museo.contacto.addTelefono('054', '281172');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo del Tesoro de la Catedral');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('La Basílica Catedral de estilo neoclásico fue construida entre 1621 y 1656 y reconstruida en 1868');
			museo.addDescripcion('Exhibe pinturas de estilo manierista, barroco, de la Escuela Cusqueña y del pintor Francisco Laso');
			museo.addDescripcion('Asimismo, en esta se encuentran objetos litúrgicos de metal con piedras preciosas y ornamentos religiosos');
      museo.keywordFlickr = 'catedral+arequipa';
			museo.direccion = 'Plaza de Armas s/n';
			museo.addAtencion('Lunes a sábado', '10:00 - 17:00');
			museo.contacto.web = 'www.museocatedralarequipa.org.pe';
			museo.contacto.addEmail('info@museocatedralarequipa.org.pe');
			museo.contacto.addTelefono('054', '213149');
			museo.contacto.addTelefono('054', '221024');
			
			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Histórico Municipal de Arequipa');
			museo.coleccion = 'Arqueológica, histórica, artística';
			museo.addDescripcion('Ubicado en un edificio histórico declarado Patrimonio Cultural de la Nación, el museo tiene diez salas de exposición en las que se presenta una colección de bienes culturales prehispánicos y bienes históricos relacionados al Combate del Dos de Mayo y la Revolución de Arequipa; y una pinacoteca con obras de artistas peruanos');
			museo.direccion = 'Plaza San Francisco 407';
			museo.addAtencion('Lunes a viernes', '09:00 - 17:00');
			museo.addAtencion('Sábado', '09:00 - 15:00');
			museo.contacto.addTelefono('054', '204801');
			museo.contacto.addTelefono('054', '211021');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Santuarios Andinos');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El edificio histórico, declarado Patrimonio Cultural de la Nación, alberga al museo');
			museo.addDescripcion('En sus cinco salas expone bienes culturales arqueológicos procedentes de las investigaciones del Proyecto Santuarios de Altura del Sur Andino, tales como cerámica, objetos líticos, piezas textiles y momias');
			museo.addDescripcion('Destaca la momia denominada “Doncella Inca”, conocida como Juanita, con su ajuar funerario, ofrendas y capacochas');
      museo.keywordFlickr = 'museo+santuarios+andinos';
			museo.direccion = 'Calle La Merced 110';
			museo.addAtencion('Lunes a sábado', '09:00 - 18:00');
			museo.addAtencion('Domingo', '09:00 - 15:00');
			museo.contacto.web = 'www.ucsm.edu.pe/santury';
			museo.contacto.addEmail('santury@ucsm.edu.pe');
			museo.contacto.addTelefono('054', '286614');
			museo.contacto.addTelefono('054', '15013');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Tercera Orden Franciscana');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('Forma parte del conjunto monumental de San Francisco, declarado Patrimonio Cultural de la Nación');
			museo.addDescripcion('El museo está distribuido en cinco salas que exhiben esculturas, imágenes religiosas y pintura colonial arequipeña y cusqueña');
			museo.addDescripcion('En la pinacoteca se aprecian diversos tipos de lienzos, ornamentos sacerdotales y platería de época virreinal');
			museo.addDescripcion('Asimismo, cuenta con una biblioteca que guarda documentos eclesiales y libros del siglo XVII');
      museo.keywordFlickr = 'san+francisco+arequipa';
			museo.direccion = 'Plaza San Francisco s/n';
			museo.addAtencion('Lunes a sábado', '09:00 - 13:00');
			museo.addAtencion('Lunes a sábado', '15:00 - 18:00');
			museo.contacto.addTelefono('054', '219589');
			museo.contacto.addTelefono('054', '223048');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Caraveli');

		distrito = new museaMoz.Distrito('Bella Unión');

			museo = new museaMoz.Museo('Museo Paleontológico de Sacaco');
			museo.coleccion = 'Paleontológica';
			museo.addDescripcion('En el desierto de Sacaco existe una zona marina que a raíz de los cambios geológicos ha conservado los fósiles de diversas especies, entre estos sobresalen tiburones, ballenas, ostras gigantes y megaterios')
			museo.addDescripcion('Abarca un área abierta que ha conservado los fósiles de diversas especies');
			museo.addDescripcion('La sala de exposición, ubicada en el mismo sitio, presenta una colección de fósiles marinos con una antigüedad de diez millones de años');
      museo.keywordFlickr = 'museo+sacaco';
			museo.direccion = 'km 546 de la Panamericana Sur, a 2 km. hacia el distrito de Bella Unión';
			museo.addAtencion('Lunes a sábado', '09:00 - 15:00');
			museo.contacto.addTelefono('054', '482057');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Caylloma');

		distrito = new museaMoz.Distrito('Yanque');

			museo = new museaMoz.Museo('Museo Universidad Católica de Santa María - Yanque');
			museo.coleccion = 'Arqueológica y etnográfica';
			museo.addDescripcion('El museo se encuentra en una edificación declarada Patrimonio Cultural de la Nación que data de 1927');
			museo.addDescripcion('Expone maquetas de iglesias coloniales que se encuentran localizadas a lo largo del cañón del Colca; asimismo muestra los usos y costumbres de las poblaciones Collaguas y Cabanas desde la época precolombina hasta la actualidad');
			museo.direccion = 'Plaza Principal de Yanque';
      museo.keywordFlickr = 'museo+yanque';
			museo.addAtencion('Lunes a viernes', '09:00 - 18:00');
			museo.contacto.web = 'www.ucsm.edu.pe';
			museo.contacto.addTelefono('054', '764969');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

dataApp.push(region);
