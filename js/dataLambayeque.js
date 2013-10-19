region = new museaMoz.Region('Lambayeque');

	provincia = new museaMoz.Provincia('Chiclayo');

		distrito = new museaMoz.Distrito('Chiclayo');

			museo = new museaMoz.Museo('Museo de Historia Natural Víctor Baca Aguinaga');
			museo.coleccion = 'Historia Natural';
			museo.addDescripcion('El museo posee una colección de minerales y especies de la flora y fauna silvestre de Lambayeque que están en peligro de extinción');
			museo.direccion = 'Jr. Atahualpa 481';
			museo.addAtencion('Lunes a domingo', '09:00 - 16:00');
			museo.contacto.addTelefono('074', '283610');
			museo.contacto.addTelefono('074', '283146');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

		distrito = new museaMoz.Distrito('Pimentel');

			museo = new museaMoz.Museo('Casa Museo Héroe Cap. FAP José Quiñones');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('Este inmueble ha sido proclamado Monumento Histórico Cultural');
			museo.addDescripcion('Está construido a base de caña, conchuelo (piedra, cemento, arena), yeso y vigas de algarrobo');
			museo.addDescripcion('En esta casa vivió el héroe de la aviación nacional, José Abelardo Quiñones Gonzáles, quien un 23 de julio de 1941 ofrendó su vida estrellándose contra los enemigos en el combate ante los ecuatorianos');
			museo.addDescripcion('Esta casa museo está compuesto por cinco ambientes en donde se exhiben fotografías del héroe');
			museo.addDescripcion('También seconserva la cama de bronce, su tocador con lavatorio, algunas arañas de bronce para las luces, piezas de la vajilla, el juego de comedor y algunos sillones de la época con decorados de mármol');
			museo.addDescripcion('En el patio del fondo se ha instalado un pedestal con la estatua del héroe y placas de diferentes instituciones en su homenaje');
			museo.addDescripcion('Cuenta además con una pequeña biblioteca');
			museo.direccion = 'Calle J. Quiñones 444 – 448';
			museo.addAtencion('Lunes a viernes', '09:00 - 17:00');
			museo.contacto.addTelefono('074', '208417');

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo del Colegio Militar "Elías Aguirre"');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('El museo presenta una colección de cuadros y fotografías sobre la creación y evolución del Colegio Militar Elías Aguirre');
			museo.addDescripcion('Se exhiben maquetas del Monitor Huáscar, vitrinas con trofeos y emblemas de la institución, dos bustos del Capitán de Corbeta Elías Aguirre Romero y una maqueta del Combate de Angamos');
			museo.direccion = 'Km. 10 Carretera Pimentel';
			museo.addAtencion('Lunes a viernes', '07:30 a 16:00');
			museo.contacto.addEmail('imagen@cmea.edu.pe');
			museo.contacto.addTelefono('074', '452919');
			museo.contacto.web = 'www.cmea.edu.pe';

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

		distrito = new museaMoz.Distrito('Zaña');

			museo = new museaMoz.Museo('Museo Afroperuano');
			museo.coleccion = 'Etnográfica e histórica';
			museo.addDescripcion('El Museo Afroperuano de Zaña se inauguró el año 2005 convirtiéndose en la primera institución de su género en el país');
			museo.addDescripcion('Presenta una colección de instrumentos musicales y discografía de afrodescendientes');
			museo.addDescripcion('Tiene carretas antiguas de madera que fueron utilizadas en las haciendas para el transporte de caña de azúcar. Cuenta con una colección de pinturas, dibujos, mapas y fotografías que explican la secuencia histórica de la presencia de los africanos y descendientes en las Américas y específicamente en el Perú desde el siglo XVI hasta el siglo XIX');
			museo.addDescripcion('Además se exhiben piezas de castigos y torturas a los esclavizados y elementos de supervivencia en la vida cotidiana');
			museo.direccion = 'Calle Independencia 645';
			museo.addAtencion('Martes a domingo', '09:00 - 12:30');
			museo.addAtencion('Martes a domingo', '15:00 - 17:00');
			museo.contacto.addEmail('museoafroperuano@yahoo.es');
			museo.contacto.addTelefono('074', '431042');
			museo.contacto.web = 'www.museoafroperuano.com';

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo de Sitio Huaca Rajada - Sipán');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('En el museo se exponen los bienes culturales recuperados en las últimas excavaciones realizadas en el sitio arqueológico, con énfasis en los personajes de la nobleza Moche, hallados en la tumba N°, 14, 15 y 16 en el mausoleo real de Huaca Rajada');
			museo.addDescripcion('Asimismo, el museo posee bienes culturales de la cultura Lambayeque para explicar la continuidad cultural en la zona');
			museo.direccion = 'Complejo Arqueológico de Huaca Rajada-Sipán. Campiña Huaca Rajada S/N. Carretera Sipán - Pampa Grande';
			museo.addAtencion('Lunes a domingo', '09:00 - 17:00');
			museo.contacto.addEmail('museohrsipan@gmail.com');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

	region.addProvincia(provincia);

	provincia = new museaMoz.Provincia('Ferreñafe');

		distrito = new museaMoz.Distrito('Ferreñafe');

			museo = new museaMoz.Museo('Museo Nacional Sicán');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('La exhibición permanente está conformada por bienes culturales distribuidos en salas temáticas que explican los diferentes aspectos de la sociedad Sicán');
			museo.addDescripcion('El atractivo principal del museo lo constituye la exposición del ajuar de una tumba de élite excavada en Huaca del Oro');
			museo.addDescripcion('La colección comprende diversos bienes culturales de metal como coronas, máscaras funerarias y cuchillos ceremoniales; cerámica; conchas de Spondylus y líticos representativos de esta cultura');
			museo.addDescripcion('Asimismo, se aprecia recreaciones de tumbas y actividades de la vida cotidiana de la época');
			museo.direccion = 'Av. Batán Grande Cdra. 9 S/N. Carretera Pítipo – Ferreñafe';
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');
			museo.contacto.addEmail('museosican@speedy.com.pe');
			museo.contacto.addEmail('museosican@hotmail.com'),
			museo.contacto.addTelefono('074', '286469');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

	region.addProvincia(provincia);

	provincia = new museaMoz.Provincia('Lambayeque');

		distrito = new museaMoz.Distrito('Lambayeque');

			museo = new museaMoz.Museo('Museo Arqueológico Nacional Brüning');
			museo.coleccion = 'Arqueológica y etnográfica';
			museo.addDescripcion('El museo exhibe una colección de bienes culturales que explica la secuencia cronológica del desarrollo cultural del Perú, con cerámica representativa de las culturas de la zona, destacando los materiales de las culturas Moche y Lambayeque');
			museo.addDescripcion('Asimismo, posee recreaciones a escala natural de la vida cotidiana y costumbres de Lambayeque');
			museo.addDescripcion('Actualmente es el centro de las investigaciones arqueológicas de la región');
			museo.direccion = 'Av. Huamachuco S/N',
			museo.addAtencion('Lunes a domingo', '09:00 - 17:00');
			museo.contacto.addEmail('museonacionalbruning@yahoo.es');
			museo.contacto.addTelefono('074', '282110');

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo de Sitio Huaca Chotuna - Chornancap');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El museo conserva el estilo arquitectónico de la zona; su colección está compuesta por cerámicas, metales y fragmentos de frisos recuperados en las investiga ciones arqueológicas realizadas desde el año 2007 en el Complejo arqueológico Chotuna Chornancap');
			museo.addDescripcion('Asimismo, presenta recreaciones a escala natural de la llegada de Naylamp');
			museo.direccion = 'Huaca Chotuna. Sector Bodegones. Comunidad campesina San José. Carretera Lambayeque – San José';
			museo.addAtencion('Lunes a domingo', '08:00 - 15:00');
			museo.contacto.addEmail('museonacionalbruning@yahoo.es');
			museo.contacto.addTelefono('074', '282110');

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo de Sitio Túcume');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El museo presenta una colección de bienes culturales arqueológicos, procedentes de las investigaciones arqueológicas, que corresponden a la última fase de la cultura Lambayeque, con evidencias de la presencia de la cultura Chimú e Inca, así como del periodo Colonial');
			museo.addDescripcion('Asimismo, exhibe maquetas de las huacas de la zona arqueológica y explica el proceso de los metales desde la extracción hasta la producción de los bienes culturales');
			museo.direccion = '1 km. al este del pueblo de Túcume';
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');
			museo.contacto.addEmail('informes@museodesitiotucume.com');
			museo.contacto.addTelefono('074', '612254');
			museo.contacto.addTelefono('074', '792758');
			museo.contacto.web = 'www.museodesitiotucume.org';

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo Tumbas Reales de Sipán');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El diseño arquitectónico de este museo está inspirado en las pirámides truncas de la cultura Moche');
			museo.addDescripcion('El principal atractivo es la recreación de la cámara funeraria del Señor de Sipán');
			museo.addDescripcion('En las salas se exhibe una colección de bienes culturales distribuidos temáticamente: cerámica; material orgánico, como pectorales de concha, tocados de algodón y adornos de plumas; y metal, como estandartes, coronas, orejeras de oro con turquesas y sonajeros, entre otros');
			museo.direccion = 'Av. Juan Pablo Vizcardo y Guzmán 895';
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');
			museo.contacto.addEmail('tumbasdesipan@hotmail.com');
			museo.contacto.addEmail('tumbasdesipan@gmail.com');
			museo.contacto.addTelefono('074', '283978');
			museo.contacto.addTelefono('074', '283977');
			museo.contacto.web = 'www.museotumbasrealessipan.pe';

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

	region.addProvincia(provincia);

addRegion(region);