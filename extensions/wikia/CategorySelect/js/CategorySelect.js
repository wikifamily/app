(function( window, $, undefined ) {

var action = window.wgAction,
	wgCategorySelect = window.wgCategorySelect,
	Wikia = window.Wikia || {};

/**
 * CategorySelect
 * Low-level category tracking.
 *
 * @param	{Array} (categories)
 *			The initial list of categories.
 */
var CategorySelect = function( categories ) {
	var i, length;

	this.categories = [];

	if ( $.isArray( categories ) ) {
		for ( i = 0, length = categories.length; i < length; i++ ) {
			this.categories.push( this.makeCategory( categories[ i ] ) );
		}
	}
};

/**
 * Adds a category to the categories array.
 *
 * @param	{String|Object} category
 *			The name of a category or an object with category properties.
 * @returns	{Number}
 *			The index of the added category.
 */
CategorySelect.prototype.addCategory = function( category ) {
	return ( this.categories.push( this.makeCategory( category ) ) - 1 );
};

/**
 * Edits a category from the categories array.
 *
 * @param	{Number|String} category
 *			The index or name of a category.
 * @param	{Object} value
 *			The new category object or null if the category does not exist.
 */
CategorySelect.prototype.editCategory = function( category, value ) {
	var index = this.indexOf( category );

	return index >= 0 ? ( this.categories[ index ] = this.makeCategory( value ) ) : null;
};

/**
 * Gets a category from the categories array.
 *
 * @param	{Number|String} category
 *			The index or name of a category.
 * @returns	{Object}
 *			The category object or null if the category does not exist.
 */
CategorySelect.prototype.getCategory = function( category ) {
	var index = this.indexOf( category );

	return index >= 0 ? this.categories[ index ] : null;
};

/**
 * Gets the index of a category from the category array.
 *
 * @param	{Number|String} category
 *			The index or name of a category.
 * @returns	{Number}
 *			The index of the category, or -1 if the category does not exist.
 */
CategorySelect.prototype.indexOf = function( category ) {
	var i, length, obj,
		index = parseInt( category );

	if ( isNaN( index ) || this.categories[ index ] === undefined ) {
		index = -1;

		for ( i = 0, length = this.categories.length; i < length; i++ ) {
			if ( ( obj = categories[ i ] ) && obj.name == category ) {
				index = i;
				break;
			}
		}
	}

	return index;
};

CategorySelect.prototype.isDuplicate = function( category ) {
	// TODO
};

/**
 * Generates a normalized category object.
 *
 * @param	{Object|String} category
 *			The name of a category or an object with category properties.
 * @returns {Object}
 *			The normalized category.
 */
CategorySelect.prototype.makeCategory = (function() {
	var properties = [ 'name', 'namespace', 'sortKey' ],
		rCategory = new RegExp( '\\[\\[' +
			// Category namespace
			'(' + wgCategorySelect.defaultNamespaces + '):' +
			// Category name
			'([^\\]|]+)' +
			// Category sortKey (optional)
			'\\|?([^\\]]+)?' +
		']]', 'i' );

	return function( category ) {
		var pieces, prop,
			base = {
				namespace: wgCategorySelect.defaultNamespace,
				sortKey: wgCategorySelect.defaultSortKey
			};

		if ( typeof category == 'object' ) {
			category = $.extend( base, category );

		} else {
			base.name = category;
			category = base;
		}

		// Get rid of unecessary properties
		for ( prop in category ) {
			if ( $.inArray( prop, properties ) < 0 ) {
				delete category[ prop ];
			}
		}

		// Extract more information if name is a wikilink
		if ( ( pieces = rCategory.exec( category.name ) ) ) {
			category.namespace = pieces[ 1 ];
			category.name = pieces[ 2 ];

			// SortKey is optional
			if ( pieces[ 3 ] != undefined ) {
				category.sortKey = pieces[ 3 ];
			}
		}

		return category;
	}
})();

/**
 * Removes a category from the categories array.
 *
 * @param	{Number|String} category
 *			The index of a category in the categories array or a string matching a
 *			category in the array.
 * @returns {Object}
 *			The category object or null if the category does not exist.
 */
CategorySelect.prototype.removeCategory = function( category ) {
	var index = this.indexOf( category );

	return index >= 0 ? this.categories.splice( index, 1, null ) : null;
};

/**
 * jQuery.fn.categorySelect
 * Sits on top of CategorySelect and provides user interface components.
 *
 * @param	{Object} options
 *			The settings to configure the instance with.
 */
$.fn.categorySelect = (function() {
	var cache = {},
		namespace = 'categorySelect';

	// Build static method cache
	cache.messages = {
		categoryEdit: $.msg( 'categoryselect-category-edit' ),
		categoryNameLabel: $.msg( 'categoryselect-modal-category-name' ),
		categoryRemove: $.msg( 'categoryselect-category-remove' ),
		modalButtonSave: $.msg( 'categoryselect-modal-button-save' ),
		modalEmptyCategoryName: $.msg( 'categoryselect-modal-category-name-empty' )
	};

	// Build static template cache (content is lazy loaded)
	cache.templates = {
		category: {
			content: '',
			data: {
				blankImageUrl: window.wgBlankImgUrl,
				className: 'normal new',
				messages: {
					edit: cache.messages.categoryEdit,
					remove: cache.messages.categoryRemove
				}
			}
		},
		categoryEdit: {
			content: '',
			data: {
				messages: {
					name: cache.messages.categoryNameLabel
				}
			}
		}
	};

	function error( message ) {
		throw namespace + ': ' + message;
	}

	function getTemplate( name ) {
		var template = cache.templates[ name ];

		if ( !template ) {
			error( 'Template "' + name + '" is not defined' );
		}

		return template.content && template || $.Deferred(function( dfd ) {
			Wikia.getMultiTypePackage({
				mustache: 'extensions/wikia/CategorySelect/templates/CategorySelectController_' + name + '.mustache',
				callback: function( pkg ) {
					template.content = pkg.mustache[ 0 ];
					dfd.resolve( template );
				}
			});

			return dfd.promise();
		});
	}

	function getWikiCategories() {
		return cache.wikiCategories || $.nirvana.sendRequest({
			controller: 'CategorySelectController',
			method: 'getWikiCategories',
			type: 'GET',
			callback: function( wikiCategories ) {
				cache.wikiCategories = wikiCategories;
			}
		});
	}

	return function( options ) {
		options = $.extend( {}, $.fn.categorySelect.options, options );

		return this.each(function() {
			var $element = $( this ),
				$categories = $element.find( options.categories ),
				categorySelect = new CategorySelect( options.data );

			function addCategory( event, ui ) {
				var data = {},
					$input = $( this ),
					value = ui != undefined ? ui.item.value : $input.val();

				// User selected a suggested item from the autocomplete list
				if ( event.type == 'autocompleteselect'

					// User pressed the enter key in the input field
					|| ( event.type == 'keypress' && event.which == 13 ) ) {

					// Prevent the edit form from submitting
					event.preventDefault();

					// Make sure value isn't empty
					if ( value != undefined && value != '' ) {
						data.category = categorySelect.makeCategory( value );
						data.index = categorySelect.addCategory( data.category );
						data.categories = categorySelect.categories;

						$.when( getTemplate( 'category' ) ).done(function( template ) {

							// Let the implementation handle it from here
							notifyListeners( 'add', {
								element: $( options.categories ),
								template: $.extend( true, template, { data: data } )
							});
						});

						notifyListeners( 'update', data );

						// Clear out the input
						$input.val( '' );
					}
				}
			}

			function editCategory( event ) {
				var $modal,
					$category = $( this ).closest( options.category ),
					index = $category.data( 'index' ),
					category = categorySelect.getCategory( index );

				$.when( getTemplate( 'categoryEdit' ) ).done(function( template ) {
					$modal = $.showCustomModal( cache.messages.categoryEdit, Mustache.render( template.content, $.extend( true, template.data, {
						category: category,
						index: index,
						messages: {
							sortKey: $.msg( 'categoryselect-modal-category-sortkey', category.name )
						}
					})), {
						buttons: [
							{
								id: 'CategorySelectEditModalSave',
								defaultButton: true,
								message: cache.messages.modalButtonSave,
								handler: function( event ) {
									category.name = $modal.find( '[name="categoryName"]' ).val();
									category.sortKey = $modal.find( '[name="categorySortKey"]' ).val();

									// Don't allow saving with empty category name
									if ( category.name == '' ) {
										$modal
											.find( '.categoryName' ).addClass( 'error' )
											.find( '.error-msg' ).text( cache.messages.modalEmptyCategoryName );
										return;
									}

									// Update data
									category = categorySelect.editCategory( index, category );

									// Update DOM
									$category.find( '.name' ).text( category.name );

									notifyListeners( 'update', {
										index: index,
										category: category,
										categories: categorySelect.categories
									});

									$modal.closeModal();
								}
							}
						],
						id: 'CategorySelectEditModal',
						width: 500
					});
				});
			}

			function notifyListeners( eventType, data ) {
				$element.trigger( eventType + '.' + namespace , data );
			}

			function removeCategory( event ) {
				var $category = $( this ).closest( options.category ),
					index = $category.data( 'index' ),
					category = categorySelect.removeCategory( index ),
					data = {
						category: category,
						categories: categorySelect.categories,
						index: index
					};

				notifyListeners( 'remove', $.extend( true, data, { element: $category } ) );
				notifyListeners( 'update', data );
			}

			function setupAutocomplete( event ) {
				var $input = $( this );

				$.when( getWikiCategories() ).done(function( wikiCategories ) {
					$input.autocomplete( $.extend( options.autocomplete, {
						select: addCategory,
						source: function( request, response ) {

							// Limit the response to 10 results
							response( $.ui.autocomplete.filter( wikiCategories, request.term ).slice( 0, 10 ) );
						}
					}));
				});
			}

			$element
				.data( namespace, categorySelect )
				.off( '.' + namespace )
				.on( 'click.' + namespace, options.editCategory, editCategory )
				.on( 'click.' + namespace, options.removeCategory, removeCategory )
				.on( 'keypress.' + namespace, options.addCategory, addCategory );

			// Setup autocomplete immediately if initialization was from focus on addCategory
			if ( options.event && options.event.type == 'focusin' && $( options.event.currentTarget ).is( options.addCategory ) ) {
				setupAutocomplete.call( options.event.currentTarget, event );

			} else {
				$element.one( 'focus.' + namespace, options.addCategory, setupAutocomplete );
			}
		});
	}
})();

$.fn.categorySelect.options = {
	autocomplete: {
		appendTo: '.CategorySelect'
	},
	categories: '.categories',
	category: '.category',
	data: [],
	addCategory: '.addCategory',
	editCategory: '.editCategory',
	removeCategory: '.removeCategory'
};

/**
 * Exports
 */
Wikia.CategorySelect = CategorySelect;
window.Wikia = Wikia;

})( window, jQuery );