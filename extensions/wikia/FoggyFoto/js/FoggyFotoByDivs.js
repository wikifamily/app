/** IMPLEMENTATION USING HTML/CSS (DIVS FOR TILES) **/

if (typeof FoggyFoto === 'undefined') {
	FoggyFoto = {};
}

if (typeof FoggyFoto.FlipBoard === 'undefined') {
	/**
	 * FlipBoard is a class which is used in FoggyFoto to hold a "front" image and a "back" (obscured) image
	 * which is conceptually broken up into a number of tiles.  Each tile can individually be transitioned/revealed
	 * to show the back-image.
	 *
	 * NOTE ON IMAGE-SCALING: The algorithm for image-scaling is to scale the image up or down maintaining the aspect
	 * ratio (ie: no distortion) until it is as close as possible to a fit, then centering along the other dimension
	 * which will result in some cropping.  More specifically:
	 * - If the image aspect ratio is greater than the screen aspect ratio, scale the height of the image to fit,
	 *   then center the image vertically (crops off the top/bottom as needed).
	 * - If the image aspect ratio is less than or equal to the screen aspect ratio, scale the width of the image to
	 *   fit, then center the image horizontally (cropping some off both sides as needed).
	 */
	FoggyFoto.FlipBoard = function(){
		var self = this;
		this.debug = true; // whether to log a whole bunch of info to console.log
		this._REVEALED_CLASS_NAME = 'transparent'; // the class that will be on tiles which are revealed.

		// URLs of the images
		this.frontImageSrc = ''; // this shows up immediately
		this.backImageSrc = ''; // this is the one that's obscured
		this.frontImage = null;
		this.backImage = null;

		// Dimensions of the entire FlipBoard (images will be scaled & cropped to fit this exactly without any distortion to the aspect ratio).
		this.width = boardWidth;//480;
		this.height = boardHeight;//320;

		// Dimensions for the number of tiles
		this.numRows = 4;
		this.numCols = 6;

		// Dimensions (in pixels) of the tiles.
		// NOTE: Calculated based on numRows and numCols in init().
		this._tileWidth = 0;
		this._tileHeight = 0;

		// Actual game-state and related constants.
		this._isBackShowing = [[]]; // matrix of binary values for whether the back tile is showing at a given coordinate
		this._totalPoints = 0;
		this._pointsThisRound = 0;
		this._currPhoto = 0; // will go up to "1" (makes more sense to non-geeks) when the first image is loaded.

		// Constants for game-configuration
		this._MAX_POINTS_PER_ROUND = 1000;
		this._PHOTOS_PER_GAME = 10;
		this._PERCENT_DEDUCTION_REVEAL = 10; // reduces the remaining pointsThisRound by this percentage when a tile is revealed
		this._PERCENT_DEDUCTION_WRONG_GUESS = 50;

		/**
		 * After setting the dimensions of the flip board, this should be called once to set up the _isBackShowing matrix
		 * to the right size.
		 *
		 * Calculates the _tileWidth and _tileHeight values, sets up clickhandling, loads the front and back images.
		 *
		 * Takes in a callback function which will be called after both of the images are loaded.
		 */
		this.init = function(callback){
			// Calculate the size of the tiles in pixels.
			self._tileWidth = (self.width / self.numCols);
			self._tileHeight = (self.height / self.numRows);

			// Initialize the matrix of what is revealed.
			for(var row=0; row < self.numRows; row++){
				for(var col=0; col < self.numCols; col++){
					if(!self._isBackShowing[row]){
						self._isBackShowing[row] = [];
					}

					self._isBackShowing[row][col] = 0; // back is completely obscured by default
				}
			}

			// TODO: Indicate on-screen that we're loading a game.
			// TODO: Indicate on-screen that we're loading a game.

			// Pull a selection of pages in the category (using the API).
			var categoryTitle = 'Category:Characters';
			var apiParams = {
				'action': 'query',
				'list': 'categorymembers',
				'cmlimit': 1000,
				'cmnamespace': 0, // only main namespace.  sub-categories would create confusing results
				'cmtitle': categoryTitle
			};
			Mediawiki.apiCall(apiParams, function(data){
				if(data.error){
					self.mwError(data.error);
				} else {
					if(self.debug){
						self.log("Got category members: ");
						//for(var cnt=0; cnt < data.query.categorymembers.length; cnt++){
						//	self.log("Title: " + data.query.categorymembers[cnt].title);
						//}
					}

					if(data.query.categorymembers){
						// Randomly get a page from the category (and its associated image) until we find a page which has an image.
						var imageUrl = "";
						self.getImageFromPages(data.query.categorymembers, function(imageUrl){
							// Set the image as the back-image (hidden image) for the game.
							if(imageUrl != ""){
								// Load the back image fully before attaching clickhandlers
								self.backImageSrc = imageUrl;
								self.backImage = new Image();
								self.backImage.src = self.backImageSrc;
								self.backImage.onload = function(){
									// A new round has started, initialize the round.
									self._pointsThisRound = self._MAX_POINTS_PER_ROUND;
									self._currPhoto++;
				// TODO: UPDATE PROGRESS PORTION OF HUD.
				// TODO: UPDATE PROGRESS PORTION OF HUD.

									// Calculate the scaling factor and use that to set the background to the correct size.
									var scalingFactor = self._getScalingFactor(self.backImage);
									var backOffsetX = Math.floor( Math.abs(self.backImage.width - (self.width / scalingFactor)) / 2 );
									var backOffsetY = Math.floor( Math.abs(self.backImage.height - (self.height / scalingFactor)) / 2 );
									var scaledBackOffsetX = Math.floor( backOffsetX * scalingFactor );
									var scaledBackOffsetY = Math.floor( backOffsetY * scalingFactor );
									self.log("backImage Scaling Factor: " + scalingFactor);
									self.log("backImage W: " + self.backImage.width);
									self.log("backImage H: " + self.backImage.height);
									self.log("backOffsetX: " + backOffsetX);
									self.log("backOffsetY: " + backOffsetY);
									self.log("scaledBackOffsetX: " + backOffsetX);
									self.log("scaledBackOffsetY: " + backOffsetY);

									// Set the new image as the back (hidden) image.
									$('#bgPic').css('background-image', 'url('+imageUrl+')');
									$('#bgPic').css('width', self.backImage.width+'px');
									$('#bgPic').css('height', self.backImage.height+'px');

									// Scale and center the image as needed.
									$('#bgPic').css('-webkit-transform-origin', 'top left');
									$('#bgPic').css('-webkit-transform', 'scale('+scalingFactor+', '+scalingFactor+')');
									$('#bgPic').css('left', '-'+scaledBackOffsetX+'px');
									$('#bgPic').css('top', '-'+scaledBackOffsetY+'px');

									// Attach event-handling.
									var eventName = 'mousedown';
									if ("ontouchstart" in document.documentElement){
										eventName = 'touchstart'; // event has a different name on touchscreen devices
									}
									$('#gameBoard .tile').bind(eventName, self.tileClicked);

									// TODO: REMOVE THE GAME-LOADING OVERLAY/STATE
									// TODO: REMOVE THE GAME-LOADING OVERLAY/STATE

									// We're done loading things, call the callback.
									if(typeof callback == "function"){
										callback();
									}
								};
							} else {

								// TODO: Surface the error to the user that something is wrong and we couldn't make a game out of this category.
								// TODO: Surface the error to the user that something is wrong and we couldn't make a game out of this category.

							}
						});
					}
				}
			}, self.mwError);

		};
		
		/**
		 * Click-handler for each tile. Is fired on mousedown on desktop and touchstart where supported.
		 * This will reveal the tile and deduct the appropriate cost from the score-bar on the left.
		 */
		this.tileClicked = function(){
			// If the tile is already revealed, don't charge the user points or play a sound, etc.
			if(! ($(this).hasClass( self._REVEALED_CLASS_NAME ))){
				// Update the score-bar, taking into account the cost of this tile.
				self._pointsThisRound = (self._pointsThisRound - ((self._PERCENT_DEDUCTION_REVEAL/100) * self._pointsThisRound) );
				self.updateScoreBar();

				$(this).addClass( self._REVEALED_CLASS_NAME ); // uses CSS3 transitions

// TODO: FIXME: REFACTORINGS:
// TODO: We probably want to remove the _isBackShowing array and use the DOM and _REVEALED_CLASS_NAME as the storage of the state (better as a Single Point of Truth).
// TODO: We probably want to remove the _isBackShowing array and use the DOM and _REVEALED_CLASS_NAME as the storage of the state (better as a Single Point of Truth).

// TODO: Re-write show(), hide(), and flip() to use dom-state instead.  show() should basically be the code that's in the guts of this function (including score-penalizing, audio, etc.).
// TODO: Re-write show(), hide(), and flip() to use dom-state instead.  show() should basically be the code that's in the guts of this function (including score-penalizing, audio, etc.).
			}
		};

		/**
		 * When the user guessed a wrong answer, this function is called to deduct points, mark
		 */
		this.gotWrongAnswer = function(){
		};

		/**
		 * Given an array of pages, gets a representative image url of one of the pages (chosen randomly)
		 * and then passes it into the successCallback.
		 */
		this.getImageFromPages = function(pageTitles, successCallback){
			var imageUrl;
			if(pageTitles.length > 0){
				var index = Math.floor(Math.random() * pageTitles.length);
				var pageTitle = pageTitles[index].title;
				self.log("Page: " + pageTitle);

				var imageApiParams = {
					'action': 'imageserving',
					'wisTitle': pageTitle
				};
				Mediawiki.apiCall(imageApiParams, function(data){
					if(data.error){
						self.mwError(data.error);
					} else if(typeof data.image.imageserving != "undefined"){
						self.log("Image: " + data.image.imageserving);
						imageUrl = data.image.imageserving;
						
						// If we got a match, pass the imageUrl into the success callback.
						if((typeof successCallback == "function") && (typeof imageUrl != "undefined")){
							successCallback( imageUrl );
						} else {
							self.log("Callback was not a function: ");
							self.log(successCallback);
						}
					}

					// Didn't get a match, call the function again.
					if(typeof imageUrl == "undefined"){
						pageTitles.splice(index, 1); // remove the item just looked at
						self.getImageFromPages(pageTitles, successCallback);
					}
				}, self.mwError);
				
			}

			return imageUrl;
		}; // end getImageFromPages()
		
		/**
		 * Given an image, returns the appropriate scaling factor using our algorithm for scaling described at the top
		 * of this class. Both the width and the height of the image should be scaled by the same factor to avoid
		 * distortion (maintain the same aspect ratio).
		 */
		this._getScalingFactor = function(imgObject){
			var scalingFactor = 1;

			var imgW = imgObject.width;
			var imgH = imgObject.height;
			var imgAspectRatio = (imgW / imgH);
			var boardAspectRatio = (self.width / self.height);
			//self.log("\tIMAGE WIDTH:  " + imgW);
			//self.log("\tIMAGE HEIGHT: " + imgW);
			//self.log("\tASPECT RATIO: " + imgAspectRatio);
			//self.log("\tSCREEN WIDTH:  " + self.width);
			//self.log("\tSCREEN HEIGHT: " + self.height);
			//self.log("\tASPECT RATIO: " + boardAspectRatio);

			if(imgAspectRatio > boardAspectRatio){
				// Scale the height to fit the screen exactly (width may overflow a bit so that the left & right get cropped off a bit).
				scalingFactor = (self.height / imgH);
			} else {
				// Scale the width to fit the screen exactly (height may overflow a bit so top & bottom would get cropped off a bit).
				scalingFactor = (self.width / imgW);
			}

			//self.log("\t= SCALING FACTOR: " + scalingFactor);
			return scalingFactor;
		};

		/**
		 * Toggles the display of the tile at the given row and column.
		 */
		this.flip = function(row, col){
			if(typeof self._isBackShowing[row] != "undefined"){
				if(typeof self._isBackShowing[row][col] != "undefined"){
					self._isBackShowing[row][col] = (self._isBackShowing[row][col] === 0 ? 1 : 0);
				}
			}
		};		
		
		/**
		 * Assure that the tile at the given row and column is showing the back image.
		 */
		this.show = function(row, col){
			if(typeof self._isBackShowing[row] != "undefined"){
				if(typeof self._isBackShowing[row][col] != "undefined"){
					self._isBackShowing[row][col] = 1;
				}
			}
		};

		/**
		 * Assure that the tile at the given row and column is hiding the back image (ie: make the front show there).
		 */
		this.hide = function(row, col){
			if(typeof self._isBackShowing[row] != "undefined"){
				if(typeof self._isBackShowing[row][col] != "undefined"){
					self._isBackShowing[row][col] = 0;
				}
			}
		};
		
		/**
		 * Updates the display of the score-bar to match the _pointsThisRound.
		 */
		this.updateScoreBar = function(){
			var percent = ((self._pointsThisRound * 100)/ self._MAX_POINTS_PER_ROUND);
			var barHeight = Math.floor(percent * self.height / 100);
			
			// Will fade the colors from green to yellow to red as we go from full points, approaching no points.
			var fgb=0;
			if(percent > 50){
				fgg = 255;
				fgr = Math.floor( 255-((255*((percent-50)*2))/100) ); // in english: the top half of the bar should go from 0 red to 255 red between 100% and 50%.
			} else {
				fgg = Math.floor( ((255*(percent*2))/100) ); // in english: the bottom half of the bar should go from 255 green to 0 green between 50% and 0%.
				fgr = 255;
			}
			//self.log("SCORE-FOR-ROUND PERCENT: " + Math.floor(percent) + "% ... COLOR: rgb(" + fgr + ", " + fgg + ", " + fgb + ")");

			// Update the size & color of the bar.
			$('#scoreBar').height(barHeight).css('background-color', 'rgb('+fgr+', '+fgg+', '+fgb+')');
		};

		/**
		 * Updates the total score earned so far for the game (this is self._totalPoints which does not include self._pointsThisRound until the round is finished).
		 */
		this.updateHud_score = function(){
			$($('#hud div.score span').get(0)).html( self._totalPoints );
		};

		/**
		 * Updates the "PHOTOS: X / Y" part of the hud where X is self._currPhoto and Y is self._PHOTOS_PER_GAME.
		 */
		this.updateHud_progress = function(){
			var progressMsg = $.msg('foggyfoto-progress-numbers', self._currPhoto, self._PHOTOS_PER_GAME);
			$($('#hud div.progress span').get(0)).html( progressMsg );
		};

		/**
		 * Dumps a human-readable output to the console indicating which tiles are showing.
		 */
		this.logState = function(){
			for(var row=0; row < self.numRows; row++){
				var rowStr = "";
				for(var col=0; col < self.numCols; col++){
					rowStr += "" + self._isBackShowing[row][col] + " ";
				}
				self.log(rowStr + "\n");
			}
		};

		/**
		 * Simple wrapper for console.log to allow us to turn on/off debugging for this
		 * whole class at once.
		 */
		this.log = function(msg){
			if(self.debug){
				console.log(msg);
			}
		};
		
		this.mwError = function(e){
			self.log("MediaWiki API error: ");
			self.log(e); // note: .code and .info are provided.
		};
	};
	
	/**
	 * Currently just a wrapper for the row and column coordinates of a tile.  The coordinates are
	 * relative to the tiles not to pixels.  For example, if we had a FlipBoard with 6 columns and
	 * 4 rows of Tiles and the tiles were 80 pixels squared, this class would be used to hold a value
	 * between (0,0) and (5,3).
	 *
	 * This is primarily used as  a convenience-type for passing coordinates around & isn't intended to
	 * balloon into holding a bunch of functionality (since Tiles themselves are more of a locational
	 * concept at the moment and not strictly-speaking objects - the front and back of the tile do not
	 * belong to the tile, but rather are calculated at display-time given the location of the tile and
	 * whether the front image or back image is supposed to be displayed).
	 */
	FoggyFoto.FlipBoard.Tile = function(){
		this.row = -1;
		this.col = -1;
	};
}


// Once the page is loaded, start the game.
$(document).ready(function(){
	console.log("Starting FoggyFoto game...");
	var flipBoard = new FoggyFoto.FlipBoard();
	flipBoard.init(function(){
		flipBoard.logState();
		flipBoard.updateHud_score();
		flipBoard.updateHud_progress();
	});
});
