region = new museaMoz.Region('Lima');

	provincia = new museaMoz.Provincia('Barranca');

		distrito = new museaMoz.Distrito('Pativilca');

			museo = new museaMoz.Museo('Museo Bolivariano');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('El museo, ubicado en una casona colonial que en 1824 se convirtió en el Cuartel General de Simón Bolívar, tiene seis ambientes en los que se muestra mobiliario antiguo, pinturas y documentos, como el primer editorial redactado por el libertador y la imprenta que editó los primeros números del diario El Peruano');
			museo.direccion = 'Calle Bolívar s/n';
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Huaura');

		distrito = new museaMoz.Distrito('Végueta');

			museo = new museaMoz.Museo('Museo Comunitario de Végueta');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('La sala de exposición permanente presenta “Vichama, la ciudad agropesquera de la Civilización Caral: 4200 años de Ciencia y Tecnologia Agropesquera” con una colección de bienes culturales arqueológicos, que se complementa con recursos museográficos que ilustran los diversos aspectos de la sociedad de Vichama y su vinculación con la Civilización Caral');
			museo.addDescripcion('Asimismo, tiene módulos interactivos que brindan información acerca del patrimonio cultural y natural de Végueta');
			museo.direccion = 'Centro Cívico, Plaza de Armas de Végueta';
			museo.addAtencion('Lunes a domingo', '08:00 - 20:00');
			museo.contacto.web = 'www.zonacaral.gob.pe';
			museo.contacto.addEmail('zac.vichama@zonacaral.gob.pe');
			museo.contacto.addTelefono('01', '4951515');
			museo.contacto.addTelefono('01', '4951516');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('Huacho');

			museo = new museaMoz.Museo('Museo de Arqueología de la Universidad José Faustino Sánchez Carrión');
			museo.coleccion = 'Arqueológica, histórica';
			museo.addDescripcion('En este museo se exhiben bienes culturales de los antiguos habitantes del valle de Huaura y la zona de Huacho, como cerámicas y textiles; asimismo, se exponen restos humanos, material orgánico, artefactos de madera e instrumentos musicales, principalmente de la cultura Chancay');
			museo.direccion = 'Calle Eusebio Arroniz s/n (al frente de Edelnor – Huacho)';
			museo.addAtencion('Lunes a viernes', '08:00 - 17:00');
			museo.contacto.addEmail('museounsaca@hotmail.com');
			museo.contacto.addTelefono('01', '2321810');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Lima');

		distrito = new museaMoz.Distrito('Ancón');

			museo = new museaMoz.Museo('Museo Capitán de Navío Juan Fanning García');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('En el museo, construido en el año 1948, se exhiben diversos tipos de armas y uniformes usados por la Infantería de Marina');
			museo.direccion = 'Base de Infantería de Ancón';
			museo.addAtencion('Martes a viernes', '09:00 - 14:00');
			museo.addAtencion('Sábado y domingo', '09:00 - 16:00');
			museo.contacto.addTelefono('01', '4883243');
			museo.contacto.addTelefono('01', '4294793');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('Barranco');

			museo = new museaMoz.Museo('Museo de Arte Contemporáneo - MAC');
			museo.coleccion = 'Fotográfica y artística';
			museo.addDescripcion('El museo tiene dos salas que exhiben una selección de obras de artistas latinoamericanos, entre los que destacan: Cuevas (México), Botero (Colombia) y Lam (Cuba), así como los peruanos Eielson, Hastings, Quintanilla, Rodríguez Larraín, entre otros');
			museo.addDescripcion('Además cuenta con un Centro de Documentación, un Departamento de Colecciones y cuatro aulas');
			museo.direccion = 'Av. Grau 1511';
			museo.setCoordenadas('-12.141376', '-77.023482');
			museo.addAtencion('Martes a domingo', '10:00 - 19:00');
			museo.contacto.addEmail('contacto@mac-lima.org.pe');
			museo.contacto.web = 'www.mac-lima.org.pe';
			museo.contacto.addTelefono('01', '6525100');
			museo.costos = null;

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de la Electricidad');
			museo.coleccion = 'Científica, tecnológica e industrial';
			museo.addDescripcion('El museo difunde los valores culturales e históricos de la electricidad en el Perú');
			museo.addDescripcion('Tiene cinco salas de exposición de carácter interactivo, en las que se explica el fenómeno eléctrico, la historia de la electricidad, las fuentes de generación, el ahorro de energía y la evolución de los artefactos eléctricos');
			museo.direccion = 'Av. Pedro de Osma 105';
			museo.addAtencion('Lunes a doming', '09:00 - 17:00');
			museo.contacto.addEmail('museoelectri@speedy.com.pe');
			museo.contacto.addTelefono('01', '4776577');
			museo.setCoordenadas('-12.145571', '-77.021396');
			museo.costos = null;

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('Cercado de Lima');

			museo = new museaMoz.Museo('Casa de la Gastronomía Peruana');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('Forma parte de la antigua sede de Correos y Telégrafos de Lima');
			museo.addDescripcion('Narra los 500 años de historia de fusión gastronómica, a través de réplicas de cerámica prehispánica, colonial y platería; y una serie de maquetas y recreaciones que reflejan la riqueza de la gastronomía peruana, considerada una de las expresiones culturales más representativas del país');
			museo.direccion = 'Jr. Conde de Superunda 170';
			museo.setCoordenadas('-12.044709', '-77.031326');
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');
			museo.contacto.addTelefono('01', '4267264');
			museo.costos = null;

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Arte Italiano de Lima');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('Este museo exhibe obras del arte italiano de principios del siglo XX. La colección inicial fue seleccionada por el crítico de arte Mario Vannini Parenti, quien entre 1921 y 1922 viajó a Italia, donde adquirió casi 200 obras de arte -entre esculturas, pinturas, grabados, acuarelas, dibujos y cerámica- de más de 120 artistas contemporáneos de todas las regiones del país, entre los que destacan: Giorgio Belloni, Italico Brass, Oscar Ghiglia, Gian Emilio Malerba, entre otros. Por ello, la colección del Museo de Arte Italiano es una muestra única del arte del cambio de siglo en Italia, a pesar de que la vanguardia no esté presente');
			museo.direccion = 'Paseo de la República s/n';
			museo.setCoordenadas('-12.058485', '-77.036809');
			museo.addAtencion('Martes a domingo', '10:00 - 17:00');
			museo.contacto.addEmail('museodearteitaliano@mcultura.gob.pe');
			museo.contacto.addTelefono('01', '4239932');
			museo.addCosto('Adulto', 7);
			museo.addCosto('Universitario', 3.5);
			museo.addCosto('Escolar', 1);

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de la Catedral de Lima');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('El museo está distribuido en espacios correspondientes a la Catedral de Lima');
			museo.addDescripcion('Destacan la Antesacristía, donde se encuentra la colección de doce cuadros de la familia Bassano; la antigua Sacristía mayor, que contiene la gran cajonería; y la Sala capitular (lugar de reuniones del Cabildo), que contiene la galería de arzobispos');
			museo.addDescripcion('El recorrido incluye, una visita a toda la Catedral, en la que se puede apreciar la tumba de Francisco Pizarro, las capillas laterales y la sillería del coro, una de las más famosas de Latinoamérica');
			museo.direccion = 'Plaza Mayor de Lima';
			museo.addAtencion('Lunes a viernes', '09:00 - 17:00');
			museo.addAtencion('Sábado', '10:00 - 13:00');
			museo.contacto.addEmail('catedraldelima@yahoo.es');
			museo.contacto.addTelefono('01', '4279647');
			museo.contacto.addTelefono('01', '4267056');
			museo.setCoordenadas('-12.046099', '-77.030128');
			museo.addCosto('Adulto', 10);
			museo.addCosto('Escolar', 2);

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de la Compañía de Bomberos La Salvadora 10');
			museo.coleccion = 'Histórica - industrial';
			museo.addDescripcion('El museo posee bienes de la Compañía de Bomberos que datan de su fundación en el año 1874 y que representan su historia y tradición a través del tiempo');
			museo.addDescripcion('La colección histórica de la Bomba Salvadora Lima cuenta con equipos, herramientas, accesorios, cascos históricos de diferentes etapas, uniformes y fotografías. Forman parte de la colección dos vehículos históricos: Bomba Merry Weather de 1898 y su Autobomba Magirus Deutz de 1920');
			museo.direccion = 'Jr. De la Unión (calle Belén) 1027';
			museo.contacto.addTelefono('01', '4280288');
			museo.addAtencion('Previa coordinación', '');
			museo.setCoordenadas('-12.052282', '-77.035438');
			museo.costos = null;

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('Jesús María');

			museo = new museaMoz.Museo('Museo Conmemorativo Inmigración Japonesa en el Perú');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('El museo conmemora el 80° aniversario de la inmigración japonesa al Perú, celebrado en 1979. En sus salas se aprecian temas como: el cambio de actitud del inmigrante japonés hacia el Perú, la integración, las relaciones peruano-japonesas después de la II Guerra Mundial y la cronología de los principales acontecimientos ocurridos en el mundo');
			museo.addDescripcion('Cuenta con una sala de exposiciones temporales, un área para el archivo de documentos y fotografías históricas y un importante conjunto de libros sobre la inmigración en español, japonés e inglés');
			museo.addDescripcion('Desde el año 2003 se denomina Museo de la Inmigración Japonesa al Perú “Carlos Chiyoteru Hiraoka”');
			museo.direccion = 'Av. Gregorio Escobedo 803';
			museo.setCoordenadas('-12.087667', '-77.054942');
			museo.addAtencion('Lunes a viernes', '10:00 - 18:00');
			museo.addAtencion('Sábado', '10:00 - 13:00');
			museo.contacto.addTelefono('01', '5187450');
			museo.contacto.addEmail('muse@apj.org.pe');
			museo.contacto.web = 'www.apj.org.pe';
			museo.costos = null;

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Antropología, Biodiversidad, Agricultura y Alimentación (MUNABA)');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Expone una colección de restos de animales prehistóricos. Asimismo, presenta bienes culturales como cerámicas, líticos, textiles y fardos funerarios para explicar los orígenes de la agricultura en el Perú y el desarrollo de las culturas prehispánicas');
			museo.direccion = 'Calle Camilo Carrillo 325 - A';
			museo.setCoordenadas('-12.072266', '-77.038199');
			museo.contacto.addEmail('museodeantropologia@lamolina.edu.pe');
			museo.contacto.addTelefono('01', '4250961');
			museo.addCosto('Entrada general', 2);

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Historia Natural "Javier Prado"');
			museo.coleccion = 'Historia natural y paleontológica';
			museo.addDescripcion('Fundado en 1918, el museo alberga las colecciones científicas más completas y representativas del patrimonio natural y cultural del Perú. Asimismo, colecta, estudia, custodia y difunde lo referente a la flora, fauna y gea nacional, del pasado y del presente');
			museo.addDescripcion('Cuenta con salas en donde se exhiben temas en torno a la ecología, evolución y biodiversidad');
			museo.addDescripcion('Podemos encontrar desde pequeños insectos hasta inmensos dinosaurios, desde meteoritos hasta tigres dientes de sable, pasando por la ballena asesina del Perú y el caimán gigante de la Amazonía, el Purussaurus');
			museo.addDescripcion('La visita se completa con el jardín botánico donde se pueden disfrutar de amplios espacios verdes y observar gran variedad de aves');
			museo.direccion = 'Av. Arenales 1256';
			museo.addAtencion('Lunes a viernes', '09:00 - 17:15');
			museo.addAtencion('Sábado', '09:00 - 16:30');
			museo.addAtencion('Domingo y feriado', '10:00 - 13:30');
			museo.contacto.web = 'www.museohn.unmsm.edu.pe';
			museo.contacto.addEmail('mhnunmsm@gmail.com');
			museo.contacto.addEmail('guiados.mhn@gmail.com');
			museo.contacto.addTelefono('01', '4710117');
			museo.contacto.addTelefono('01', '4707918');
			museo.setCoordenadas('-12.076463', '-77.036697');
			museo.addCosto('Adulto', 7);
			museo.addCosto('Niño', 5);
			museo.addCosto('Servicio guiado', 25);

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('La Molina');

			museo = new museaMoz.Museo('Museo Antonio Raimondi');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('El museo tiene una colección de documentos, como folios manuscritos, fotografías, dibujos, acuarelas, planos, cartas, cuadernos de apuntes, entre otros, pertenecientes a Antonio Raimondi');
			museo.direccion = 'Av. La Fontana 755';
			museo.setCoordenadas('-12.069035', '-76.95153');
			museo.addAtencion('Lunes a viernes', '09:00 - 16:30 (previa cita)');
			museo.contacto.addEmail('museo@ciaraimondi.edu.pe');
			museo.contacto.web = 'www.museoraimondi.org.pe';
			museo.contacto.addTelefono('01', '6149700');
			museo.contacto.addTelefono('01', '3496166');
			museo.costos = null;

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Entomología Klaus Raven Büler');
			museo.coleccion = 'Ciencias naturales';
			museo.addDescripcion('Se inició en 1962 y tiene una colección sobre la diversidad de fauna entomológica, así como especies de importancia agrícola y médico-veterinaria');
			museo.direccion = 'Urb. El Sol de la Molina, Av. La Molina cuadra 9';
			museo.contacto.web = 'www.lamolina.edu.pe/facultad/agronomia/museo';
			museo.contacto.addEmail('museoraven@lamolina.edu.pe');
			museo.contacto.addTelefono('01', '6147800');
			museo.setCoordenadas('-12.083345', '-76.945888');
			museo.addCosto('Entrada general', 5);
			museo.addCosto('Escolar', 3);

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

			museo = new museaMoz.Museo('Museo Arqueológico "Josefina Ramos de Cox"');
			museo.coleccion = 'Arqueológica e histórico-artística';
			museo.addDescripcion('El museo fue fundado en 1971. La colección que alberga está constituida por bienes culturales de cerámica, textiles, metales y material orgánico de distintas culturas, como Paracas, Nasca, Wari, Chincha, Chancay e Inca. Asimismo, tiene una colección de bienes de la época colonial y documentos');
			museo.direccion = 'Rufino Torrico 1164 – Plaza Francia';
			museo.setCoordenadas('-12.052856', '-77.037746');
			museo.addAtencion('Lunes a viernes', '10:00 - 13:00');
			museo.addAtencion('Lunes a viernes', '14:00 - 20:00');
			museo.contacto.web = 'www.ira.pucp.edu.pe/museo-arqueologia/presentacion';
			museo.contacto.addEmail('majrc@pucp.edu.pe');
			museo.contacto.addTelefono('01', '6266608');
			museo.costos = null;

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Cementerio Presbítero "Matías Maestro"');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('Este cementerio museo fue inaugurado el 31 de mayo de 1808. Lleva el nombre de su arquitecto, el español Matías Maestro');
			museo.addDescripcion('Considerado el primer cementerio monumental de América Latina, cuenta con setecientos sesenta y seis mausoleos de arquitectura de los siglos XIX y XX');
			museo.addDescripcion('En su interior, alberga los restos mortales de personajes destacados como José Santos Chocano, Abraham Valdelomar, Ciro Alegría, Ricardo Palma, José Carlos Mariátegui; militares como Alfonso Ugarte, Miguel Grau, Andrés Avelino Cáceres, Francisco Bolognesi; científicos como Daniel Alcides Carrión y ex mandatarios como Ramón Castilla, Guillermo Billingurst y Manuel Pardo');
			museo.direccion = 'Jr. Áncash cuadras 16-11';
			museo.setCoordenadas('-12.043297', '-77.028301');
			museo.addAtencion('Lunes a sábado', '09:00 - 14:00');
			museo.contacto.addTelefono('01', '3852117');
			museo.contacto.addTelefono('01', '4276520');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Convento de San Francisco');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('El conjunto monumental de San Francisco de Lima concentra uno de los acervos artísticos más representativos del arte virreinal peruano. Posee pinturas de la serie de la vida de San Francisco de Asís y mobiliario litúrgico');
			museo.addDescripcion('Asimismo, las catacumbas del Convento constan de pasajes subterráneos donde se encuentran los restos óseos de los antiguos habitantes de la capital que allí fueron sepultados');
			museo.direccion = 'Esquina jirones Áncash y Lampa – Plaza San Francisco';
			museo.setCoordenadas('-12.04549', '-77.027453');
			museo.addAtencion('Lunes a domingo', '09:30 - 17:30');
			museo.contacto.addEmail('informes@museocatacumbas.com');
			museo.contacto.addTelefono('01', '7197188');
			museo.contacto.web = 'www.museocatacumbas.com';
			museo.addCosto('Adulto', 7);
			museo.addCosto('Universitario', 3.5);
			museo.addCosto('Escolar', 1);

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Arqueología y Antropología de la Universidad Nacional Federico Villareal');
			museo.coleccion = 'Arqueológica y etnográfica';
			museo.addDescripcion('El museo exhibe una colección de bienes culturales arqueológicos de cerámica, textiles, artefactos líticos e instrumentos musicales de diferentes culturas prehispánicas como Chavín, Moche, Nasca y Chancay');
			museo.addDescripcion('Asimismo, se exponen maquetas de sitios arqueológicos y recreaciones de esculturas monolíticas');
			museo.direccion = 'Esquina Av. Nicolás de Piérola con Jr. Cañete 697';
			museo.setCoordenadas('-12.047505', '-77.040989');
			museo.addAtencion('Lunes a viernes', '09:00 - 13:00');
			museo.addAtencion('Lunes a viernes', '14:00 - 17:00');
			museo.contacto.addEmail('ccfv@unfv.edu.pe');
			museo.contacto.addTelefono('01', '7209720');
			museo.costos = null;

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Arqueología y Antropología de la Universidad Nacional Mayor de San Marcos');
			museo.coleccion = 'Arqueológica, histórica, etnográfica, antropológica';
			museo.addDescripcion('Fundado en 1919, sus colecciones están relacionadas principalmente, a los periodos tempranos de la civilización andina');
			museo.addDescripcion('Abarca bienes culturales líticos, textiles, cerámicas, metales y material orgánico; así como patrimonio documental: el Archivo Tello y el Archivo Rebeca Carrión Cachot');
			museo.direccion = 'Av. Nicolás de Piérola 1222, Parque Universitario';
			museo.setCoordenadas('-12.054619', '-77.032152');
			museo.addAtencion('Lunes a viernes', '10:00 - 17:00');
			museo.contacto.addTelefono('01', '6197000');
			museo.contacto.addEmail('museoarql.ccsm@unmsm.edu.pe');
			museo.contacto.web = 'www.ccsm-unmsm.edu.pe/arqueologia';
			museo.costos = null;

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Arte de la Universidad Nacional Mayor de San Marcos');
			museo.coleccion = 'Histórico-artística y etnográfica';
			museo.addDescripcion('El museo se fundó en el año 1970 como Museo de Arte e Historia. En el año 1996 cambió su nombre a Museo de Arte, incorporando a sus fondos museológicos importantes obras peruanas de diferentes épocas');
			museo.addDescripcion('Actualmente, cuenta con colecciones de arte popular, retratos de los siglos XVI al XX, arte contemporáneo, archivo de pintura campesina y reproducciones pictóricas');
			museo.direccion = 'Av. Nicolás de Piérola 1222 - Parque Universitario';
			museo.setCoordenadas('-12.054619', '-77.032152');
			museo.addAtencion('Lunes a sábado', '10:00 - 13:00');
			museo.addAtencion('Lunes a sábado', '14:00 - 17:00');
			museo.contacto.addEmail('museoarte.ccsm@unmsm.edu.pe');
			museo.contacto.web = 'www.ccsm-unmsm.edu.pe/arte';
			museo.contacto.addTelefono('01', '6197000');
			museo.costos = null;

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Arte de Lima');
			museo.coleccion = 'Arqueológica, histórico-artística, numismática y fotográfica';
			museo.addDescripcion('Ubicado en el histórico Palacio de la Exposición, este museo alberga colecciones que explican la historia del arte peruano: arte precolombino, colonial, de los siglos XIX y XX y contemporáneo. Asimismo alberga colecciones de fotografía, platería colonial y republicana');
			museo.direccion = 'Paseo Colón 125, Parque de la Exposición';
			museo.setCoordenadas('-12.060452', '154.0701');
			museo.addAtencion('Martes a domingo', '10:00 - 20:00');
			museo.addAtencion('Sábado', '10:00 - 17:00');
			museo.contacto.addEmail('informes@mali.pe');
			museo.contacto.web = 'www.mali.pe';
			museo.contacto.addTelefono('01', '2040000');
			museo.addCosto('Precios variables', 0);
			museo.addCosto('Domingo popular', 1);

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Artes y Tradiciones Populares del Instituto Riva-Agüero de la Pontificia Universidad Católica del Perú');
			museo.coleccion = 'Histórico-artística y etnográfica';
			museo.addDescripcion('El museo posee una colección etnográfica conformada por bienes culturales de distinta naturaleza procedentes de varias zonas del país, reunidas desde la segunda mitad del siglo pasado');
			museo.addDescripcion('Entre los bienes que exhibe se aprecian máscaras de danzas, mates burilados, retablos, vírgenes y cristos de procesión, trabajos en plata, entre otros');
			museo.direccion = 'Jr. Camaná 459';
			museo.addAtencion('Lunes a viernes', '10:00 - 19:00');
			museo.contacto.addTelefono('01', '6266600');
			museo.contacto.web = 'www.ira.pucp.edu.pe';

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de la Identificación');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('A través de sus salas especialmente acondicionadas, el museo explica la historia de la identificación en el Perú y el mundo');
			museo.addDescripcion('Presenta módulos interactivos y una sala de exposición tecnológica con los sistemas de identificación y registros civiles en nuestro país');
			museo.direccion = 'Jr. Bolivia 109 Torre II, Piso 2 - Torre Centro Cívico';
			museo.addAtencion('Lunes a sábado', '09:00 - 13:00');
			museo.addAtencion('Lunes a viernes', '14:30 - 17:00');
			museo.contacto.addEmail('museo@reniec.gob.pe');
			museo.contacto.web = 'www.reniec.gob.pe/portal/museo';
			museo.contacto.addTelefono('01', '3152700');
			museo.costos = null;

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de los Combatientes del Morro de Arica');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('La infraestructura del museo corresponde a la casa donde nació el Coronel Francisco Bolognesi en el año 1816');
			museo.addDescripcion('Su interior está dividido en doce salas, entre las que destacan la Sala del Coronel Francisco Bolognesi, donde se aprecia el uniforme de gala del héroe, medallas y otros objetos personales; la Sala de la Familia; la Sala del Coronel Joaquín Inclán; y la Sala de los Héroes del Morro, dedicada especialmente a Alfonso Ugarte y Roque Sáenz Peña');
			museo.direccion = 'Jr. Cailloma 125';
			museo.addAtencion('Lunes a viernes', '09:00 - 15:00');
			museo.addAtencion('Sábado', '09:00 - 13:00');
			museo.contacto.addEmail('museo_combatientes@hotmail.com');
			museo.contacto.addTelefono('01', '4270958');
			museo.setCoordenadas('-12.046744', '-77.034797');
			museo.addCosto('Adulto', 3);
			museo.addCosto('Estudiante', 2);
			museo.addCosto('Extranjero', 5);

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

		distrito = new museaMoz.Distrito('Pueblo Libre');

			museo = new museaMoz.Museo('Museo Arqueológico Rafael Larco Herrera');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El museo presenta de manera cronológica el desarrollo de la historia del Perú prehispánico, exhibe una colección de bienes culturales de oro y plata, textiles, material orgánico y cerámica');
			museo.addDescripcion('Este museo permite la visita a sus depósitos, que contienen alrededor de 45 mil bienes culturales debidamente ordenados');
			museo.direccion = 'Av. Bolívar 1515';
			museo.setCoordenadas('-12.071217', '-77.070944');
			museo.addAtencion('Lunes a domingo', '09:00 - 18:00');
			museo.contacto.addTelefono('01', '4611312');
			museo.contacto.addTelefono('01', '4611835');
			museo.contacto.web = 'www.museolarco.org';
			museo.contacto.addEmail('webmaster@museolarco.org_email');
			museo.addCosto('Adulto', 30);
			museo.addCosto('Adulto mayor', 25);
			museo.addCosto('Estudiante', 15);

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('Santiago de Surco');

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

			museo = new museaMoz.Museo('Museo de Historia Natural Vera Alleman Haeghebaert');
			museo.coleccion = 'Paleontológica y ciencias naturales';
			museo.addDescripcion('Se expone sobre la evolución de la vida en la Tierra. La sala de exhibición está dividida en dos secciones: la primera muestra la historia desde los primeros registros fósiles del Pre-Cámbrico, hace unos 2 500 millones de años hasta el Pleistoceno; y la otra sala corresponde al Holoceno, último periodo de 10 000 años, que es en el que vivimos');
			museo.direccion = 'Av. Benavides 5440 – Las Gardenias';
			museo.addAtencion('Lunes a viernes', '09:00 - 16:00');
			museo.addAtencion('Sábado', '09:00 - 14:00');
			museo.contacto.addEmail('mhn@urp.edu.pe');
			museo.contacto.addTelefono('01', '7080000');
			museo.contacto.web = 'www.urp.edu.pe';
			museo.setCoordenadas('-12.126355', '-77.004388');
			museo.addCosto('Público general', 7);
			museo.addCosto('Estudiante', 5);

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('San Borja');

			museo = new museaMoz.Museo('Museo de la Nación');
			museo.coleccion = 'Arqueológica, histórico-artística y etnográfica';
			museo.addDescripcion('La exposición es una síntesis de las manifestaciones culturales del Perú de todos los tiempos. Es un espacio abierto a las expresiones plásticas y las artes escénicas');
			museo.addDescripcion('En sus ambientes se presentan exposiciones temporales que permiten una gran versatilidad de sus instalaciones');
			museo.addDescripcion('En sus salas se exhiben numerosas colecciones de arte y cultura de las diversas regiones del Perú');
			museo.addDescripcion('de patrimonio arqueológico, histórico y etnográfico, así como una selección de alto valor en la plástica colonial y contemporánea');
			museo.direccion = 'Av. Javier Prado Este 2465';
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');
			museo.contacto.addEmail('museodelanacion@mcultura.gob.pe');
			museo.contacto.addTelefono('01', '4769878');
			museo.contacto.addTelefono('01', '4769933');
			museo.setCoordenadas('-12.085863', '-77.002107');
			museo.costos = null;

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

dataApp.push(region);