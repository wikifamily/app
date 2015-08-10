/*!
 * VisualEditor UserInterface WikiaInfoboxOptionWidget class.
 */

/**
 * @class
 * @extends OO.ui.DecoratedOptionWidget
 *
 * @constructor
 * @param {Object} [config] Configuration options
 * @cfg {number} [size] Media thumbnail size
 */
ve.ui.WikiaInfoboxOptionWidget = function VeUiWikiaMapOptionWidget( config ) {
	// Parent constructor
	ve.ui.WikiaInfoboxOptionWidget.super.call( this, config );

	// Properties
	this.$appears = this.$( '<div>' )
		.addClass( 've-ui-wikiaInfoboxOptionWidget-appears' );
	this.$gradient = this.$( '<div>' )
		.addClass( 've-ui-wikiaInfoboxOptionWidget-gradient' );

	// Initialization
	if ( config.data.uses ) {
		this.setAppears( config.data.uses );
	}
	this.$element
		.addClass( 've-ui-wikiaInfoboxOptionWidget' )
		.append( this.$appears );
	this.$label
		.append( this.$gradient );
};

/* Inheritance */

OO.inheritClass( ve.ui.WikiaInfoboxOptionWidget, OO.ui.DecoratedOptionWidget );

/* Methods */

/**
 * Set the value of the appears element
 *
 * @param {number} value Number of times the template appears
 */
ve.ui.WikiaInfoboxOptionWidget.prototype.setAppears = function ( value ) {
	this.$appears.text( ve.msg( 'wikia-visualeditor-wikiainfoboxoptionwidget-appears', value ) );
};
