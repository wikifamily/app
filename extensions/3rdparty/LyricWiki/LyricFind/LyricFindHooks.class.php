<?php

class LyricFindHooks extends WikiaObject {

	/**
	 * Checks whether given page is trackable
	 *
	 * @param Title $title page to check
	 * @return bool is trackable?
	 */
	static public function pageIsTrackable(Title $title) {
		$namespaces = F::app()->wg->LyricFindTrackingNamespaces;
		$isView = F::app()->wg->Request->getVal('action', 'view') === 'view';
		return $isView && in_array($title->getNamespace(), $namespaces) && $title->exists();
	}

	/**
	 * Checks whether given page can be indexed by web crawlers
	 *
	 * @param Title $title page to check
	 * @return bool is trackable?
	 */
	static public function pageIsIndexable(Title $title) {
		wfProfileIn(__METHOD__);
		$res = true;

		if ($title->getNamespace() === NS_LYRICFIND) {
			$mainNStitle = Title::newFromText($title->getText(), NS_MAIN);

			// the same lyric exists in main namespace, prevent indexing of LyricFind version
			if ($mainNStitle->exists()) {
				$res = false;
			}
		}

		wfProfileOut(__METHOD__);
		return $res;
	}

	/**
	 * Loads page views tracking code
	 *
	 * @param array $jsAssetGroups AssetsManager groups to load
	 * @return bool true
	 */
	public function onOasisSkinAssetGroups(Array &$jsAssetGroups) {
		if (self::pageIsTrackable($this->wg->Title)) {
			$jsAssetGroups[] = 'LyricsFindTracking';
		}

		return true;
	}

	/**
	 * Blocks view page source page
	 *
	 * @param EditPage $editPage edit page instance
	 * @return bool show edit page form?
	 */
	public function onAlternateEdit(EditPage $editPage) {
		$title = $editPage->getTitle();
		$isLyricFind = $title->getNamespace() === NS_LYRICFIND;
		$isNotAllowedToEdit = $title->isNamespaceProtected($this->wg->user);

		$blockEdit = ($isLyricFind && $isNotAllowedToEdit);
		if ($blockEdit) {
			F::app()->wg->Out->addHTML(Wikia::errorbox(wfMessage('lyricfind-edit-blocked')));
		}

		return !$blockEdit;
	}

	/**
	 * Register <lyricfind> parser hook
	 *
	 * @param Parser $parser parser instance
	 * @return bool true
	 */
	public function onParserFirstCallInit(Parser $parser) {
		$parser->setHook(LyricFindParserController::NAME, 'LyricFindParserController::render');
		return true;
	}

	/**
	 * Replace markers generated by <lyricfind> renderer with a proper HTML
	 *
	 * @param Parser $parser parser
	 * @param string $text parser content
	 * @return bool true
	 */
	public function onParserAfterTidy(Parser $parser, &$text) {
		$text = strtr($text, LyricFindParserController::$markers);
		return true;
	}

	/**
	 * Prevent indexing of articles in NS_LYRICFIND if the same lyric exists in main namespace
	 *
	 * @param OutputPage $out
	 * @param Skin $skin
	 * @return bool true
	 */
	public function onBeforePageDisplay(OutputPage $out, Skin $skin ) {
		if (!self::pageIsIndexable($out->getTitle())) {
			$out->setRobotPolicy('noindex,follow');
		}

		return true;
	}
}
