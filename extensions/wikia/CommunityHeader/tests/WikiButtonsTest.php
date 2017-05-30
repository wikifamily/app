<?php

use \Wikia\CommunityHeader\Label;
use \Wikia\CommunityHeader\WikiButton;
use \Wikia\CommunityHeader\WikiButtons;

class WikiButtonsTest extends \WikiaBaseTest {
	protected function setUp() {
		global $IP;
		$this->setupFile = "$IP/extensions/wikia/CommunityHeader/CommunityHeader.setup.php";
		parent::setUp();
	}

	/**
	 * @dataProvider wikiButtonsProvider
	 *
	 * @param $isLoggedId
	 * @param $hasAdminDashboardRight
	 * @param $expected
	 */
	public function testWikiButtons( $isLoggedId, $hasAdminDashboardRight, $expected ) {
		$requestContextMock =
			$this->getMockBuilder( 'RequestContext' )->setMethods( [ 'getUser' ] )->getMock();

		$requestContextMock->expects( $this->any() )
			->method( 'getUser' )
			->willReturn( $this->getUserMock( $isLoggedId, $hasAdminDashboardRight ) );

		$this->mockStaticMethod( 'RequestContext', 'getMain', $requestContextMock );

		$wikiButtons = new WikiButtons();

		$this->assertEquals( $expected, $wikiButtons->getButtons() );
	}

	private function getUserMock( $isLoggedIn, $hasAdminDashboardRight = false ) {
		$userMock =
			$this->getMockBuilder( 'User' )
				->setMethods( [ 'isLoggedIn', 'isAllowed' ] )
				->disableOriginalConstructor()
				->getMock();

		$userMock->expects( $this->any() )->method( 'isLoggedIn' )->willReturn( $isLoggedIn );

		$userMock->expects( $this->any() )
			->method( 'isAllowed' )
			->with( 'admindashboard' )
			->willReturn( $hasAdminDashboardRight );

		return $userMock;
	}


	private function prepareWikiButtons( $raw ) {
		return array_map( function ( $rawItem ) {
			return new WikiButton(
				$rawItem['href'],
				( $rawItem['label'] ?
					new Label( $rawItem['label']['key'], $rawItem['label']['type'] ) :
					null
				),
				new Label( $rawItem['title']['key'], $rawItem['title']['type'] ),
				$rawItem['icon'],
				$rawItem['tracking']
			);
		}, $raw );
	}

	public function wikiButtonsProvider() {
		return [
			[
				'isLoggedUser' => false,
				'hasAdminDashboardRight' => false,
				'expected' => $this->prepareWikiButtons( [
					[
						'href' => '/wiki/Special:CreatePage',
						'label' => [
							'type' => 'translatable-text',
							'key' => 'community-header-add-new-page',
						],
						'title' => [
							'type' => 'translatable-text',
							'key' => 'community-header-add-new-page',
						],
						'icon' => 'wds-icons-add-new-page-small',
						'tracking' => 'add-new-page',
					],
				] ),
			],
			[
				'isLoggedUser' => true,
				'hasAdminDashboardRight' => false,
				'expected' => $this->prepareWikiButtons( [
					[
						'href' => '/wiki/Special:CreatePage',
						'label' => [
							'type' => 'translatable-text',
							'key' => 'community-header-add',
						],
						'title' => [
							'type' => 'translatable-text',
							'key' => 'community-header-add-new-page',
						],
						'icon' => 'wds-icons-add-new-page-small',
						'tracking' => 'add-new-page',
					],
					[
						'href' => '/wiki/Special:WikiActivity',
						'label' => null,
						'title' => [
							'type' => 'translatable-text',
							'key' => 'community-header-wiki-activity',
						],
						'icon' => 'wds-icons-activity-small',
						'tracking' => 'wiki-activity',
					],
				] ),
			],
			[
				'isLoggedUser' => true,
				'hasAdminDashboardRight' => true,
				'expected' => $this->prepareWikiButtons( [
					[
						'href' => '/wiki/Special:CreatePage',
						'label' => null,
						'title' => [
							'type' => 'translatable-text',
							'key' => 'community-header-add-new-page',
						],
						'icon' => 'wds-icons-add-new-page-small',
						'tracking' => 'add-new-page',
					],
					[
						'href' => '/wiki/Special:WikiActivity',
						'label' => null,
						'title' => [
							'type' => 'translatable-text',
							'key' => 'community-header-wiki-activity',
						],
						'icon' => 'wds-icons-activity-small',
						'tracking' => 'wiki-activity',
					],
					[
						'href' => '/wiki/Special:AdminDashboard',
						'label' => null,
						'title' => [
							'type' => 'translatable-text',
							'key' => 'community-header-admin-dashboard',
						],
						'icon' => 'wds-icons-dashboard-small',
						'tracking' => 'admin-dashboard',
					],
				] ),
			],
		];
	}
}
