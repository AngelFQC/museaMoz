region = new museaMoz.Region('Ica');

	provincia = new museaMoz.Provincia('Ica');

		distrito = new museaMoz.Distrito('Ica');

			museo = new museaMoz.Museo('Museo Regional de Ica "Adolfo Bermúdez Jenkins"');
			museo.coleccion = 'Arqueología, Histórico-artística y Etnográfica';
			museo.addDescripcion('El museo presenta dos salas de exposición');
			museo.addDescripcion('La sala de Arqueología, con bienes culturales Paracas, Nasca, Wari e Inca; y la de Bioantropología, que detalla costumbres funerarias, deformaciones craneanas, trepanaciones, cabezas trofeo y restos humanos que evicencian paleopatologías');
			museo.addDescripcion('En la parte posterior del idificio se encuentra una reproducción de las Líneas de Nasca que pueden ser apreciadas desde una plataforma');
			museo.direccion = 'Jr. Ayabaca cuadra 8 s/n - Urb. San Isidro',
			museo.coordenadas = new museaMoz.Coordenadas('-14.0719255', '-75.7338782');
			museo.addAtencion('Lunes a viernes', '08:00 - 19:00');
			museo.addAtencion('Sábado y Domingo', '08:30 - 18:30');
			museo.contacto.addEmail('ica@mcultura.gob.pe');
			museo.contacto.addTelefono('056', '234383');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

	region.addProvincia(provincia);

	provincia = new museaMoz.Provincia('Nasca');

		distrito = new museaMoz.Distrito('El Ingenio');

			museo = new museaMoz.Museo('Casa Museo María Reiche');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El museo está construido al lado del lugar donde vivió María Reiche Newman en sus primeros años de estudio de las Pampas de Nasca');
			museo.addDescripcion('En el lugar se ha reconstruido un recinto que reproduce la vivienda de la investigadora y forma parte de la exhibición la mesa de trabajo, vajilla, papeles de trabajo, y otros muebles');
			museo.addDescripcion('Asimismo, se aprecian mapas, planos, fotos, material arqueológico y una maqueta didáctica de sus diseños');
			museo.direccion = 'Km. 425 Carretera Panamericana Sur, San Miguel de La Pascana';
			museo.addAtencion('Lunes a viernes', '09:00 - 17:00');
			museo.addAtencion('Domingos y feriados', '08:00 - 18:00');
			museo.contacto.addEmail('areichelinasca@hotmail.com');

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo Didáctico Antonini');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El museo está distribuido en seis salas de exposición donde se exhiben bienes culturales recuperados durante las investigaciones arqueológicas realizadas en Nasca, Cahuachi y otros sitios de los valles de esta región');
			museo.addDescripcion('Destaca la exposición de las excavaciones de San José y Pueblo Viejo, la reconstrucción de una tumba y partes de templos, estructuras en adobes y la representación de ofrendas encontradas en Cahuachi');
			museo.direccion = 'Avenida de la Cultura 600';
			museo.addAtencion('Lunes a domingo', '09:00 - 19:00');
			museo.contacto.addTelefono('056', '523444');
			museo.contacto.addTelefono('056', '523100');
			museo.contacto.addEmail('cahuachi@terra.com.pe');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

	region.addProvincia(provincia);

	provincia = new museaMoz.Provincia('Pisco');

		distrito = new museaMoz.Distrito('Humay');

			museo = new museaMoz.Museo('Sala de Exhibición del Sitio Arqueológico "Tambo Colorado"');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Presenta la secuencia cronológica cultural del valle de Pisco, así como fragmentos de bienes culturales recuperados en las investigaciones realizadas en el complejo arqueológico y su entorno');
			museo.addDescripcion('Incluye además réplicas, fotografías, mapas e infografías que contribuyen a la comprensión de la zona arqueológica Inca');
			museo.direccion = 'Km. 39 vía Los Libertadores Wari';
			museo.coordenadas = new museaMoz.Coordenadas('-13.7051206', '-75.8294273');
			museo.addAtencion('Lunes a domingo', '09:00 - 17:00');
			museo.contacto.addEmail('ica@mcultura.gob.pe');
			museo.contacto.addTelefono('056', '234383');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

		distrito = new museaMoz.Distrito('Paracas');

			museo = new museaMoz.Museo('Museo de Sitio de Paracas "Julio C. Tello"');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El museo fue dañado por el sismo de Pisco del 15 de agosto de 2007');
			museo.addDescripcion('Por esta razón se está construyendo un nuevo museo, que estará concluido e implementado para la vista del público en el año 2013');
			museo.direccion = 'Km. 27 Carretera Pisco-Puerto San Martín (Reserva Natural de Paracas)';
			museo.coordenadas = new museaMoz.Coordenadas('-13.868209', '-76.2731731')
			museo.contacto.addTelefono('056', '234383');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

	region.addProvincia(provincia);

addRegion(region);