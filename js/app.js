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

document.querySelector('#btn-dist-back').addEventListener ('click', function () {
	document.querySelector('#dist').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';

	document.querySelector('#lista-museos').innerHTML = '';
});

document.querySelector('#btn-museo-back').addEventListener ('click', function () {
	document.querySelector('#museo').className = 'right';
	document.querySelector('[data-position="current"]').className = 'current';

	document.querySelector('#mus-descripcion').innerHTML = '';
	document.querySelector('#mus-atencion').innerHTML = '';
	document.querySelector('#mus-detail-contacto').innerHTML = '';
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
		prov, dist, 
		header, ul, li, a, p;

	document.querySelector('#dpto-nombre em').innerHTML = dpto.nombre;

	for (var i = 0; i < dpto.provincias.length; i++) {
		prov = dpto.provincias[i];

		header = document.createElement('header');
		header.innerHTML = prov.nombre;

		ul = document.createElement('ul');

		for (var j = 0; j < prov.distritos.length; j++) {
			dist = prov.distritos[j];

			p = document.createElement('p');
			p.innerHTML = dist.nombre;

			a = document.createElement('a');
			a.setAttribute('href', '#');
			a.setAttribute('data-dist', j);
			a.setAttribute('data-prov', i);
			a.setAttribute('data-dpto', idDpto);
			a.appendChild(p);
			a.addEventListener('click', mostrarDistrito);

			li = document.createElement('li');
			li.appendChild(a);

			ul.appendChild(li);
		}

		document.querySelector('#lista-provs').appendChild(header);
		document.querySelector('#lista-provs').appendChild(ul);
	}

	document.querySelector('[data-position="current"]').className = 'left';
	document.querySelector('#dpto').className = 'current';
}

function mostrarDistrito() {
	var idDist = this.dataset.dist,
		idProv = this.dataset.prov,
		idDpto = this.dataset.dpto,
		dist = dataApp[idDpto].provincias[idProv].distritos[idDist],
		museo,
		li, a, p;

	document.querySelector('#dist-nombre em').innerHTML = dist.nombre;

	for (var i = 0; i < dist.museos.length; i++) {
		museo = dist.museos[i];

		p = document.createElement('p');
		p.innerHTML = museo.nombre;

		a = document.createElement('a');
		a.setAttribute('href', '#');
		a.setAttribute('data-mus', i);
		a.setAttribute('data-dist', idDist);
		a.setAttribute('data-prov', idProv);
		a.setAttribute('data-dpto', idDpto);
		a.addEventListener('click', mostrarMuseo);
		a.appendChild(p);

		li = document.createElement('li');
		li.appendChild(a);

		document.querySelector('#lista-museos').appendChild(li);
	}

	document.querySelector('[data-position="current"]').className = 'left';
	document.querySelector('#dist').className = 'current';
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

		var liAtencion, pAtencion;

		for (var j = 0; j < museo.atencion.length; j++) {
			liAtencion = document.createElement('li');

			pAtencion = document.createElement('p');
			pAtencion.innerHTML = museo.atencion[j].dias;

			liAtencion.appendChild(pAtencion);

			pAtencion = document.createElement('p');
			pAtencion.innerHTML = museo.atencion[j].horario;

			liAtencion.appendChild(pAtencion);

			document.querySelector('#mus-atencion').appendChild(liAtencion);
		}

<<<<<<< HEAD
		if (museo.contacto.email.length == 0 && museo.contacto.telefonos.length == 0 && museo.contacto.web == null) {
			document.querySelector('#mus-contacto').classList.add('hidden');
		} else {
			document.querySelector('#mus-contacto').classList.remove('hidden');

			var liContacto, aContacto, pContacto;
=======
		var liContacto, aContacto, pContacto;

		if (museo.contacto.web != null) {
			liContacto = document.createElement('li');

			aContacto = document.createElement('a');
			aContacto.setAttribute('href', 'http://' + museo.contacto.web);
			aContacto.setAttribute('target', '_blank');
			aContacto.innerHTML = museo.contacto.web;

			pContacto = document.createElement('p');
			pContacto.appendChild(aContacto);

			// liContacto.innerHTML = '<aside class="icon comms-icon contacts-email">'; 
			liContacto.appendChild(pContacto);
>>>>>>> 3b798e7afbe5711464693195ec13a91732291e58

			if (museo.contacto.web != null) {
				liContacto = document.createElement('li');

				aContacto = document.createElement('a');
				aContacto.setAttribute('href', 'http://' + museo.contacto.web);
				aContacto.setAttribute('target', '_blank');
				aContacto.innerHTML = museo.contacto.web;

				pContacto = document.createElement('p');
				pContacto.appendChild(aContacto);

<<<<<<< HEAD
				// liContacto.innerHTML = '<aside class="icon comms-icon contacts-email">'; 
=======
				liContacto.innerHTML = '<aside class="icon comms-icon contacts-email">'; 
>>>>>>> 3b798e7afbe5711464693195ec13a91732291e58
				liContacto.appendChild(pContacto);

				document.querySelector('#mus-detail-contacto').appendChild(liContacto);
			}


<<<<<<< HEAD
			if (museo.contacto.email.length > 0) {
				for (var k = 0; k < museo.contacto.email.length; k++) {
					liContacto = document.createElement('li');

					aContacto = document.createElement('a');
					aContacto.setAttribute('href', 'mailto:' + museo.contacto.email[k]);
					aContacto.innerHTML = museo.contacto.email[k];

					pContacto = document.createElement('p');
					pContacto.appendChild(aContacto);
=======
			var telefono = museo.contacto.telefonos[0];
>>>>>>> 3b798e7afbe5711464693195ec13a91732291e58

					liContacto.innerHTML = '<aside class="icon comms-icon contacts-email">'; 
					liContacto.appendChild(pContacto);

					document.querySelector('#mus-detail-contacto').appendChild(liContacto);
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

<<<<<<< HEAD
				var spanContacto;

				for (var l = 1; l < museo.contacto.telefonos.length; l++) {
					spanContacto = document.createElement('span');
					spanContacto.innerHTML = ' / ';

					pContacto.appendChild(spanContacto);
=======
			liContacto.innerHTML = '<aside class="icon comms-icon contacts-phone">';
			liContacto.appendChild(pContacto);
>>>>>>> 3b798e7afbe5711464693195ec13a91732291e58

					telefono = museo.contacto.telefonos[l];

					aContacto = document.createElement('a');
					aContacto.setAttribute('href', 'tel:' + telefono.numeroMarcar);
					aContacto.innerHTML = telefono.numeroMostrar;

					pContacto.appendChild(aContacto);
				}

				liContacto.innerHTML = '<aside class="icon comms-icon contacts-phone">';
				liContacto.appendChild(pContacto);

				document.querySelector('#mus-detail-contacto').appendChild(liContacto);
			}
		}

	document.querySelector('#museo').className = 'current';
	document.querySelector('[data-position="current"]').className = 'left';
}

listarDepartamentos();
