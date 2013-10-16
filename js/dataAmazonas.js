region = new museaMoz.Region('Amazonas');

	provincia = new museaMoz.Provincia('Chachapoyas');

		distrito = new museaMoz.Distrito('Leymebamba');

			museo = new museaMoz.Museo('Museo Leymebamba');
			museo.coleccion = 'Arqueológica y etnográfica';
			museo.addDescripcion('El museo alberga una colección de más de 150 momias, ofrendas funerarias y otros bienes culturales que fueron hallados en la Laguna de Los Cóndores durante el proyecto arqueológico de emergencia');
			museo.addDescripcion('Estas tareas de rescate permitieron recuperar bienes culturales que datan desde la cultura Chachapoyas hasta la presencia Inca en la región, así como bienes etnográficos de la zona, que ahora forman parte del fondo del museo');
			museo.direccion = 'Av. Austria s/n, San Miguel';
			museo.addAtencion('Martes a domingo', '09:30 - 16:30');
			museo.addAtencion('Previa cita', '');
			museo.contacto.addEmail('leymebamba@museoleymebamba.org');
			museo.contacto.web = 'www.museoleymebamba.org';
			museo.contacto.addTelefono('041', '816803');
			museo.contacto.addTelefono('041', '816806');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

		distrito = new museaMoz.Distrito('Chachapoyas');

			museo = new museaMoz.Museo('Sala de exhibición "Gilberto Tenorio Ruiz"');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Comprende tres salas en las que se exhiben bienes culturales de la cultura Chachapoyas que, en su mayoría, corresponden a donaciones de los pobladores locales. En la primera sala se presentan bienes culturales de cerámica de estilo Chachapoyas con influencia Cajamarca; en la segunda, bienes líticos y cerámica de estilo Inca; y en la tercera, momias y material orgánico');
			museo.direccion = 'Jr. Ayacucho 904';
			museo.addAtencion('Martes a domingo', '08:00 - 13:00');
			museo.addAtencion('Martes a domingo', '15:00 - 17:45');
			museo.contacto.addEmail('amazonas@mcultura.gob.pe');
			museo.contacto.addTelefono('041', '477045');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

		distrito = new museaMoz.Distrito('La Jalca Grande');

			museo = new museaMoz.Museo('Sala de exposición Jalca Grande, Historia, Naturaleza y Cultura Viva');
			museo.coleccion = 'Arqueológica y etnográfica';
			museo.addDescripcion('La colección comprende bienes de la cultura Chachapoyas y mapas de sitios, imágenes de entierros de los antiguos habitantes de la zona y vestimenta de los pobladores del distrito de La Jalca');
			museo.addDescripcion('En esta sala se muestra también el mito Juan de Osito, que resalta la importancia del oso de anteojos en los pueblos quechua y aymara');
			museo.direccion = 'Jr. San Roque s/n';
			museo.addAtencion('Previa coordinación con el Guía Comunal', '');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

	region.addProvincia(provincia);

addRegion(region);