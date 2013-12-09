ve.ui.WikiaDropTargetWidget = function VeUiWikiaDropTargetWidget ( config ) {
	ve.ui.Widget.call( this, config );
	this.upload = config.upload;
	this.className = 've-ui-widget-droptarget';
	this.$overlay = config.surface.$globalOverlay.find( '.ve-ui-window' );
	this.initialize();
};

ve.inheritClass( ve.ui.WikiaDropTargetWidget, ve.ui.Widget );

ve.ui.WikiaDropTargetWidget.prototype.initialize = function() {
	this.$ = this.$$( '<div>' ).addClass( this.className );

	this.$.css({
		height: '1000px',
		position: 'absolute',
		top: 0,
		left: 0,
		width: '100%',
		background: 'salmon',
		display: 'none'
	});

	this.$insertMediaDialog = this.$overlay.find( '.ve-ui-window-frame' );
	this.$.appendTo( this.$insertMediaDialog );

	this.$overlay.on( 'dragenter dragover', ve.bind( this.onFileDrag, this ) );
	this.$overlay.on( 'dragleave dragend drop', ve.bind( this.onFileDragEnd, this ) );

	this.$.on( 'dragenter dragover', ve.bind( this.onFileDrag, this ) );
	this.$.on( 'drop', ve.bind( this.onFileDrop, this ) );

	this.fadeTimeout = null;
};

ve.ui.WikiaDropTargetWidget.prototype.onFileDrag = function( e ) {
	e.preventDefault();
	if ( this.fadeTimeout ) {
		clearTimeout( this.fadeTimeout );
	}
	if ( this.$.is( ':visible' ) ) {
		return;
	}
	this.$.fadeIn();
};

ve.ui.WikiaDropTargetWidget.prototype.onFileDragEnd = function( e ) {
	e.preventDefault();
	if ( !this.$.is( ':visible' ) ) {
		return;
	}
	this.fadeTimeout = setTimeout( ve.bind( function() {
		this.$.fadeOut();
	}, this ), 200 );
};

ve.ui.WikiaDropTargetWidget.prototype.onFileDrop = function( e ) {
	var files,
			transfer,
			reader,
			i,
			file;

	e.preventDefault();
	this.$.fadeOut();

	transfer = e.originalEvent.dataTransfer;
	files = transfer.files;
	var filesArray = [];
	for( i = 0; i < files.length; i++ ) {
		filesArray.push( files[i] );
	}

	this.upload.$file.trigger( 'change', filesArray[0] );
	return false;
};
