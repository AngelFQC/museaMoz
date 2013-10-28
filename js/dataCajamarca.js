region = new museaMoz.Region('Cajamarca');

	provincia = new museaMoz.Provincia('Cajamarca');

		distrito = new museaMoz.Distrito('Cajamarca');

			museo = new museaMoz.Museo('Museo Arqueológico Horacio Urteaga - Universidad Nacional de Cajamarca');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Exhibe bienes arqueológicos de las culturas regionales');
      museo.keywordFlickr = 'museo+universidad+cajamarca';
			museo.direccion = 'Jr. Del Batán 289';
			museo.addAtencion('Lunes a viernes', '08:00 - 14:00');
			museo.contacto.addTelefono('076', '340440');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Botánico Herbario - Universidad Nacional de Cajamarca');
			museo.coleccion = 'Ciencias naturales';
			museo.addDescripcion('El museo posee un herbario de especímenes de la región');
			museo.direccion = 'Av. Atahualpa N° 1050, Ciudad Universitaria, Departamento Académico de Ciencias Biológicas, Uiversidad Nacional de Cajamarca';
			museo.addAtencion('Lunes a viernes', '08:00 - 14:00');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Arqueología y Etnografía del Complejo Monumental Belén');
			museo.coleccion = 'Arqueológica, histórico-artística y etnográfica';
			museo.addDescripcion('El Complejo Monumental Belén, de época colonial, está construido sobre estructuras Inca que pueden apreciarse durante el recorrido');
			museo.addDescripcion('En las salas se exponen bienes culturales prehispánicos como textiles, cerámicas y piezas líticas; y tejidos de la época virreinal');
			museo.addDescripcion('Una pequeña colección etnográfica de la región conformada por instrumentos de agricultura, ganadería, instrumentos musicales, gastronomía, vestimenta típica, entre otros, complementan la muestra');
      museo.keywordFlickr = 'museo+belen+cajamarca';
			museo.direccion = 'Jr. Belén s/n';
			museo.addAtencion('Martes a domingo', '08:30 - 13:00');
			museo.addAtencion('Martes a domingo', '14:30 - 18:00');
			museo.contacto.addEmail('cajamarca@mcultura.gob.pe');
			museo.contacto.addTelefono('076', '362601');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Arte Religioso del Convento San Francisco');
			museo.coleccion = 'Histórico-artística';
			museo.addDescripcion('El museo, ubicado en el Convento de San Francisco, alberga una colección de pinturas de la orden franciscana, esculturas y mobiliario del periodo virreinal');
      museo.keywordFlickr = 'san+francisco+cajamarca';
			museo.direccion = 'Jr. Dos de Mayo 435';
			museo.addAtencion('Lunes a sábado', '09:00 - 17:00');
			museo.contacto.addTelefono('076', '362994');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Geología y Edafología - Universidad Nacional de Cajamarca')
			museo.coleccion = 'Paleontología y ciencias naturales';
			museo.addDescripcion('La colección del museo contiene una variedad de piezas minerales, rocas y fósiles');
			museo.direccion = 'Av. Atahualpa N° 1050, Ciudad Universitaria, Gabinete Geología, Universidad Nacional de Cajamarca';
			museo.addAtencion('Lunes a viernes', '08:00 - 14:00');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Herramientas Andinas - Universidad Nacional de Cajamarca');
			museo.coleccion = 'Arqueológica y etnográfica';
			museo.addDescripcion('El museo exhibe herramientas de época prehispánica, colonial y republicana');
			museo.direccion = 'Av. Atahualpa N° 1050, Ciudad Universitaria, Pabellón Agronomía, Universidad Nacional de Cajamarca';
			museo.addAtencion('Lunes a viernes', '08:00 - 14:00');
			museo.contacto.addTelefono('076', '367802');
			museo.contacto.addTelefono('076', '361667');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de la Marioneta');
			museo.coleccion = 'Artística';
			museo.addDescripcion('Presenta aproximadamente ciento cincuenta marionetas del artista cajamarquino Manuel Nicanor Taica');
			museo.addDescripcion('La colección del museo se inició en 1880 con las marionetas que formaron parte del teatro de marionetas de ese entonces');
			museo.direccion = 'Jr. Silvia Santisteban 934';
			museo.addAtencion('Lunes a viernes', '09:00 - 19:00');
			museo.contacto.addEmail('museodelamarioneta1@hotmail.com');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo de Zoología - Universidad Nacional de Cajamarca');
			museo.coleccion = 'Ciencias naturales';
			museo.addDescripcion('La colección está compuesta por especies animales taxidermizadas de la región de Cajamarca');
			museo.direccion = 'Av. Atahualpa N° 1050, Ciudad Universitaria';
			museo.addAtencion('Lunes a viernes', '08:00 - 14:00');
			museo.contacto.addTelefono('076', '367802');
			museo.contacto.addTelefono('076', '361667');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo Entomológico - Universidad Nacional de Cajamarca');
			museo.coleccion = 'Ciencias naturales';
			museo.addDescripcion('El museo tiene una colección de insectos del Perú y en especial de Cajamarca');
			museo.direccion = 'Av. Atahualpa N° 1050, Ciudad Universitaria, Pabellón de Agronomía, Universidad Nacional de Cajamarca';
			museo.addAtencion('Lunes a viernes', '08:00 - 14:00');
			museo.contacto.addTelefono('076', '367802');
			museo.contacto.addTelefono('076', '361667');

			distrito.museos.push(museo);

			museo = new museaMoz.Museo('Museo I.S.P. Hno. Victorino Elorz Goicochea');
			museo.coleccion = 'Arqueológica y ciencias naturales';
			museo.addDescripcion('El museo exhibe bienes culturales prehispánicos así como especies animales de diversas regiones ecológicas; y se explica las etapas del desarrollo humano');
			museo.direccion = 'Av. El Maestro 290';
			museo.addAtencion('Previa cita', '');
			museo.contacto.web = 'www.isepvictorinoelorz.edu.pe';
			museo.contacto.addTelefono('076', '362968');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Celendín');

		distrito = new museaMoz.Distrito('Sucre');

			museo = new museaMoz.Museo('Museo Huauco');
			museo.coleccion = 'Arqueológica, paleontológica y etnográfica';
			museo.addDescripcion('Presenta una colección de fósiles, así como bienes culturales arqueológicos de cerámica y líticos');
			museo.addDescripcion('Asimismo, en el museo se pueden apreciar bienes etnográficos de la región');
			museo.direccion = 'Jr. Simón Bolívar 211';
			museo.addAtencion('Lunes a viernes', '08:30 - 14:30');
			museo.contacto.addTelefono('076', '552096');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Chota');

		distrito = new museaMoz.Distrito('Chota');

			museo = new museaMoz.Museo('Museo del Instituto Pedagógico Nuestra Señora de Chota');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Ubicado en el edificio del Instituto Superior Pedagógico “Nuestra Señora de Chota”, este museo expone bienes culturales de cerámica de culturas prehispánicas de Cajamarca y de otras regiones de la costa');
			museo.direccion = 'Atahualpa 106';
			museo.addAtencion('Lunes a viernes', '09:00 - 13:00');
			museo.contacto.addTelefono('076', '351034');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Contumazá');

		distrito = new museaMoz.Distrito('Yonán');

			museo = new museaMoz.Museo('Museo de Sitio de San Isidro');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El museo alberga bienes culturales arqueológicos recuperados durante los trabajos realizados en el área que hoy ocupa la Represa de Gallito Ciego');
      museo.keywordFlickr = 'contumaza+cajamarca';
			museo.direccion = 'Jirón Junín 105, Plaza de Armas s/n';
			museo.addAtencion('Lunes a viernes', '07:00 - 13:00');
			museo.addAtencion('Lunes a viernes', '16:00 - 18:30');
			museo.contacto.addTelefono('076', '576023');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Hualgayoc');

		distrito = new museaMoz.Distrito('Bambamarca');

			museo = new museaMoz.Museo('Museo de Antropología e Historia - Bambamarca');
			museo.coleccion = 'Arqueológica e histórico-artística';
			museo.addDescripcion('El museo exhibe bienes culturales prehispánicos donados por los pobladores, como cerámica, restos humanos, metales, textiles y minerales; así como una colección de fotografías y obras del artista Glicerio Villanueva Medina');
			museo.direccion = 'Jaime de Martínez 460';
			museo.addAtencion('Lunes a sábado', '09:00 - 17:00');
			museo.contacto.web = 'www.itlbambamarca.com';
			museo.contacto.addTelefono('076', '353015');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('Jaén');

		distrito = new museaMoz.Distrito('Jaén');

			museo = new museaMoz.Museo('Museo Regional Hermógenes Mejía Solf');
			museo.coleccion = 'Arqueológica, paleontológica y etnográfica';
			museo.addDescripcion('El museo expone una colección de bienes culturales arqueológicos de cerámica, material orgánico y lítico de las culturas de la región; así como fósiles procedentes del Alto Marañón');
			museo.addDescripcion('Posee una colección numismática, una muestra sobre medicina tradicional y bienes culturales etnográficos');
			museo.direccion = 'Av. Hermógenes Mejía s/n';
			museo.addAtencion('Lunes a sábado', '09:00 - 17:00');
			museo.contacto.web = 'www.museohermogenesmejiasolf.com';
			museo.contacto.addTelefono('076', '434118');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('San Ignacio');

		distrito = new museaMoz.Distrito('San Ignacio');

			museo = new museaMoz.Museo('Museo Escolar Los Faicales');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('Está ubicado dentro del Colegio Tito Cusi Yupanqui, exhibe bienes culturales arqueológicos líticos y cerámica de las culturas de la costa norte peruana. Asimismo, presenta fósiles de especies animales y plantas');
			museo.direccion = 'Av. San Ignacio 250';
			museo.addAtencion('Lunes a viernes', '09:00 - 14:00');
			museo.contacto.addTelefono('076', '356084');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

	provincia = new museaMoz.Provincia('San Pablo');

		distrito = new museaMoz.Distrito('San Pablo');

			museo = new museaMoz.Museo('Museo Kuntur Wasi');
			museo.coleccion = 'Arqueológica';
			museo.addDescripcion('El museo exhibe bienes culturales procedentes de las investigaciones arqueológicas en el sitio de Kuntur Wasi como: cerámicas, piezas metálicas, líticas y óseas');
			museo.addDescripcion('Asimismo, presenta planos y fotografías de los trabajos de investigación realizados por la Universidad de Tokio en dicho lugar');
      museo.keywordFlickr = 'kuntur+wasi';
			museo.direccion = 'Avenida del Museo s/n Centro Poblado Kuntur Wasi';
			museo.addAtencion('Martes a domingo', '09:00 - 17:00');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

		distrito = new museaMoz.Distrito('Cajabamba');

			museo = new museaMoz.Museo('Museo Yachaywasi');
			museo.coleccion = 'Arqueológica, histórico-artística y paleontológica';
			museo.addDescripcion('La colección del museo está conformada por bienes culturales de cerámica, metal y textil; instrumentos musicales; obras de arte religioso y otros de época colonial. Además posee una colección de fósiles');
			museo.direccion = 'Jr. Bolognesi 849';
			museo.addAtencion('Lunes a viernes', '09:00 - 17:00');
			museo.contacto.addTelefono('076', '551329');

			distrito.museos.push(museo);

		provincia.distritos.push(distrito);

	region.provincias.push(provincia);

dataApp.push(region);
