Router.configure({
  layoutTemplate: 'layout'
});


Router.map(function() { 
	this.route('inicio', {path: '/'});
	this.route('contacto', {path: '/contacto'});
	this.route('nosotros', {path: '/nosotros'});
	this.route('ayuda', {path: '/ayuda'});


	 
});