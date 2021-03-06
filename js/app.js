document.querySelector('#btn-to-about').addEventListener('click', function () {
	document.querySelector('#about').className = 'current';
	document.querySelector('[data-position="current"]').className = 'left';
});

document.querySelector('#btn-about-back').addEventListener ('click', function () {
	document.querySelector('#about').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';
});

document.querySelector('#btn-dpto-back').addEventListener ('click', function () {
	document.querySelector('#dpto').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';

	document.querySelector('#lista-provs').innerHTML = '';
});

document.querySelector('#btn-museo-back').addEventListener ('click', function () {
	document.querySelector('#museo').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';

	document.querySelector('#mus-descripcion').innerHTML = '';
	document.querySelector('#mus-costos-detail').innerHTML = '';
	document.querySelector('#mus-atencion-detail').innerHTML = '';
	document.querySelector('#mus-contacto-detail').innerHTML = '';
});

function listarDepartamentos() {
	var li, a,
		dpto;

	for (var i = 0; i < dataApp.length; i++) {
		dpto = dataApp[i];

		a = document.createElement('a');
		a.setAttribute('href', '#');
		a.setAttribute('data-dpto', i);
		a.innerHTML = dpto.nombre;
		a.addEventListener('click', mostrarDepartamento);

		li = document.createElement('li');
		li.appendChild(a);

		document.querySelector('#lista-dptos').appendChild(li);
	};
}

function mostrarDepartamento () {
	var idDpto = this.dataset.dpto,
		dpto = dataApp[idDpto],
		prov, dist, museo, 
		header, ul, li, a, p1, p2;

	document.querySelector('#dpto-nombre em').innerHTML = dpto.nombre;

	for (var i = 0; i < dpto.provincias.length; i++) {
		prov = dpto.provincias[i];

		header = document.createElement('header');
		header.innerHTML = prov.nombre;

		ul = document.createElement('ul');
		ul.className = 'texto-completo';

		for (var j = 0; j < prov.distritos.length; j++) {
			dist = prov.distritos[j];

			for (var k = 0; k < dist.museos.length; k++) {
				museo = dist.museos[k];

				p1 = document.createElement('p');
				p1.innerHTML = museo.nombre;

				p2 = document.createElement('p');
				p2.innerHTML = dist.nombre;

				a = document.createElement('a');
				a.setAttribute('href', '#');
				a.setAttribute('data-mus', k);
				a.setAttribute('data-dist', j);
				a.setAttribute('data-prov', i);
				a.setAttribute('data-dpto', idDpto);
				a.appendChild(p1);
				a.appendChild(p2);
				a.addEventListener('click', mostrarMuseo);

				li = document.createElement('li');
				li.appendChild(a);

				ul.appendChild(li);
			}
		}

		document.querySelector('#lista-provs').appendChild(header);
		document.querySelector('#lista-provs').appendChild(ul);
	}

	document.querySelector('#dpto').className = 'current';
	document.querySelector('[data-position="current"]').className = 'left';
}

