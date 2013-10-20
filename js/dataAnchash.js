region = new museaMoz.Region('Áncash');

	provincia = new museaMoz.Provincia('Aija');

		distrito = new museaMoz.Distrito('Aija');

			museo = new museaMoz.Museo('Casa Museo Sabio Santiago Antúnez de Mayolo');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('Inmueble de época Republicana donde habitó Santiago Antúnez de Mayolo, ingeniero, físico y matemático, considerado Gran Sabio Peruano por sus proyectos y estudios a favor del desarrollo del país');
			museo.addDescripcion('Conserva la biblioteca que fue utilizada por él y en una sala se exhibe su colección fotográfica, así como sus obras y proyectos');
			museo.direccion = 'Jr. San Martín 230';
			museo.addAtencion('Lunes a sábado', '08:00 - 17:00');
			museo.contacto.addTelefono('043', '445031');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Huaraz');

		distrito = new museaMoz.Distrito('Huaraz');

			museo = new museaMoz.Museo('Museo Arqueológico de Áncash “Augusto Soriano Infante”');
			museo.coleccion = 'Arqueológica, histórica';
			museo.addDescripcion('Es uno de los primeros museos regionales del país');
			museo.addDescripcion('Está constituido en cuatro salas ubicadas en tres niveles, en las que se exponen de forma secuencial bienes culturales de cerámica, textiles, líticos, metales, materiales orgánicos y óseos de los años 10500 a.C a 700 a.C, alternados con maquetas y dioramas');
			museo.addDescripcion('Junto al museo se encuentra el parque lítico más grande de América, denominado así por presentar alrededor de 120 monolitos, dinteles, cabezas clavas y otras piezas líticas pertenecientes a la cultura Recuay');
			museo.direccion = 'Av. Luzuriaga 762';
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');
			museo.contacto.addEmail('ancash@mcultura.gob.pe');
			museo.contacto.addTelefono('043', '421551');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('Independencia');

			museo = new museaMoz.Museo('Sala de Exhibición del Monumento Arqueológico de Willkawaín');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('La sala está ubicada en las inmediaciones del sitio arqueológico Willkawain');
			museo.addDescripcion('Expone bienes culturales de cerámica y mediante paneles informativos se explica la ocupación Wari en el Callejón de Huaylas, Áncash');
			museo.direccion = 'Centro Poblado Menor de Paria';
			museo.addAtencion('Martes a domingo', '09:00 - 05:00');
			museo.contacto.addEmail('ancash@mcultura.gob.pe');
			museo.contacto.addTelefono('043', '421829');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Pallasca');

		distrito = new museaMoz.Distrito('Cabana');

			museo = new museaMoz.Museo('Museo Arqueológico Zonal de Cabana');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('La colección del museo se expone en dos salas: la primera contiene litoesculturas provenientes de la zona arqueológica Pashash y algunos ejemplares de los denominados “tableros Recuay”; en la segunda se muestran objetos cerámicos y metales de producción artesanal');
			museo.addDescripcion('El recorrido se complementa con paneles informativos donde se aborda el contexto cultural, cronológico, geográfico y tecnológico de la cultura Pashash–Recuay');
			museo.direccion = 'Plaza de Armas s/n';
			museo.addAtencion('Lunes a sábado', '08:00 - 13:00');
			museo.addAtencion('Lunes a sábado', '14:00 - 17:00');
			museo.contacto.addEmail('ancash@mcultura.gob.pe');
			museo.contacto.addTelefono('043', '421829');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Yungay');

		distrito = new museaMoz.Distrito('Ranrahirca');

			museo = new museaMoz.Museo('Museo de Antropología, Arqueología e Historia Natural de Ranrahirca');
			museo.coleccion = 'Histórica y ciencias naturales';
			museo.addDescripcion('El museo posee una colección de especies de la flora y fauna de la región. Además, una serie de fotografías de las ciudades de Yungay y Huaraz antes y después del sismo ocurrido en el año 1970, así como aerofotografías del alud que sepultó la ciudad de Ranrahirca en el año 1962');
			museo.direccion = 'Jr. Las Palmeras s/n';
			museo.addAtencion('Martes a domingo', '09:00 - 16:00');
			museo.contacto.addEmail('ancash@mcultura.gob.pe');
			museo.contacto.addTelefono('043', '442051');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Asunción');

		distrito = new museaMoz.Distrito('Chacas');

			museo = new museaMoz.Museo('Museo de Chacas');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El museo exhibe una colección de cerámica de estilos Recuay, Wari, Conchucos, Pincus, Yarus, Waras e Inca. En el recorrido se muestran esculturas de piedra con variedad de figuras y diseños geométricos, así como metalurgia Recuay');
			museo.direccion = 'Plaza de Armas s/n';
			museo.addAtencion('Lunes a sábado', '08:00 - 17:00');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Huari');

		distrito = new museaMoz.Distrito('Chavín de Huantar');

			museo = new museaMoz.Museo('Museo Nacional Chavín');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Posee una variada colección de bienes culturales provenientes de las investigaciones realizadas en la zona arqueológica monumental Chavín iniciadas por Julio C. Tello');
			museo.addDescripcion('En las salas se exhiben 19 conchas de caracol usadas como pututos o trompetas, cabezas clavas y lápidas, así como una maqueta de la zona monumental');
			museo.addDescripcion('En una sala se encuentra el Obelisco Tello, escultura emblemática de 2.52 metros de alto, que sintetiza la concepción religiosa del mundo Chavín');
			museo.direccion = 'Prolongación Av. 17 de enero norte s/n';
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');
			museo.contacto.addEmail('ancash@mcultura.gob.pe');
			museo.contacto.addTelefono('043', '454011');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Casma');

		distrito = new museaMoz.Distrito('Casma');

			museo = new museaMoz.Museo('Museo Regional de Casma "Max Uhle"');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Se sitúa junto a la zona arqueológica Sechín');
			museo.addDescripcion('Mediante una secuencia cronológica se narra el desarrollo cultural del valle de Casma, representado por variados bienes culturales recuperados en los proyectos de investigación arqueológica realizados en el Cerro Sechín, Sechín Bajo, Sechín Alto, Las Aldas, Pampa Colorada y Moxeque');
			museo.direccion = 'Carretera Casma - Huaraz km. 2';
			museo.addAtencion('Lunes a domingo', '08:00 - 18:00');
			museo.contacto.addEmail('ancash@mcultura.gob.pe');
			museo.contacto.addTelefono('043', '421829');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

dataApp.push(region);