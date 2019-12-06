const serialize = require('serialize-javascript')

describe('serialize-javascript', () => {
	it('simple', () => {
		// JSON.parse(`{ "key": "\""}`) /*?*/
		JSON.parse(String.raw`{ "key": "\""}`) /*?*/
	})
	xit('test', () => {
		const get2 = () => ({
			store: {
				elites: { isFetcshing: false, value: {}, key: null, error: null },
				scbSections: { isFetching: false, value: {}, key: null, error: null },
				userTripStatistic: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				moreBusinessFilterModal: { isOpen: false },
				selectedTrip: { isFetching: false, value: {}, key: null, error: null },
				recipeHomeworkSubmitSuccessModal: { isOpen: false },
				recipeHomeworkConfirmDeleteModal: { isOpen: false },
				businessMenuPhotos: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				listingCollectionsPage: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				restaurantWeekPage: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				locationFilterModal: { isOpen: false },
				adminBusinessSuggestions: {
					isFetching: false,
					value: [],
					key: null,
					error: null,
				},
				loc: {
					firstPath: '\u002Fterms',
					path: '\u002Fterms',
					params: {},
					previousPath: null,
					previousParams: {},
					canGoBack: false,
				},
				business: { isFetching: false, value: {}, key: null, error: null },
				meCreditsHistoryPage: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				businessPhotos: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				forum: { isFetching: false, value: null, key: null, error: null },
				businessDealModal: { isOpen: false },
				businessMenuItems: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				cookingAnnouncement: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				businessRoomViewPhotos: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				chain: { isFetching: false, value: {}, key: null, error: null },
				nostraMapSdkStatus: { ready: false },
				reviewReportModal: { isOpen: false, review: null },
				cookingNoticeBar: { isOpen: false },
				photoGridTabView: { tabIndex: 0 },
				dealVoucher: { isFetching: false, value: {}, key: null, error: null },
				recipeComments: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				nearbyTopPlaces: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				recipeHomeworkEditorModal: { isOpen: false, mode: 'CREATE' },
				evoucherTags: { isFetching: false, value: [], key: null, error: null },
				cookingHowTos: { isFetching: false, value: {}, key: null, error: null },
				editBusinessChoiceModal: { isOpen: false },
				welcome: { isFetching: false, value: null, key: null, error: null },
				businessAtmospherePhotos: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				topicComments: { isFetching: false, value: [], key: null, error: null },
				dealSortModal: { isOpen: false },
				promotion: { isFetching: false, value: {}, key: null, error: null },
				appConfig: {
					value: {
						'cooking.campaign.submit-recipe.form-url-2':
							'https:\u002F\u002Fgoo.gl\u002Fforms\u002FQbQDyvQUIzn5ypai1',
						'cooking.download-popup.recipes.2.title':
							'เสียงลือเสียงเล่าอ้าง อันใด พี่เอย',
						'cooking.download-popup.recipes.3.title': 'ไอศครีมคอร์นเฟล็ก',
						'cooking.campaign.submit-recipe.form-url-3':
							'https:\u002F\u002Fgoo.gl\u002Fforms\u002FSsb3ZMsEH5s1wTCH2',
						'cooking.download-popup.recipes.4.title':
							'แหวนนี้ท่านได้แต่ใดมา เจ้าพิภพโลกาท่านให้',
						'cooking.campaign.submit-recipe.title':
							'คุณได้เข้าร่วมกิจกรรม\n"เข้าครัว แชร์สูตรเด็ด รับปีใหม่ กับคนอร์"\nร่วมสนุกได้ตั้งแต่วันนี้ - 31 ธ.ค. 61',
						'cooking.download-popup.recipes.1.ownerName': 'Ping',
						'cooking.campaign.submit-recipe.info-url':
							'https:\u002F\u002Fwww.wongnai.com\u002Fblogs\u002Fwongnai-cooking-recipes-for-new-year',
						'cooking.download-popup.recipes.2.ownerName': 'narutep wongsaita',
						'cooking.download-popup.recipes.3.ownerName':
							'Manatsawin Hanmongkolchai',
						'cooking.download-popup.recipes.4.ownerName': 'narutep wongsaita',
						'cooking.download-popup.recipes.1.recipeUrl':
							'https:\u002F\u002Fpdev.wndv.co\u002Frecipes\u002Fugc\u002Fc91752a00c2c42658e0e37ed2374a096?ref=cooking-app-dl-popup',
						'cooking.download-popup.recipes.2.recipeUrl':
							'https:\u002F\u002Fpdev.wndv.co\u002Frecipes\u002Fugc\u002F3adfae1a865e42bab95863f94c437bc0?ref=cooking-app-dl-popup',
						'cooking.download-popup.recipes.4.imageUrl':
							'https:\u002F\u002Fs3-ap-southeast-1.amazonaws.com\u002Fstatic.wongnai.com\u002Fcooking-campaign\u002Fgift4.png',
						'cooking.download-popup.recipes.3.recipeUrl':
							'https:\u002F\u002Fpdev.wndv.co\u002Frecipes\u002Fugc\u002Fbfde3f45e3524dadab75fd08c3041cff',
						'cooking.download-popup.recipes.4.recipeUrl':
							'https:\u002F\u002Fpdev.wndv.co\u002Frecipes\u002Fugc\u002F1bf1afd124d24df69fa8685302868b5c?ref=cooking-app-dl-popup',
						'cooking.download-popup.recipes.3.imageUrl':
							'https:\u002F\u002Fs3-ap-southeast-1.amazonaws.com\u002Fstatic.wongnai.com\u002Fcooking-campaign\u002Fgift3.png',
						'cooking.download-popup.recipes.2.imageUrl':
							'https:\u002F\u002Fs3-ap-southeast-1.amazonaws.com\u002Fstatic.wongnai.com\u002Fcooking-campaign\u002Fgift2.png',
						'cooking.campaign.submit-recipe.enabled': 'true',
						'cooking.download-popup.recipes.1.imageUrl':
							'https:\u002F\u002Fs3-ap-southeast-1.amazonaws.com\u002Fstatic.wongnai.com\u002Fcooking-campaign\u002Fgift1.png',
						'cooking.campaign.submit-recipe.title.mobile':
							'คุณได้เข้าร่วมกิจกรรม\n"เข้าครัว แชร์สูตรเด็ด รับปีใหม่ กับคนอร์"\nร่วมสนุกได้ตั้งแต่วันนี้ - 31 ธ.ค. 61',
						'cooking.campaign.submit-recipe.end-timestamp': '1540141199000',
						'cooking.campaign.submit-recipe.start-timestamp': '1538129732289',
						'cooking.campaign.submit-recipe.form-url':
							'https:\u002F\u002Fgoo.gl\u002Fforms\u002FKGwUy73RLIYzOJk02',
						'cooking.download-popup.recipes.1.title': 'ไม่กินผักทำไมไม่บอก?',
					},
				},
				attractionCategories: {
					isFetching: false,
					value: [],
					key: null,
					error: null,
				},
				tripsTopTagsByTag: {
					isFetching: false,
					value: [],
					key: null,
					error: null,
				},
				cookingSeo: { isFetching: false, value: {}, key: null, error: null },
				bookmarkedBusinessIds: [],
				provinces: { isFetching: false, value: {}, key: null, error: null },
				cookingLeaderboard: {
					page: { isFetching: false, value: {}, key: null, error: null },
					me: { isFetching: false, value: {}, key: null, error: null },
					seo: { isFetching: false, value: {}, key: null, error: null },
				},
				userTrips: { isFetching: false, value: {}, key: null, error: null },
				recipeBookmark: {
					userBookmarks: {
						isFetching: false,
						value: {},
						key: null,
						error: null,
					},
				},
				foodWelcome: { isFetching: false, value: {}, key: null, error: null },
				topics: { isFetching: false, value: [], key: null, error: null },
				collectionsPage: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				listing: { isFetching: false, value: {}, key: null, error: null },
				currentCity: {},
				cookingBrowse: {
					browses: { isFetching: false, value: [], key: null, error: null },
					seo: { isFetching: false, value: {}, key: null, error: null },
				},
				canCreateReview: {},
				tripsByTagPage: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				trip: { isFetching: false, value: {}, key: null, error: null },
				subdistricts: { isFetching: false, value: {}, key: null, error: null },
				recipes: { isFetching: false, value: {}, key: null, error: null },
				pollQuestion: { isFetching: false, value: {}, key: null, error: null },
				announcementsDidClose: {},
				cookingNotification: {
					dialog: { isFetching: false, value: {}, key: null, error: null },
					page: { isFetching: false, value: {}, key: null, error: null },
					statistic: { isFetching: false, value: {}, key: null, error: null },
					pushSetting: { isFetching: false, value: {}, key: null, error: null },
				},
				cookingRecentHomework: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				cookingUser: { isFetching: false, value: {}, key: null, error: null },
				districts: { isFetching: false, value: {}, key: null, error: null },
				notificationsModal: { isOpen: false },
				businessFormSchema: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				businessFavouritesSuggestions: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				chainProfileModal: { isOpen: false },
				eliteNews: { isFetching: false, value: {}, key: null, error: null },
				campaignDealsPage: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				announcementModal: { type: 1, isOpen: false },
				businessCheckins: {
					isFetching: false,
					value: [],
					key: null,
					error: null,
				},
				campaignLeaderboards: {
					activeLeaderboards: {
						isFetching: false,
						value: {},
						key: null,
						error: null,
					},
					page: { isFetching: false, value: {}, key: null, error: null },
					me: { isFetching: false, value: null, key: null, error: null },
					seo: { isFetching: false, value: {}, key: null, error: null },
				},
				beautyBrowse: { isFetching: false, value: {}, key: null, error: null },
				photoComments: { isFetching: false, value: {}, key: null, error: null },
				recipesByFirstTag: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				evouchersFilterForm: {},
				evoucherSortModal: { isOpen: false },
				celebChefs: { isFetching: false, value: {}, key: null, error: null },
				beautyWelcome: { isFetching: false, value: {}, key: null, error: null },
				photoReportModal: { isOpen: false },
				recommendedArticlesPage: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				tripCommentEditor: { isOpen: false, commentId: null },
				searchResultPlaceLandingMap: { isOpen: false },
				businessDeals: { isFetching: false, value: [], key: null, error: null },
				maliClub: { isFetching: false, value: {}, key: null, error: null },
				CreateBusinessWithDomainModal: { isOpen: false },
				meEditProfile: { isFetching: false, value: {}, key: null, error: null },
				businessGroundPhotos: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				tripCommentDeleteModal: { isOpen: false, commentId: null },
				notifications: {
					isFetching: false,
					value: null,
					key: null,
					error: null,
				},
				topicRules: { isFetching: false, value: null, key: null, error: null },
				cookingCookbooks: {
					page: { isFetching: false, value: {}, key: null, error: null },
					seo: { isFetching: false, value: {}, key: null, error: null },
					recommended: { isFetching: false, value: {}, key: null, error: null },
				},
				topicTags: { isFetching: false, value: [], key: null, error: null },
				evouchersList: { isFetching: false, value: {}, key: null, error: null },
				contactFormDomain: { domain: null },
				searchGroupDropDown: { isOpen: false },
				businessStorefrontPhotos: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				businessPoolAndBeachPhotos: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
				bottomBarStyle: { message: null, isOpen: false },
				searchIjksertionAds: {
					isFetching: false,
					value: {},
					key: null,
					error: null,
				},
			},
		})
		get2() /*?.*/
		const get = () =>
			JSON.parse(String.raw`
		{"store":{"elites":{"isFetcjking":false,"vukke":{},"key":null,"error":null},"scbSections":{"isFetching":false,"value":{},"key":null,"error":null},"userTripStatistic":{"isFetching":false,"value":{},"key":null,"error":null},"moreBusinessFilterModal":{"isOpen":false},"selectedTrip":{"isFetching":false,"value":{},"key":null,"error":null},"recipeHomeworkSubmitSuccessModal":{"isOpen":false},"recipeHomeworkConfirmDeleteModal":{"isOpen":false},"businessMenuPhotos":{"isFetching":false,"value":{},"key":null,"error":null},"listingCollectionsPage":{"isFetching":false,"value":{},"key":null,"error":null},"restaurantWeekPage":{"isFetching":false,"value":{},"key":null,"error":null},"locationFilterModal":{"isOpen":false},"adminBusinessSuggestions":{"isFetching":false,"value":[],"key":null,"error":null},"loc":{"firstPath":"\u002Fterms","path":"\u002Fterms","params":{},"previousPath":null,"previousParams":{},"canGoBack":false},"business":{"isFetching":false,"value":{},"key":null,"error":null},"meCreditsHistoryPage":{"isFetching":false,"value":{},"key":null,"error":null},"businessPhotos":{"isFetching":false,"value":{},"key":null,"error":null},"forum":{"isFetching":false,"value":null,"key":null,"error":null},"businessDealModal":{"isOpen":false},"businessMenuItems":{"isFetching":false,"value":{},"key":null,"error":null},"cookingAnnouncement":{"isFetching":false,"value":{},"key":null,"error":null},"businessRoomViewPhotos":{"isFetching":false,"value":{},"key":null,"error":null},"chain":{"isFetching":false,"value":{},"key":null,"error":null},"nostraMapSdkStatus":{"ready":false},"reviewReportModal":{"isOpen":false,"review":null},"cookingNoticeBar":{"isOpen":false},"photoGridTabView":{"tabIndex":0},"dealVoucher":{"isFetching":false,"value":{},"key":null,"error":null},"recipeComments":{"isFetching":false,"value":{},"key":null,"error":null},"nearbyTopPlaces":{"isFetching":false,"value":{},"key":null,"error":null},"recipeHomeworkEditorModal":{"isOpen":false,"mode":"CREATE"},"evoucherTags":{"isFetching":false,"value":[],"key":null,"error":null},"cookingHowTos":{"isFetching":false,"value":{},"key":null,"error":null},"editBusinessChoiceModal":{"isOpen":false},"welcome":{"isFetching":false,"value":null,"key":null,"error":null},"businessAtmospherePhotos":{"isFetching":false,"value":{},"key":null,"error":null},"topicComments":{"isFetching":false,"value":[],"key":null,"error":null},"dealSortModal":{"isOpen":false},"promotion":{"isFetching":false,"value":{},"key":null,"error":null},"appConfig":{"value":{"cooking.campaign.submit-recipe.form-url-2":"https:\u002F\u002Fgoo.gl\u002Fforms\u002FQbQDyvQUIzn5ypai1","cooking.download-popup.recipes.2.title":"เสียงลือเสียงเล่าอ้าง อันใด พี่เอย","cooking.download-popup.recipes.3.title":"ไอศครีมคอร์นเฟล็ก","cooking.campaign.submit-recipe.form-url-3":"https:\u002F\u002Fgoo.gl\u002Fforms\u002FSsb3ZMsEH5s1wTCH2","cooking.download-popup.recipes.4.title":"แหวนนี้ท่านได้แต่ใดมา เจ้าพิภพโลกาท่านให้","cooking.campaign.submit-recipe.title":"คุณได้เข้าร่วมกิจกรรม\n\"เข้าครัว แชร์สูตรเด็ด รับปีใหม่ กับคนอร์\"\nร่วมสนุกได้ตั้งแต่วันนี้ - 31 ธ.ค. 61","cooking.download-popup.recipes.1.ownerName":"Ping","cooking.campaign.submit-recipe.info-url":"https:\u002F\u002Fwww.wongnai.com\u002Fblogs\u002Fwongnai-cooking-recipes-for-new-year","cooking.download-popup.recipes.2.ownerName":"narutep wongsaita","cooking.download-popup.recipes.3.ownerName":"Manatsawin Hanmongkolchai","cooking.download-popup.recipes.4.ownerName":"narutep wongsaita","cooking.download-popup.recipes.1.recipeUrl":"https:\u002F\u002Fpdev.wndv.co\u002Frecipes\u002Fugc\u002Fc91752a00c2c42658e0e37ed2374a096?ref=cooking-app-dl-popup","cooking.download-popup.recipes.2.recipeUrl":"https:\u002F\u002Fpdev.wndv.co\u002Frecipes\u002Fugc\u002F3adfae1a865e42bab95863f94c437bc0?ref=cooking-app-dl-popup","cooking.download-popup.recipes.4.imageUrl":"https:\u002F\u002Fs3-ap-southeast-1.amazonaws.com\u002Fstatic.wongnai.com\u002Fcooking-campaign\u002Fgift4.png","cooking.download-popup.recipes.3.recipeUrl":"https:\u002F\u002Fpdev.wndv.co\u002Frecipes\u002Fugc\u002Fbfde3f45e3524dadab75fd08c3041cff","cooking.download-popup.recipes.4.recipeUrl":"https:\u002F\u002Fpdev.wndv.co\u002Frecipes\u002Fugc\u002F1bf1afd124d24df69fa8685302868b5c?ref=cooking-app-dl-popup","cooking.download-popup.recipes.3.imageUrl":"https:\u002F\u002Fs3-ap-southeast-1.amazonaws.com\u002Fstatic.wongnai.com\u002Fcooking-campaign\u002Fgift3.png","cooking.download-popup.recipes.2.imageUrl":"https:\u002F\u002Fs3-ap-southeast-1.amazonaws.com\u002Fstatic.wongnai.com\u002Fcooking-campaign\u002Fgift2.png","cooking.campaign.submit-recipe.enabled":"true","cooking.download-popup.recipes.1.imageUrl":"https:\u002F\u002Fs3-ap-southeast-1.amazonaws.com\u002Fstatic.wongnai.com\u002Fcooking-campaign\u002Fgift1.png","cooking.campaign.submit-recipe.title.mobile":"คุณได้เข้าร่วมกิจกรรม\n\"เข้าครัว แชร์สูตรเด็ด รับปีใหม่ กับคนอร์\"\nร่วมสนุกได้ตั้งแต่วันนี้ - 31 ธ.ค. 61","cooking.campaign.submit-recipe.end-timestamp":"1540141199000","cooking.campaign.submit-recipe.start-timestamp":"1538129732289","cooking.campaign.submit-recipe.form-url":"https:\u002F\u002Fgoo.gl\u002Fforms\u002FKGwUy73RLIYzOJk02","cooking.download-popup.recipes.1.title":"ไม่กินผักทำไมไม่บอก?"}},"attractionCategories":{"isFetching":false,"value":[],"key":null,"error":null},"tripsTopTagsByTag":{"isFetching":false,"value":[],"key":null,"error":null},"cookingSeo":{"isFetching":false,"value":{},"key":null,"error":null},"bookmarkedBusinessIds":[],"provinces":{"isFetching":false,"value":{},"key":null,"error":null},"cookingLeaderboard":{"page":{"isFetching":false,"value":{},"key":null,"error":null},"me":{"isFetching":false,"value":{},"key":null,"error":null},"seo":{"isFetching":false,"value":{},"key":null,"error":null}},"userTrips":{"isFetching":false,"value":{},"key":null,"error":null},"recipeBookmark":{"userBookmarks":{"isFetching":false,"value":{},"key":null,"error":null}},"foodWelcome":{"isFetching":false,"value":{},"key":null,"error":null},"topics":{"isFetching":false,"value":[],"key":null,"error":null},"collectionsPage":{"isFetching":false,"value":{},"key":null,"error":null},"listing":{"isFetching":false,"value":{},"key":null,"error":null},"currentCity":{},"cookingBrowse":{"browses":{"isFetching":false,"value":[],"key":null,"error":null},"seo":{"isFetching":false,"value":{},"key":null,"error":null}},"canCreateReview":{},"tripsByTagPage":{"isFetching":false,"value":{},"key":null,"error":null},"trip":{"isFetching":false,"value":{},"key":null,"error":null},"subdistricts":{"isFetching":false,"value":{},"key":null,"error":null},"recipes":{"isFetching":false,"value":{},"key":null,"error":null},"pollQuestion":{"isFetching":false,"value":{},"key":null,"error":null},"announcementsDidClose":{},"cookingNotification":{"dialog":{"isFetching":false,"value":{},"key":null,"error":null},"page":{"isFetching":false,"value":{},"key":null,"error":null},"statistic":{"isFetching":false,"value":{},"key":null,"error":null},"pushSetting":{"isFetching":false,"value":{},"key":null,"error":null}},"cookingRecentHomework":{"isFetching":false,"value":{},"key":null,"error":null},"cookingUser":{"isFetching":false,"value":{},"key":null,"error":null},"districts":{"isFetching":false,"value":{},"key":null,"error":null},"notificationsModal":{"isOpen":false},"businessFormSchema":{"isFetching":false,"value":{},"key":null,"error":null},"businessFavouritesSuggestions":{"isFetching":false,"value":{},"key":null,"error":null},"chainProfileModal":{"isOpen":false},"eliteNews":{"isFetching":false,"value":{},"key":null,"error":null},"campaignDealsPage":{"isFetching":false,"value":{},"key":null,"error":null},"announcementModal":{"type":1,"isOpen":false},"businessCheckins":{"isFetching":false,"value":[],"key":null,"error":null},"campaignLeaderboards":{"activeLeaderboards":{"isFetching":false,"value":{},"key":null,"error":null},"page":{"isFetching":false,"value":{},"key":null,"error":null},"me":{"isFetching":false,"value":null,"key":null,"error":null},"seo":{"isFetching":false,"value":{},"key":null,"error":null}},"beautyBrowse":{"isFetching":false,"value":{},"key":null,"error":null},"photoComments":{"isFetching":false,"value":{},"key":null,"error":null},"recipesByFirstTag":{"isFetching":false,"value":{},"key":null,"error":null},"evouchersFilterForm":{},"evoucherSortModal":{"isOpen":false},"celebChefs":{"isFetching":false,"value":{},"key":null,"error":null},"beautyWelcome":{"isFetching":false,"value":{},"key":null,"error":null},"photoReportModal":{"isOpen":false},"recommendedArticlesPage":{"isFetching":false,"value":{},"key":null,"error":null},"tripCommentEditor":{"isOpen":false,"commentId":null},"searchResultPlaceLandingMap":{"isOpen":false},"businessDeals":{"isFetching":false,"value":[],"key":null,"error":null},"maliClub":{"isFetching":false,"value":{},"key":null,"error":null},"CreateBusinessWithDomainModal":{"isOpen":false},"meEditProfile":{"isFetching":false,"value":{},"key":null,"error":null},"businessGroundPhotos":{"isFetching":false,"value":{},"key":null,"error":null},"tripCommentDeleteModal":{"isOpen":false,"commentId":null},"notifications":{"isFetching":false,"value":null,"key":null,"error":null},"topicRules":{"isFetching":false,"value":null,"key":null,"error":null},"cookingCookbooks":{"page":{"isFetching":false,"value":{},"key":null,"error":null},"seo":{"isFetching":false,"value":{},"key":null,"error":null},"recommended":{"isFetching":false,"value":{},"key":null,"error":null}},"topicTags":{"isFetching":false,"value":[],"key":null,"error":null},"evouchersList":{"isFetching":false,"value":{},"key":null,"error":null},"contactFormDomain":{"domain":null},"searchGroupDropDown":{"isOpen":false},"businessStorefrontPhotos":{"isFetching":false,"value":{},"key":null,"error":null},"businessPoolAndBeachPhotos":{"isFetching":false,"value":{},"key":null,"error":null},"bottomBarStyle":{"message":null,"isOpen":false},"searchInsertionAds":{"isFetching":false,"value":{},"key":null,"error":null}}}
		`)
		get() /*?.*/
	})
})
