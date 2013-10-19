region = new museaMoz.Region('Callao');

	provincia = new museaMoz.Provincia('Callao');

		distrito = new museaMoz.Distrito('Bellavista');

			museo = new museaMoz.Museo('Museo de Bomberos Voluntarios del Perú "Brigadier C.B.P. Ezio Massa Capurro"');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('Nombrado en honor a Ezio Massa Capurro, quien prestó servicio en esta institución por más de 78 años y es considerado el bombero más antiguo del Perú, este museo la historia y antecedentes de los bomberos en el país');
			museo.direccion = 'Av. Alejandro Granda 3ra. Cuadra s/n';
			museo.addAtencion('Lunes a sábado', '09:00 - 17:00');
			museo.contacto.addTelefono('01', '4290318');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

		distrito = new museaMoz.Distrito('Callao');

			museo = new museaMoz.Museo('Museo de la Fuerza de Aviación Naval');
			museo.coleccion = 'Histórica';
			museo.addDescripcion('Presenta modelos a escala de la evolución de aeronaves con las que ha contado la Fuerza Aérea del Perú');
			museo.direccion = 'Av. Faucett s/n – Callao (antes del Aeropuerto)';
			museo.addAtencion('Lunes a viernes', '08:00 - 17:00 (previa cita)');
			museo.contacto.addTelefono('01', '6137100');

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo de Sitio Naval Submarino Abtao');
			museo.coleccion = 'Histórica e industrial';
			museo.addDescripcion('Único museo de su tipo en Sudamérica');
			museo.addDescripcion('Presenta la evolución histórica de los submarinos en el Perú desde el año 1912');
			museo.addDescripcion('La visita en el interior se inicia por el compartimento de torpedos y continúa por los compartimentos de baterías de proa, puesto central, baterías de popa, máquinas y motores');
			museo.addDescripcion('También pueden apreciarse los tubos lanzatorpedos, periscopios, computadora de control de tiro, timones, casilleros, camas, compresoras de aire, eyector de señales, cocina, comedor, enfermería, radar y estación de radio');
			museo.addDescripcion('Además, en uno de los compartimentos se efectúa la recreación en audio y luces de un combate submarino contra una fuerza enemiga de superficie');
			museo.direccion = 'Av. Jorge Chávez 120-A';
			museo.addAtencion('Martes a domingo', '09:30 - 16:30');
			museo.contacto.addEmail('museo.abtao@hotmail.com');
			museo.contacto.addEmail('reservas.abtao@hotmail.com');
			museo.contacto.addTelefono('01', '7956900');
			museo.contacto.web = 'www.submarinoabtao.com';

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo del Ejército Fortaleza Real Felipe');
			museo.coleccion = 'Arqueológica, histórica';
			museo.addDescripcion('La fortaleza del Real Felipe, edificada en el siglo XVIII, es una de las pocas obras de arquitectura militar en el país y la más grande que construyeron los españoles en América del Sur');
			museo.addDescripcion('Convertida hoy en museo, la construcción con forma pentagonal abre sus puertas y permite al visitante sumergirse en la época colonial');
			museo.addDescripcion('Ofrece un recorrido por la historia del Ejército del Perú y sus héroes');
			museo.addDescripcion('En su colección se aprecian armas de guerra, uniformes, medallas, la bandera nacional, entre otros bienes culturales');
			museo.direccion = 'Fortaleza del Real Felipe s/n. Plaza Independencia';
			museo.addAtencion('Lunes a domingo - Incluidos feriados', '09:00 - 16:00');
			museo.contacto.web = 'www.museodelejercito.com.pe';
			museo.contacto.addTelefono('01', '4290532');

			distrito.addMuseo(museo);

			museo = new museaMoz.Museo('Museo Naval "Capitán de Navío Julio José Elías Murguía" - sede Callao');
			museo.coleccion = 'Arqueológica, histórica';
			museo.addDescripcion('Está situado en el centro histórico del Callao y ofrece al visitante la historia naval peruana');
			museo.addDescripcion('Dos salas se explica la diversidad del mar peruano y las técnicas de navegación; y otra está dedicada a la Guerra del Pacífico y al máximo héroe Miguel Grau');
			museo.direccion = 'Jirón José Gálvez 123. Inmediaciones de la Plaza Grau';
			museo.addAtencion('Martes a sábado', '09:00 - 14:00');
			museo.addAtencion('Sábado', '09:00 - 15:00');
			museo.addAtencion('domingo', '09:00 - 16:00');
			museo.contacto.addEmail('informes@museonaval.com.pe');
			museo.contacto.web = 'www.museonaval.com.pe';
			museo.contacto.addTelefono('01', '6136868');

			distrito.addMuseo(museo);

		provincia.addDistrito(distrito);

	region.addProvincia(provincia);

addRegion(region);