function mostrarMuseo() {
	var idMuseo = this.dataset.mus,
		idDist = this.dataset.dist,
		idProv = this.dataset.prov,
		idDpto = this.dataset.dpto,
		museo = dataApp[idDpto].provincias[idProv].distritos[idDist].museos[idMuseo];

		document.querySelector('#mus-nombre').innerHTML = museo.nombre;
		document.querySelector('#mus-coleccion').innerHTML = museo.coleccion;
		document.querySelector('#mus-direccion').innerHTML = museo.direccion;
		document.querySelector('#mus-distritopd').innerHTML = dataApp[idDpto].provincias[idProv].distritos[idDist].nombre + ', ' + dataApp[idDpto].nombre +'.';

		var pDescripcion;

		for (var i = 0; i < museo.descripcion.length; i++) {
			pDescripcion = document.createElement('p');
			pDescripcion.className = 'small';
			pDescripcion.innerHTML = museo.descripcion[i];

			document.querySelector('#mus-descripcion').appendChild(pDescripcion);
		}
    
    document.querySelector('#mus-imagenes').innerHTML = ''; //always clean area
    if (museo.keywordFlickr)
    { 
      insertImages(museo.keywordFlickr,"#mus-imagenes");
    }

		if (museo.costos == null) {
			document.querySelector('#mus-costos-detail').innerHTML = '<li><p>Ingreso gratuito</p></li>';
		} else if (museo.costos.length == 0) {
			document.querySelector('#mus-costos-detail').innerHTML = '<li><p>No disponible</p></li>';
		} else if (museo.costos.length > 0){
			var liCosto, pCosto;

			for (var i = 0; i < museo.costos.length; i++) {
				liCosto = document.createElement('li');
				pCosto = document.createElement('p');

				pCosto.innerHTML = museo.costos[i].concepto + ': S/. ' + museo.costos[i].precio;

				liCosto.appendChild(pCosto);

				document.querySelector('#mus-costos-detail').appendChild(liCosto);
			}
		}
		

		if (museo.atencion.length == 0) {
			document.querySelector('#mus-atencion').classList.add('hidden');
		} else {
			document.querySelector('#mus-atencion').classList.remove('hidden');

			var liAtencion, pAtencion;

			for (var j = 0; j < museo.atencion.length; j++) {
				liAtencion = document.createElement('li');

				pAtencion = document.createElement('p');
				pAtencion.innerHTML = museo.atencion[j].dias;

				liAtencion.appendChild(pAtencion);

				pAtencion = document.createElement('p');
				pAtencion.innerHTML = museo.atencion[j].horario;

				liAtencion.appendChild(pAtencion);

				document.querySelector('#mus-atencion-detail').appendChild(liAtencion);
			}
		}

		if (museo.contacto.emails.length == 0 && museo.contacto.telefonos.length == 0 && museo.contacto.web == null) {
			document.querySelector('#mus-contacto').classList.add('hidden');
		} else {
			document.querySelector('#mus-contacto').classList.remove('hidden');

			var liContacto, aContacto, pContacto;

			if (museo.contacto.web != null) {
				liContacto = document.createElement('li');

				aContacto = document.createElement('a');
				aContacto.setAttribute('href', 'http://' + museo.contacto.web);
				aContacto.setAttribute('target', '_blank');
				aContacto.innerHTML = museo.contacto.web;

				pContacto = document.createElement('p');
				pContacto.appendChild(aContacto);

				liContacto.appendChild(pContacto);

				document.querySelector('#mus-contacto-detail').appendChild(liContacto);
			}


			if (museo.contacto.emails.length > 0) {
				for (var k = 0; k < museo.contacto.emails.length; k++) {
					liContacto = document.createElement('li');

					aContacto = document.createElement('a');
					aContacto.setAttribute('href', 'mailto:' + museo.contacto.emails[k]);
					aContacto.innerHTML = museo.contacto.emails[k];

					pContacto = document.createElement('p');
					pContacto.appendChild(aContacto);

					liContacto.innerHTML = '<aside class="icon comms-icon contacts-email">'; 
					liContacto.appendChild(pContacto);

					document.querySelector('#mus-contacto-detail').appendChild(liContacto);
				}
			}

			if (museo.contacto.telefonos.length > 0) {
				liContacto = document.createElement('li');

				var telefono = museo.contacto.telefonos[0];

				aContacto = document.createElement('a');
				aContacto.setAttribute('href', 'tel:' + telefono.numeroMarcar);
				aContacto.innerHTML = telefono.numeroMostrar;

				pContacto = document.createElement('p');
				pContacto.appendChild(aContacto);

				var spanContacto;

				for (var l = 1; l < museo.contacto.telefonos.length; l++) {
					spanContacto = document.createElement('span');
					spanContacto.innerHTML = ' / ';

					pContacto.appendChild(spanContacto);

					telefono = museo.contacto.telefonos[l];

					aContacto = document.createElement('a');
					aContacto.setAttribute('href', 'tel:' + telefono.numeroMarcar);
					aContacto.innerHTML = telefono.numeroMostrar;

					pContacto.appendChild(aContacto);
				}

				liContacto.innerHTML = '<aside class="icon comms-icon contacts-phone">';
				liContacto.appendChild(pContacto);

				document.querySelector('#mus-contacto-detail').appendChild(liContacto);
			}
		}

	document.querySelector('#museo').className = 'current';
}

function insertImages(keyword,area)
{
  var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=3f88989f019d9839a86b272ef9de2c2c&sort=relevance&extras=url_q&per_page=4&page=1";
  var src;
  document.querySelector(area).innerHTML = '<p class="small"><progress></progress> Cargando imágenes ...</p>';
  $.getJSON(url + "&text=" + keyword + "&format=json&jsoncallback=?", function(data){
    $.each(data.photos.photo, function(i,item){
        if (i==0)   document.querySelector(area).innerHTML = '';
        src = item.url_q;
        $("<img/>").attr("src", src).attr("class","imageclass").appendTo(area);
    });
  });
}

insertImages("Tourism+Peru","#images");

listarDepartamentos();
