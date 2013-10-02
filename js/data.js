var dataApp = [
	{ // Primer nivel: Regiones del país
		nombre: 'Lambayeque',
		provincias: [
			{ // Segundo nivel: Provincias
				nombre: 'Chiclayo',
				distritos: [
					{ // Tercer nivel: Distritos
						nombre: 'Chiclayo',
						museos: [
							{ // Cuarto nivel: Museos
								nombre: 'Museo de Historia Natural Víctor Baca Aguinaga',
								coleccion: 'Historia Natural',
								descripcion: [
									'El museo posee una colección de minerales y especies de la flora y fauna silvestre de Lambayeque que están en peligro de extinción'
								],
								direccion: 'Jr. Atahualpa 481',
                coordenadas: [ { latitud: null, longitud: null } ],
								atencion: [
									{ dias: 'Lunes a domingo', horario: '09:00 - 16:00' }
								],
								contacto: {
									email: [],
									telefonos: [
										{ numeroMarcar: '+5174283610', numeroMostrar: '(074) 283610' },
										{ numeroMarcar: '+5174283146', numeroMostrar: '(074) 283146' }
									],
									web: null
								}
							}
						]
					},
					{
						nombre: 'Pimentel',
						museos: [
							{
								nombre: 'Casa Museo Héroe Cap. FAP José Quiñones',
								coleccion: 'Histórico-artística',
								descripcion: [
									'Este inmueble ha sido proclamado Monumento Histórico Cultural',
									'Está construido a base de caña, conchuelo (piedra, cemento, arena), yeso y vigas de algarrobo',
									'En esta casa vivió el héroe de la aviación nacional, José Abelardo Quiñones Gonzáles, quien un 23 de julio de 1941 ofrendó su vida estrellándose contra los enemigos en el combate ante los ecuatorianos',
									'Esta casa museo está compuesto por cinco ambientes en donde se exhiben fotografías del héroe',
									'También seconserva la cama de bronce, su tocador con lavatorio, algunas arañas de bronce para las luces, piezas de la vajilla, el juego de comedor y algunos sillones de la época con decorados de mármol',
									'En el patio del fondo se ha instalado un pedestal con la estatua del héroe y placas de diferentes instituciones en su homenaje',
									'Cuenta además con una pequeña biblioteca'
								],
								direccion: 'Calle J. Quiñones Nº 444 – 448',
                coordenadas: [ { latitud: null, longitud: null } ],
								atencion: [
									{ dias: 'Lunes a viernes', horario: '09:00 - 17:00' }
								],
								contacto: {
									email: [],
									telefonos: [
										{ numeroMarcar: '+5174208417', numeroMostrar: '(074) 208417' }
									],
									web: null
								}
							},
							{
								nombre: 'Museo del Colegio Militar “Elías Aguirre”',
								coleccion: 'Histórica',
								descripcion: [
									'El museo presenta una colección de cuadros y fotografías sobre la creación y evolución del Colegio Militar Elías Aguirre',
									'Se exhiben maquetas del Monitor Huáscar, vitrinas con trofeos y emblemas de la institución, dos bustos del Capitán de Corbeta Elías Aguirre Romero y una maqueta del Combate de Angamos'
								],
								direccion: 'Km. 10 Carretera Pimentel',
                coordenadas: [ { latitud: null, longitud: null } ],
								atencion: [
									{ dias: 'Lunes a viernes', horario: '07:30 a 16:00' }
								],
								contacto: {
									email: ['imagen@cmea.edu.pe'],
									telefonos: [
										{ numeroMarcar: '+5174452919', numeroMostrar: '(074) 452919' },
										{ numeroMarcar: '+5174318856', numeroMostrar: '(074) 318856' }
									],
									web: 'www.cmea.edu.pe'
								}
							}
						]
					},
					{
						nombre: 'Zaña',
						museos: [
							{
								nombre: 'Museo Afroperuano',
								coleccion: 'Etnográfica e histórica',
								descripcion: [
									'El Museo Afroperuano de Zaña se inauguró el año 2005 convirtiéndose en la primera institución de su género en el país',
									'Presenta una colección de instrumentos musicales y discografía de afrodescendientes',
									'Tiene carretas antiguas de madera que fueron utilizadas en las haciendas para el transporte de caña de azúcar. Cuenta con una colección de pinturas, dibujos, mapas y fotografías que explican la secuencia histórica de la presencia de los africanos y descendientes en las Américas y específicamente en el Perú desde el siglo XVI hasta el siglo XIX',
									'Además se exhiben piezas de castigos y torturas a los esclavizados y elementos de supervivencia en la vida cotidiana'
								],
								direccion: 'Calle Independencia 645',
                coordenadas: [ { latitud: null, longitud: null } ],
								atencion: [
									{ dias: 'Martes a domingo', horario: '09:00 - 12:30' },
									{ dias: 'Martes a domingo', horario: '15:00 - 17:00' }
								],
								contacto: {
									email: ['museoafroperuano@yahoo.es'],
									telefonos: [
										{ numeroMarcar: '+5174431042', numeroMostrar: '(074) 431042' }
									],
									web: 'www.museoafroperuano.com'
								}
							},
							{
								nombre: 'Museo de Sitio Huaca Rajada - Sipán',
								coleccion: 'Arqueológica',
								descripcion: [
									'En el museo se exponen los bienes culturales recuperados en las últimas excavaciones realizadas en el sitio arqueológico, con énfasis en los personajes de la nobleza Moche, hallados en la tumba N°, 14, 15 y 16 en el mausoleo real de Huaca Rajada',
									'Asimismo, el museo posee bienes culturales de la cultura Lambayeque para explicar la continuidad cultural en la zona'
								],
								direccion: 'Complejo Arqueológico de Huaca Rajada-Sipán. Campiña Huaca Rajada S/N. Carretera Sipán - Pampa Grande',
								atencion: [
									{ dias: 'Lunes a domingo', horario: '09:00 - 17:00' }
								],
								contacto: {
									email: ['museohrsipan@gmail.com'],
									telefonos: [],
									web: null
								}
							}
						]
					}
				]
			},
			{
				nombre: 'Ferreñafe',
				distritos: [
					{
						nombre: 'Ferreñafe',
						museos: [
							{
								nombre: 'Museo Nacional Sicán',
								coleccion: 'Arqueológica',
								descripcion: [
									'La exhibición permanente está conformada por bienes culturales distribuidos en salas temáticas que explican los diferentes aspectos de la sociedad Sicán',
									'El atractivo principal del museo lo constituye la exposición del ajuar de una tumba de élite excavada en Huaca del Oro',
									'La colección comprende diversos bienes culturales de metal como coronas, máscaras funerarias y cuchillos ceremoniales; cerámica; conchas de Spondylus y líticos representativos de esta cultura',
									'Asimismo, se aprecia recreaciones de tumbas y actividades de la vida cotidiana de la época'
								],
								direccion: 'Av. Batán Grande Cdra. 9 S/N. Carretera Pítipo – Ferreñafe',
                coordenadas: [ { latitud: null, longitud: null } ],
								atencion: [
									{ dias: 'Martes a domingo', horario: '09:00 - 17:00' }
								],
								contacto: {
									email: ['museosican@speedy.com.pe', 'museosican@hotmail.com'],
									telefonos: [
										{ numeroMarcar: '+5174286469', numeroMostrar: '(074) 286469' }
									],
									web: null
								}
							}
						]
					}
				]
			},
			{
				nombre: 'Lambayeque',
				distritos: [
					{
						nombre: 'Lambayeque',
						museos: [
							{
								nombre: 'Museo Arqueológico Nacional Brüning',
								coleccion: 'Arqueológica y etnográfica',
								descripcion: [
									'El museo exhibe una colección de bienes culturales que explica la secuencia cronológica del desarrollo cultural del Perú, con cerámica representativa de las culturas de la zona, destacando los materiales de las culturas Moche y Lambayeque',
									'Asimismo, posee recreaciones a escala natural de la vida cotidiana y costumbres de Lambayeque',
									'Actualmente es el centro de las investigaciones arqueológicas de la región'
								],
								direccion: 'Av. Huamachuco S/N',
                coordenadas: [ { latitud: null, longitud: null } ],
								atencion: [
									{
										dias: 'Lunes a domingo',
										horario: '09:00 - 17:00'
									}
								],
								contacto: {
									email: ['museonacionalbruning@yahoo.es'],
									telefonos: [
										{ numeroMarcar: '+5174282110', numeroMostrar: '(074) 282110' }
									],
									web: null
								}
							},
							{
								nombre: 'Museo de Sitio Huaca Chotuna - Chornancap',
								coleccion: 'Arqueológica',
								descripcion: [
									'El museo conserva el estilo arquitectónico de la zona; su colección está compuesta por cerámicas, metales y fragmentos de frisos recuperados en las investiga ciones arqueológicas realizadas desde el año 2007 en el Complejo arqueológico Chotuna Chornancap',
									'Asimismo, presenta recreaciones a escala natural de la llegada de Naylamp'
								],
								direccion: 'Huaca Chotuna. Sector Bodegones. Comunidad campesina San José. Carretera Lambayeque – San José',
                coordenadas: [ { latitud: null, longitud: null } ],
								atencion: [
									{ dias: 'Lunes a domingo', horario: '08:00 - 15:00' }
								],
								contacto: {
									email: ['museonacionalbruning@yahoo.es'],
									telefonos: [
										{ numeroMarcar: '+5174282110', numeroMostrar: '(074) 282110' }
									],
									web: null
								}
							},
							{
								nombre: 'Museo de Sitio Túcume',
								coleccion: 'Arqueológica',
								descripcion: [
									'El museo presenta una colección de bienes culturales arqueológicos, procedentes de las investigaciones arqueológicas, que corresponden a la última fase de la cultura Lambayeque, con evidencias de la presencia de la cultura Chimú e Inca, así como del periodo Colonial',
									'Asimismo, exhibe maquetas de las huacas de la zona arqueológica y explica el proceso de los metales desde la extracción hasta la producción de los bienes culturales'
								],
								direccion: '1 km. al este del pueblo de Túcume',
                coordenadas: [ { latitud: null, longitud: null } ],
								atencion: [
									{ dias: 'Martes a domingo', horario: '09:00 - 17:00' }
								],
								contacto: {
									email: ['informes@museodesitiotucume.com'],
									telefonos: [
										{ numeroMarcar: '+5174612254', numeroMostrar: '(074) 612254' },
										{ numeroMarcar: '+5174792758', numeroMostrar: '(074) 792758' }
									],
									web: 'www.museodesitiotucume.org'
								}
							},
							{
								nombre: 'Museo Tumbas Reales de Sipán',
								coleccion: 'Arqueológica',
								descripcion: [
									'El diseño arquitectónico de este museo está inspirado en las pirámides truncas de la cultura Moche',
									'El principal atractivo es la recreación de la cámara funeraria del Señor de Sipán',
									'En las salas se exhibe una colección de bienes culturales distribuidos temáticamente: cerámica; material orgánico, como pectorales de concha, tocados de algodón y adornos de plumas; y metal, como estandartes, coronas, orejeras de oro con turquesas y sonajeros, entre otros'
								],
								direccion: 'Av. Juan Pablo Vizcardo y Guzmán N° 895',
                coordenadas: [ { latitud: null, longitud: null } ],
								atencion: [
									{ dias: 'Martes a domingo', horario: '09:00 - 17:00' }
								],
								contacto: {
									email: ['tumbasdesipan@hotmail.com', 'tumbasdesipan@gmail.com'],
									telefonos: [
										{ numeroMarcar: '+5174283978', numeroMostrar: '(074) 283978' },
										{ numeroMarcar: '+5174283977', numeroMostrar: '(074) 283977' }
									],
									web: 'www.museotumbasrealessipan.pe'
								}
							}
						]
					}
				]
			}
		]
	},
  { // Primer nivel: Regiones del país
		nombre: 'Lima',
		provincias: [
			{ // Segundo nivel: Provincias
				nombre: 'Lima',
				distritos: [
					{ // Tercer nivel: Distritos
						nombre: 'Pueblo Libre',
						museos: [
							{ // Cuarto nivel: Museos
								nombre: 'Museo Nacional de Arqueología, Antropología e Historia del Perú',
								coleccion: 'Arqueología, Antropología y Etnografía',
								descripcion: [
									'Ubicado en el distrito de Pueblo Libre en la ciudad de Lima, el museo nacional tiene una enorme variedad de objetos culturales históricos de la civilización peruana.',
                  'La calidad de los objetos que están en exhibición y que se almacenan en sus reservas museográficas, lo convierten en el museo más importante del Perú.'
								],
								direccion: 'Plaza Bolívar s/n',
                coordenadas: [ { latitud: "-12.073611", longitud: "-77.061667" } ],
								atencion: [
									{ dias: 'Martes a sábado', horario: '09:00 - 17:00' },
									{ dias: 'Domingo', horario: '09:00 - 16:00' },
								],
								contacto: {
									email: [ 'mnaahp@mcultura.gob.pe' ],
									telefonos: [
										{ numeroMarcar: '+5114635070', numeroMostrar: '(01) 4635070' }
									],
									web: null
								}
							}
						]
					},
        ]
      }
    ]
  }
];
