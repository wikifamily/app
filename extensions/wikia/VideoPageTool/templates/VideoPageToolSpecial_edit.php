<div class="WikiaGrid VPTForms">
	<div class="grid-2">
		<?= $app->renderView('LeftMenu',
			'Index',
			array('menuItems' => $leftMenuItems)
		) ?>
	</div>
	<div class="grid-4">
		forms go here
	</div>
	<div class="publish">
		<button class="big"><?= wfMessage( 'videopagetool-publish-button' )->text() ?></button>
	</div>
</div>