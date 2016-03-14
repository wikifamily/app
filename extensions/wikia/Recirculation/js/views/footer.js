/*global define*/
define('ext.wikia.recirculation.views.footer', [
	'jquery',
	'wikia.window',
	'wikia.log',
	'wikia.mustache',
	'ext.wikia.recirculation.tracker',
	'ext.wikia.recirculation.utils'
], function ($, w, log, Mustache, tracker, utils) {

	var logGroup = 'ext.wikia.recirculation.views.footer';

	function render(data) {
		return utils.renderTemplate('footer.mustache', data).then(function($html) {
			$('#WikiaArticle').append($html);

			return $html;
		});
	}

	function setupTracking(experimentName) {
		return function($html) {
			tracker.trackVerboseImpression(experimentName, 'footer');

			$html.on('mousedown', 'a', function() {
				var slot = $(this).parent().index() + 1,
					label = 'footer=slot-' + slot;
				tracker.trackVerboseClick(experimentName, label);
			});
		}
	}

	return {
		render: render,
		setupTracking: setupTracking
	}
});
