region = new museaMoz.Region('Lima');

	provincia = new museaMoz.Provincia('Lima');

		distrito = new museaMoz.Distrito('Cercado de Lima');

			museo = new museaMoz.Museo('Casa de la Gastronomía Peruana');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('Forma parte de la antigua sede de Correos y Telégrafos de Lima');
			museo.addDescripcion('Narra los 500 años de historia de fusión gastronómica, a través de réplicas de cerámica prehispánica, colonial y platería; y una serie de maquetas y recreaciones que reflejan la riqueza de la gastronomía peruana, considerada una de las expresiones culturales más representativas del país');
			museo.direccion = 'Jr. Conde de Superunda 170';
			museo.setCoordenadas('-12.044709', '-77.031326');
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');
			museo.contacto.addTelefono('01', '4267264');
			museo.costos = null; // ingreso gratuito

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('Lima');

			museo = new museaMoz.Museo('Casa de la Literatura Peruana');
			museo.coleccion = 'Bibliográfica';
			museo.addDescripcion('La casa de la Literatura Peruana está ubicada en la antigua Estación Central de Desamparados');
			museo.addDescripcion('Consta de dieciséis salas donde se presenta a través de textos, grabados, imágenes, videos, audios y libros, la vida y obra de escritores peruanos como: César Vallejo, José María Arguedas, Inca Garcilaso de la Vega, José Santos Chocano y Ciro Alegría, entre otros');
			museo.direccion = 'Jr. Áncash 207';
			museo.setCoordenadas('-12.044362', '-77.028784');
			museo.addAtencion('Martes a domingo', '10:30 - 19:00');
			museo.contacto.web = 'www.casadelaliteratura.gob.pe';
			museo.contacto.addTelefono('01', '4262573');
			museo.costos = null; // ingreso gratuito

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Casa Museo "José Carlos Mariátegui"');
			museo.coleccion = 'Histórico-artística-bibliográfica';
			museo.addDescripcion('Esta casa de principios del siglo XX, fue el espacio familiar donde vivió y trabajó el escritor José Carlos Mariátegui los últimos cinco años de su vida');
			museo.addDescripcion('Conserva parte del mobiliario, documentos, libros, objetos personales, el denominado “Rincón Rojo” y las oficinas de la revista Amauta');
			museo.addDescripcion('En la pinacoteca de retratos del escritor, se encuentra la obra de Julia Codesido y del argentino Emilio Pettoruti, entre otros artistas nacionales y extranjeros');
			museo.addDescripcion('Cuenta con una biblioteca especializada y realiza diversas actividades culturales');
			museo.direccion = 'Jr. Washington 1938 - 1946';
			museo.setCoordenadas('-12.063891', '-77.038936');
			museo.addAtencion('Lunes a viernes', '08:30 - 13:00');
			museo.addAtencion('Lunes a viernes', '14:00 - 17:15');
			museo.contacto.addEmail('casamariategui@mcultura.gob.pe');
			museo.contacto.addTelefono('01', '3306074');
			museo.costos = null; // ingreso gratuito

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('Miraflores');

			museo = new museaMoz.Museo('Casa Museo Ricardo Palma');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('El inmueble, declarado monumento histórico nacional, corresponde a la casa donde vivió sus últimos años y murió el autor de las Tradiciones Peruanas, Ricardo Palma');
			museo.addDescripcion('El museo contiene muebles, objetos, cuadros, fotografías y documentos personales. Además, es un centro de investigación dedicado a la vida y obra del tradicionista peruano');
			museo.direccion = 'General Suárez 189';
			museo.setCoordenadas('-12.117796', '-77.027593');
			museo.addAtencion('Lunes a viernes', '10:00 - 13:00');
			museo.addAtencion('Lunes a viernes', '15:00 - 17:00');
			museo.contacto.addEmail('lacasade.ricardopalma@gmail.com');
			museo.contacto.addTelefono('01', '4455836');
			museo.addCosto('Adulto', 6);
			museo.addCosto('Escolar', 3);

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('Miraflores');

			museo = new museaMoz.Museo('Museo Aeronáutico del Perú');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('En las salas del museo se encuentran modelos y recreaciones de antiguas máquinas aeronáuticas. Asimismo, se aprecian modelos de aviones, armas y equipos de diversa índole que han formado parte de la Fuerza Aérea del Perú en el transcurso de su historia');
			museo.addDescripcion('Se da a conocer la obra de Pedro Paulet Mostajo, quien ha sido reconocido como el "Padre de la cohetería en el mundo"');
			museo.direccion = 'Base aérea Las Palmas';
			museo.setCoordenadas('-12.153595', '-77.001405');
			museo.addAtencion('Lunes a viernes', '08:00 - 12:30');
			museo.addAtencion('Lunes a viernes', '13:30 - 15:30');
			museo.contacto.addEmail('museoaeronautico96@yahoo.com');
			museo.contacto.addTelefono('01', '4712709');
			museo.addCosto('Adulto', 5);
			museo.addCosto('Niño', 3);
			museo.addCosto('Institución Educativa', 3);

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Amano');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('En la primera sala exhibe una colección de bienes culturales de cerámica donde sobresalen ejemplares de las culturas Kotosh, Chavín, Cupisnique, Nasca, Moche, Chancay y Chimú');
			museo.addDescripcion('En la segunda, presenta una colección de textiles, en su mayoría pertenecientes a la cultura Chancay');
			museo.direccion = 'Calle Retiro 160';
			museo.setCoordenadas('-12.113558', '-77.041375');
			museo.addAtencion('Lunes a viernes', '15:00 - 17:00');
			museo.contacto.addEmail('museo@fundacionmuseoamano.org.pe');
			museo.contacto.web = 'www.fundacionmuseoamano.org.pe';
			museo.contacto.addTelefono('01', '4412909');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Andrés Avelino Cáceres');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('Ubicado en el Parque Reducto N° 2, el museo conserva la bandera, el asta y la corneta original del batallón 4, utilizados en la Batalla de Miraflores durante la Guerra con Chile en al año 1881. Asimismo, se exhiben documentos, cuadros, uniformes de soldados peruanos y chilenos, condecoraciones y objetos personales de la familia de Andrés Avelino Cáceres');
			museo.direccion = 'Ramón Ribeyro 401';
			museo.setCoordenadas('-12.056937', '-77.043945');
			museo.addAtencion('Lunes a domingo', '10:00 - 17:00');
			museo.contacto.addTelefono('01', '6177279');
			museo.addCosto('Adulto', 5);
			museo.addCosto('Estudiante', 2);

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

dataApp.push(region);