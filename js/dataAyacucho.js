region = new museaMoz.Region('Ayacucho');

	provincia = new museaMoz.Provincia('Huamanga');

		distrito = new museaMoz.Distrito('Ayacucho');

			museo = new museaMoz.Museo('Museo de la Memoria "Para que no se repita"');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('El museo posee cuatro salas en las que se exponen fotografías, pinturas, restos de vestimentas y otros objetos relacionados a la guerra interna que vivió el Perú en la década de 1980 y cuyo máximo impacto social se produjo en Ayacucho');
			museo.direccion = 'Jr. Libertad 1229 Urb. Nery García Zárate';
			museo.addAtencion('Lunes a domingo', '09:00 - 13:00');
			museo.addAtencion('Lunes a domingo', '15:00 - 18:00');
			museo.contacto.addTelefono('066', '317170');

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo Histórico Mariscal Andrés A. Cáceres');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('Ubicado en la Casa Colonial de Vivanco, monumento histórico civil de Ayacucho, el museo tiene diez salas de exposición');
			museo.addDescripcion('En una de ellas presenta los efectos personales y pertrechos bélicos del Mariscal Andrés A. Cáceres, héroe de la Guerra con Chile del año 1879, y objetos recuperados de la guerra');
			museo.addDescripcion('Asimismo, presenta bienes culturales de época de la Colonia como pinturas y mobiliario');
			museo.direccion = 'Jr. 28 de Julio 508';
			museo.addAtencion('Lunes a viernes', '09:00 - 13:00');
			museo.addAtencion('Lunes a viernes', '15:00 - 17:00');
			museo.addAtencion('Sábado', '09:00 - 13:00');
			museo.contacto.addTelefono('066', '836166');

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo Histórico Regional "Hipólito Unanue"');
			museo.coleccion = 'Arqueológica e histórico-artística';
			museo.addDescripcion('El museo presenta el proceso cultural del Perú, especialmente de Ayacucho, desde hace aproximadamente 15 mil años; la influencia de la Cultura Chavín; el florecimiento de la cultura regional Huarpa; el surgimiento de la cultura Wari, hasta la llegada de los Incas');
			museo.addDescripcion('Asimismo, cuenta con una colección de bienes culturales histórico-artísticos');
			museo.direccion = 'Av. Independencia 502';
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');
			museo.contacto.addEmail('ayacucho@mcultura.gob.pe');
			museo.contacto.addTelefono('066', '312056');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

		distrito = new museaMoz.Distrito('Quinua');

			museo = new museaMoz.Museo('Museo de Sitio de Quinua');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('Está ubicado en la plaza principal de Quinua, a 35 km. al noreste de la ciudad de Ayacucho');
			museo.addDescripcion('En sus instalaciones cuenta con una sala de exposición permanente donde se muestran armas, uniformes, maquetas y otros objetos relacionados a la Batalla de Ayacucho');
			museo.addDescripcion('Destaca el ambiente donde se firmó la Capitulación de Ayacucho el 9 de diciembre de 1824');
			museo.direccion = 'Plaza Principal de Quinua';
			museo.addAtencion('Martes a domingo', '09:00 - 13:00');
			museo.addAtencion('Martes a domingo', '15:00 - 17:00');
			museo.contacto.addEmail('ayacucho@mcultura.gob.pe');
			museo.contacto.addTelefono('066', '312056');

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo de Sitio Wari');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El museo exhibe bienes culturales procedentes de las excavaciones arqueológicas en la zona arqueológica monumental Wari: cerámicas, líticos, textiles, monolitos, entre otros; así como textos explicativos sobre la cultura Wari, un plano y fotografías de los sectores que lo integran');
			museo.direccion = 'Complejo Arqueológico de Wari. Km. 23 Carretera Ayacucho - Quinua';
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');
			museo.contacto.addEmail('ayacucho@mcultura.gob.pe');
			museo.contacto.addTelefono('066', '312056');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

	region.addProvincia(provincia);

addRegion(region);