<div id='profile-content'>
	<div id='profile-content-left-column' class="uppColumn">

		<div id="profile-activity-feed" class="uppBox">
			<h1 class="color1"><?= wfMsg( 'userprofilepage-recent-activity-title', array( $userName ) ); ?></h1>
				<?= $activityFeedBody; ?>
		</div>

		<div id="profile-top-pages" class="uppBox">
			<h1 class="color1"><?= wfMsg( 'userprofilepage-top-pages-section-title', array( $userName, $wikiName ) ); ?></h1>
				<?= $topPagesBody; ?>
		</div>

		<div id="profile-editable-area" class="uppBox">
			<h1 class="color1">
				<?= wfMsg( 'userprofilepage-users-notes-title', array( $userName ) )?>
				<span class="editsection"><a href="<?=$userPageUrl;?>?action=edit" class="wikia-button"><?= wfMsg( 'userprofilepage-edit-button' ); ?></a></span>
			</h1>
			<?=$pageBody;?>
		</div>

	</div>
	<div id='profile-content-right-column' class="uppColumn">

		<div id="profile-top-wikis-section" class="uppBox">
			<h1 class="color1"><?= wfMsg( 'userprofilepage-top-wikis-title', array( $userName ) ); ?></h1>
				<div id="profile-top-wikis-body">
					<?php foreach( $wikiSwitch['topWikis'] as $wikiId => $wikiData ): ?>
						<div class="uppWikiBox">
							<?php if($isOwner): ?>
								<a href="#" class="HideButton" title="<?=$wikiData['wikiUrl'];?>">[x]</a>
							<?php endif; ?>
							<a href="<?=$wikiData['wikiUrl'];?><?=$userPageUrl;?>" title="<?=$wikiData['wikiName'];?>">
								<img alt="<?=$wikiData['wikiName'];?>" src="<?=$wikiData['wikiLogo'];?>" width="102" height="73" align="middle" />
							</a>
							<div><?= $wikiData['wikiName']; ?> (<?= wfMsg( 'userprofilepage-wiki-edits', array( $wikiData['editCount'] ) ); ?>)</div>
							<!-- wordmark! -->
						</div>
					<?php endforeach; ?>
				</div>
		</div>

		<div id="profile-about-section" class="uppBox">
			<h1 class="color1">
				<?= wfMsg( 'userprofilepage-about-section-title', array( $userName ) ); ?>
				<a href="<?= $aboutSection['articleEditUrl']; ?>" class="wikia-button" id="profile-about-edit-button"><?= wfMsg( 'userprofilepage-edit-button' ); ?></a>
			</h1>
			<?= $aboutSection['body']; ?>
			<br />
			<br />
		</div>

		<div id="profile-achievements-section" class="uppAchievementsBox">
		 <i>Achievements here</i>
		</div>

	</div>
</div>