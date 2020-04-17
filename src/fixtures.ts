export const store = {
	elites: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	scbSections: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	userTripStatistic: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	moreBusinessFilterModal: {
		isOpen: false,
	},
	traceId: null,
	selectedTrip: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	recipeHomeworkSubmitSuccessModal: {
		isOpen: false,
	},
	recipeHomeworkConfirmDeleteModal: {
		isOpen: false,
	},
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
	locationFilterModal: {
		isOpen: false,
	},
	adminBusinessSuggestions: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	loc: {
		firstPath: '/',
		path: '/',
		params: {},
		previousPath: null,
		previousParams: {},
		canGoBack: false,
	},
	business: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
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
	forum: {
		isFetching: false,
		value: null,
		key: null,
		error: null,
	},
	businessDealModal: {
		isOpen: false,
	},
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
	chain: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	nostraMapSdkStatus: {
		ready: false,
	},
	reviewReportModal: {
		isOpen: false,
		review: null,
	},
	cookingNoticeBar: {
		isOpen: false,
	},
	photoGridTabView: {
		tabIndex: 0,
	},
	dealVoucher: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
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
	recipeHomeworkEditorModal: {
		isOpen: false,
		mode: 'CREATE',
	},
	evoucherTags: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	cookingHowTos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	editBusinessChoiceModal: {
		isOpen: false,
	},
	welcome: {
		isFetching: false,
		value: {
			city: {
				id: 1,
				name: 'กรุงเทพมหานคร',
				welcomeUrl: 'bangkok',
				coverPicture: {
					thumbnailUrl:
						'https://img.wongnai.com/p/100x100/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
					width: 416,
					height: 552,
					smallUrl:
						'https://img.wongnai.com/p/400x0/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
					photoId: 'a35611d6d86145d19f8e2925a2b709c3',
					url: 'photos/a35611d6d86145d19f8e2925a2b709c3',
					largeUrl:
						'https://img.wongnai.com/p/1920x0/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
					contentUrl:
						'https://img.wongnai.com/p/_-x_/2018/10/03/a35611d6d86145d19f8e2925a2b709c3.jpg',
					description: 'กรุงเทพมหานคร',
					photoUrl: 'photos/a35611d6d86145d19f8e2925a2b709c3',
				},
				viewGroup: {
					id: 9681,
					name: 'กรุงเทพและปริมณฑล',
					welcomeUrl:
						'9681-%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87%E0%B9%80%E0%B8%97%E0%B8%9E%E0%B9%81%E0%B8%A5%E0%B8%B0%E0%B8%9B%E0%B8%A3%E0%B8%B4%E0%B8%A1%E0%B8%93%E0%B8%91%E0%B8%A5',
				},
			},
			services: [
				{
					citySelectionRequired: false,
					poi: true,
					code: 'food',
					url: 'restaurants?categoryGroupId=9',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-13.png',
					title: 'ร้านอาหาร',
					id: 13,
					iconUrl2:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-13.png',
					locationBased: true,
				},
				{
					citySelectionRequired: false,
					poi: true,
					code: 'coffeeanddessert',
					url: 'restaurants?categoryGroupId=10',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-12.png',
					title: 'กาแฟ / ของหวาน',
					id: 12,
					iconUrl2:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-12.png',
					locationBased: true,
				},
				{
					citySelectionRequired: false,
					poi: false,
					code: 'delivery',
					url: 'delivery',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-4.png',
					title: 'สั่งเดลิเวอรี',
					id: 4,
					iconUrl2:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-4.png',
					locationBased: true,
				},
				{
					citySelectionRequired: true,
					poi: true,
					code: 'attractions',
					url: 'attractions',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-11.png',
					title: 'ที่เที่ยว',
					id: 11,
					iconUrl2:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-11.png',
					locationBased: true,
				},
				{
					citySelectionRequired: true,
					poi: true,
					code: 'hotels',
					url: 'hotels',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-10.png',
					title: 'ที่พัก',
					id: 10,
					iconUrl2:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-10.png',
					locationBased: true,
				},
				{
					citySelectionRequired: false,
					poi: true,
					code: 'beauty',
					url: 'beauty',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-3.png',
					title: 'บิวตี้',
					id: 3,
					iconUrl2:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-3.png',
					locationBased: true,
				},
				{
					citySelectionRequired: false,
					poi: true,
					code: 'beautyathome',
					url: 'beautyathome/massage',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-14.png',
					title: 'นวดที่บ้าน',
					id: 14,
					iconUrl2:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-14.png',
					locationBased: true,
				},
				{
					citySelectionRequired: false,
					poi: false,
					code: 'cooking',
					url: 'cooking',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-6.png',
					title: 'ทำอาหาร',
					id: 6,
					iconUrl2:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-6.png',
					locationBased: false,
				},
				{
					citySelectionRequired: false,
					poi: true,
					code: 'deals',
					url: 'evouchers?viewGroup=9681',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-5.png',
					title: 'ดีล',
					id: 5,
					iconUrl2:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-5.png',
					locationBased: false,
				},
				{
					citySelectionRequired: false,
					poi: true,
					code: 'userchoices',
					url: 'users-choice',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-7-2019.png',
					title: 'Users’ Choice',
					id: 7,
					iconUrl2:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/services/round-7-2019.png',
					locationBased: true,
				},
			],
			browse: [
				{
					title: 'เลือกตามประเภทอาหาร',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/browse/category.png',
					entities: [
						{
							name: 'ก๋วยเตี๋ยว',
							url: 'restaurants?categories=30&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/30.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 30,
									description: 'ก๋วยเตี๋ยว',
								},
							],
						},
						{
							name: 'ชาบู/สุกี้ยากี้/หม้อไฟ',
							url: 'restaurants?categories=20&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/20.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 20,
									description: 'ชาบู/สุกี้ยากี้/หม้อไฟ',
								},
							],
						},
						{
							name: 'ร้านกาแฟ/ชา',
							url: 'restaurants?categories=14&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/14.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 14,
									description: 'ร้านกาแฟ/ชา',
								},
							],
						},
						{
							name: 'หมูกระทะ',
							url: 'restaurants?categories=51&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/51.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 51,
									description: 'หมูกระทะ',
								},
							],
						},
						{
							name: 'สเต๊ก',
							url: 'restaurants?categories=35&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/35.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 35,
									description: 'สเต๊ก',
								},
							],
						},
						{
							name: 'ติ่มซำ',
							url: 'restaurants?categories=60&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/60.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 60,
									description: 'ติ่มซำ',
								},
							],
						},
						{
							name: 'อาหารทะเล',
							url: 'restaurants?categories=29&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/29.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 29,
									description: 'อาหารทะเล',
								},
							],
						},
						{
							name: 'เบเกอรี/เค้ก',
							url: 'restaurants?categories=24&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/24.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 24,
									description: 'เบเกอรี/เค้ก',
								},
							],
						},
						{
							name: 'อาหารญี่ปุ่น',
							url: 'restaurants?categories=2&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/2.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 2,
									description: 'อาหารญี่ปุ่น',
								},
							],
						},
						{
							name: 'อาหารอีสาน/ร้านส้มตำ',
							url: 'restaurants?categories=34&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/34.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 34,
									description: 'อาหารอีสาน/ร้านส้มตำ',
								},
							],
						},
						{
							name: 'ซูชิ',
							url: 'restaurants?categories=45&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/45.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 45,
									description: 'ซูชิ',
								},
							],
						},
						{
							name: 'อาหารเช้า',
							url: 'restaurants?categories=19&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/19.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 19,
									description: 'อาหารเช้า',
								},
							],
						},
						{
							name: 'บุฟเฟ่ต์',
							url: 'restaurants?categories=11&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/11.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 11,
									description: 'บุฟเฟ่ต์',
								},
							],
						},
						{
							name: 'ปิ้งย่าง',
							url: 'restaurants?categories=43&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/43.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 43,
									description: 'ปิ้งย่าง',
								},
							],
						},
						{
							name: 'พิซซ่า',
							url: 'restaurants?categories=42&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/42.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 42,
									description: 'พิซซ่า',
								},
							],
						},
						{
							name: 'ของหวาน',
							url: 'restaurants?categories=23&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/23.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 23,
									description: 'ของหวาน',
								},
							],
						},
						{
							name: 'กึ่งผับ/ร้านเหล้า/บาร์',
							url: 'restaurants?categories=15&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/15.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 15,
									description: 'กึ่งผับ/ร้านเหล้า/บาร์',
								},
							],
						},
						{
							name: 'ราเมง',
							url: 'restaurants?categories=50&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/50.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 50,
									description: 'ราเมง',
								},
							],
						},
						{
							name: 'อาหารเกาหลี',
							url: 'restaurants?categories=6&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/6.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 6,
									description: 'อาหารเกาหลี',
								},
							],
						},
						{
							name: 'อาหารเวียดนาม',
							url: 'restaurants?categories=7&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/7.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 7,
									description: 'อาหารเวียดนาม',
								},
							],
						},
						{
							name: 'อาหารเหนือ',
							url: 'restaurants?categories=44&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/44.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 44,
									description: 'อาหารเหนือ',
								},
							],
						},
						{
							name: 'อาหารไทย',
							url: 'restaurants?categories=3&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/3.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 3,
									description: 'อาหารไทย',
								},
							],
						},
						{
							name: 'อาหารจีน',
							url: 'restaurants?categories=4&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/4.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 4,
									description: 'อาหารจีน',
								},
							],
						},
						{
							name: 'ผับ/เที่ยวกลางคืน',
							url: 'restaurants?categories=16&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/16.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 16,
									description: 'ผับ/เที่ยวกลางคืน',
								},
							],
						},
						{
							name: 'คาราโอเกะ',
							url: 'restaurants?categories=18&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/18.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 18,
									description: 'คาราโอเกะ',
								},
							],
						},
						{
							name: 'อาหารใต้',
							url: 'restaurants?categories=49&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/49.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 49,
									description: 'อาหารใต้',
								},
							],
						},
						{
							name: 'อาหารตามสั่ง',
							url: 'restaurants?categories=36&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/36.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 36,
									description: 'อาหารตามสั่ง',
								},
							],
						},
						{
							name: 'อาหารจานเดียว',
							url: 'restaurants?categories=64&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/64.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 64,
									description: 'อาหารจานเดียว',
								},
							],
						},
						{
							name: 'ร้านริมน้ำ',
							url: 'restaurants?categories=32&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/32.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 32,
									description: 'ร้านริมน้ำ',
								},
							],
						},
						{
							name: 'ไอศกรีม',
							url: 'restaurants?categories=25&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/25.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 25,
									description: 'ไอศกรีม',
								},
							],
						},
						{
							name: 'อาหารมุสลิม/อิสลาม',
							url: 'restaurants?categories=40&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/40.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 40,
									description: 'อาหารมุสลิม/อิสลาม',
								},
							],
						},
						{
							name: 'อาหารอินเดีย',
							url: 'restaurants?categories=10&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/10.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 10,
									description: 'อาหารอินเดีย',
								},
							],
						},
						{
							name: 'เครื่องดื่ม/น้ำผลไม้',
							url: 'restaurants?categories=21&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/21.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 21,
									description: 'เครื่องดื่ม/น้ำผลไม้',
								},
							],
						},
						{
							name: 'ชานมไข่มุก',
							url: 'restaurants?categories=62&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/62.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 62,
									description: 'ชานมไข่มุก',
								},
							],
						},
						{
							name: 'ร้านไวน์',
							url: 'restaurants?categories=22&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/22.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 22,
									description: 'ร้านไวน์',
								},
							],
						},
						{
							name: 'อาหารอิตาเลียน',
							url: 'restaurants?categories=5&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/5.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 5,
									description: 'อาหารอิตาเลียน',
								},
							],
						},
						{
							name: 'อาหารมังสวิรัติ',
							url: 'restaurants?categories=27&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/27.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 27,
									description: 'อาหารมังสวิรัติ',
								},
							],
						},
						{
							name: 'อาหารคลีน/สลัด',
							url: 'restaurants?categories=39&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/39.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 39,
									description: 'อาหารคลีน/สลัด',
								},
							],
						},
						{
							name: 'อาหารฝรั่งเศส',
							url: 'restaurants?categories=9&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/9.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 9,
									description: 'อาหารฝรั่งเศส',
								},
							],
						},
						{
							name: 'ร้านบนดาดฟ้า',
							url: 'restaurants?categories=53&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/53.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 53,
									description: 'ร้านบนดาดฟ้า',
								},
							],
						},
						{
							name: 'Food Truck',
							url: 'restaurants?categories=54&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/54.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 54,
									description: 'Food Truck',
								},
							],
						},
						{
							name: 'อาหารฟิวชั่น',
							url: 'restaurants?categories=13&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/13.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 13,
									description: 'อาหารฟิวชั่น',
								},
							],
						},
						{
							name: 'อาหารเม็กซิกัน',
							url: 'restaurants?categories=41&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/41.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 41,
									description: 'อาหารเม็กซิกัน',
								},
							],
						},
						{
							name: 'อาหารนานาชาติ',
							url: 'restaurants?categories=33&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/33.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 33,
									description: 'อาหารนานาชาติ',
								},
							],
						},
						{
							name: 'สตรีทฟู้ด/รถเข็น',
							url: 'restaurants?categories=12&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/12.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 12,
									description: 'สตรีทฟู้ด/รถเข็น',
								},
							],
						},
						{
							name: 'อาหารอเมริกัน',
							url: 'restaurants?categories=8&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/8.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 8,
									description: 'อาหารอเมริกัน',
								},
							],
						},
						{
							name: 'เบอร์เกอร์',
							url: 'restaurants?categories=63&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/63.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 63,
									description: 'เบอร์เกอร์',
								},
							],
						},
						{
							name: 'อาหารเยอรมัน',
							url: 'restaurants?categories=55&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/55.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 55,
									description: 'อาหารเยอรมัน',
								},
							],
						},
						{
							name: 'ร้านข้าวต้ม',
							url: 'restaurants?categories=56&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/56.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 56,
									description: 'ร้านข้าวต้ม',
								},
							],
						},
						{
							name: 'บุฟเฟ่ต์โรงแรม',
							url: 'restaurants?categories=57&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/57.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 57,
									description: 'บุฟเฟ่ต์โรงแรม',
								},
							],
						},
						{
							name: 'อิซากายะ',
							url: 'restaurants?categories=58&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/58.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 58,
									description: 'อิซากายะ',
								},
							],
						},
						{
							name: 'คาเฟ่',
							url: 'restaurants?categories=59&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/59.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 59,
									description: 'คาเฟ่',
								},
							],
						},
						{
							name: 'ฟาสต์ฟู้ด/จานด่วน',
							url: 'restaurants?categories=28&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/28.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 28,
									description: 'ฟาสต์ฟู้ด/จานด่วน',
								},
							],
						},
						{
							name: 'อาหารกล่อง/ข้าวกล่อง เดลิเวอรี',
							url: 'restaurants?categories=52&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/52.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 52,
									description: 'อาหารกล่อง/ข้าวกล่อง เดลิเวอรี',
								},
							],
						},
						{
							name: 'อาหารเจ',
							url: 'restaurants?categories=65&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/65.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 65,
									description: 'อาหารเจ',
								},
							],
						},
						{
							name: 'อื่นๆ',
							url: 'restaurants?categories=37&regions=9681',
							iconUrl:
								'https://static2.wongnai.com/static/5.113.0/category/common/images/color/37.png',
							path: 'restaurants',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'categories',
									value: 37,
									description: 'อื่นๆ',
								},
							],
						},
					],
				},
				{
					title: 'เลือกตามเมนู',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/browse/dish.png',
					entities: [
						{
							name: 'โจ๊ก',
							url: 'restaurants?productTags=55&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 55,
									description: 'โจ๊ก',
								},
							],
						},
						{
							name: 'ขนมจีน',
							url: 'restaurants?productTags=3&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 3,
									description: 'ขนมจีน',
								},
							],
						},
						{
							name: 'ข้าวมันไก่',
							url: 'restaurants?productTags=6&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 6,
									description: 'ข้าวมันไก่',
								},
							],
						},
						{
							name: 'ก๋วยเตี๋ยวเรือ',
							url: 'restaurants?productTags=7&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 7,
									description: 'ก๋วยเตี๋ยวเรือ',
								},
							],
						},
						{
							name: 'ข้าวซอย',
							url: 'restaurants?productTags=11&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 11,
									description: 'ข้าวซอย',
								},
							],
						},
						{
							name: 'ลาบ',
							url: 'restaurants?productTags=9&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 9,
									description: 'ลาบ',
								},
							],
						},
						{
							name: 'บะหมี่',
							url: 'restaurants?productTags=12&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 12,
									description: 'บะหมี่',
								},
							],
						},
						{
							name: 'บิงซู',
							url: 'restaurants?productTags=16&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 16,
									description: 'บิงซู',
								},
							],
						},
						{
							name: 'ไก่ย่าง',
							url: 'restaurants?productTags=13&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 13,
									description: 'ไก่ย่าง',
								},
							],
						},
						{
							name: 'โรตี',
							url: 'restaurants?productTags=15&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 15,
									description: 'โรตี',
								},
							],
						},
						{
							name: 'ก๋วยจั๊บ',
							url: 'restaurants?productTags=51&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 51,
									description: 'ก๋วยจั๊บ',
								},
							],
						},
						{
							name: 'ผัดไทย',
							url: 'restaurants?productTags=10&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 10,
									description: 'ผัดไทย',
								},
							],
						},
						{
							name: 'จิ้มจุ่ม',
							url: 'restaurants?productTags=29&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 29,
									description: 'จิ้มจุ่ม',
								},
							],
						},
						{
							name: 'กุ้งเผา',
							url: 'restaurants?productTags=1&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 1,
									description: 'กุ้งเผา',
								},
							],
						},
						{
							name: 'ก๋วยเตี๋ยวต้มยำ',
							url: 'restaurants?productTags=4&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 4,
									description: 'ก๋วยเตี๋ยวต้มยำ',
								},
							],
						},
						{
							name: 'เย็นตาโฟ',
							url: 'restaurants?productTags=19&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 19,
									description: 'เย็นตาโฟ',
								},
							],
						},
						{
							name: 'ราดหน้า',
							url: 'restaurants?productTags=21&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 21,
									description: 'ราดหน้า',
								},
							],
						},
						{
							name: 'ก๋วยเตี๋ยวเนื้อ',
							url: 'restaurants?productTags=23&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 23,
									description: 'ก๋วยเตี๋ยวเนื้อ',
								},
							],
						},
						{
							name: 'ไก่ทอด',
							url: 'restaurants?productTags=25&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 25,
									description: 'ไก่ทอด',
								},
							],
						},
						{
							name: 'เครป',
							url: 'restaurants?productTags=20&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 20,
									description: 'เครป',
								},
							],
						},
						{
							name: 'แหนมเนือง',
							url: 'restaurants?productTags=24&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 24,
									description: 'แหนมเนือง',
								},
							],
						},
						{
							name: 'แหนม',
							url: 'restaurants?productTags=26&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 26,
									description: 'แหนม',
								},
							],
						},
						{
							name: 'คั่วไก่',
							url: 'restaurants?productTags=5&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 5,
									description: 'คั่วไก่',
								},
							],
						},
						{
							name: 'ข้าวหมูแดง',
							url: 'restaurants?productTags=30&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 30,
									description: 'ข้าวหมูแดง',
								},
							],
						},
						{
							name: 'ข้าวผัด',
							url: 'restaurants?productTags=28&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 28,
									description: 'ข้าวผัด',
								},
							],
						},
						{
							name: 'ต้มยำ',
							url: 'restaurants?productTags=35&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 35,
									description: 'ต้มยำ',
								},
							],
						},
						{
							name: 'ก๋วยเตี๋ยวหมู',
							url: 'restaurants?productTags=32&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 32,
									description: 'ก๋วยเตี๋ยวหมู',
								},
							],
						},
						{
							name: 'ปลาเผา',
							url: 'restaurants?productTags=18&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 18,
									description: 'ปลาเผา',
								},
							],
						},
						{
							name: 'ข้าวต้มปลา',
							url: 'restaurants?productTags=54&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 54,
									description: 'ข้าวต้มปลา',
								},
							],
						},
						{
							name: 'ก๋วยเตี๋ยวเป็ด',
							url: 'restaurants?productTags=34&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 34,
									description: 'ก๋วยเตี๋ยวเป็ด',
								},
							],
						},
						{
							name: 'ข้าวขาหมู',
							url: 'restaurants?productTags=56&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 56,
									description: 'ข้าวขาหมู',
								},
							],
						},
						{
							name: 'แซลมอน',
							url: 'restaurants?productTags=37&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 37,
									description: 'แซลมอน',
								},
							],
						},
						{
							name: 'ก๋วยเตี๋ยวไก่',
							url: 'restaurants?productTags=22&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 22,
									description: 'ก๋วยเตี๋ยวไก่',
								},
							],
						},
						{
							name: 'ข้าวหมกไก่',
							url: 'restaurants?productTags=49&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 49,
									description: 'ข้าวหมกไก่',
								},
							],
						},
						{
							name: 'น้ำเต้าหู้',
							url: 'restaurants?productTags=43&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 43,
									description: 'น้ำเต้าหู้',
								},
							],
						},
						{
							name: 'ไข่กระทะ',
							url: 'restaurants?productTags=42&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 42,
									description: 'ไข่กระทะ',
								},
							],
						},
						{
							name: 'หมูสะเต๊ะ',
							url: 'restaurants?productTags=44&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 44,
									description: 'หมูสะเต๊ะ',
								},
							],
						},
						{
							name: 'ข้าวหมูกรอบ',
							url: 'restaurants?productTags=50&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 50,
									description: 'ข้าวหมูกรอบ',
								},
							],
						},
						{
							name: 'สปาเก็ตตี้',
							url: 'restaurants?productTags=59&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 59,
									description: 'สปาเก็ตตี้',
								},
							],
						},
						{
							name: 'ปาท่องโก๋',
							url: 'restaurants?productTags=53&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 53,
									description: 'ปาท่องโก๋',
								},
							],
						},
						{
							name: 'กระเพาะปลา',
							url: 'restaurants?productTags=47&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 47,
									description: 'กระเพาะปลา',
								},
							],
						},
						{
							name: 'ลูกชิ้นปลา',
							url: 'restaurants?productTags=45&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 45,
									description: 'ลูกชิ้นปลา',
								},
							],
						},
						{
							name: 'หอยแครง',
							url: 'restaurants?productTags=36&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 36,
									description: 'หอยแครง',
								},
							],
						},
						{
							name: 'กุยช่าย',
							url: 'restaurants?productTags=46&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 46,
									description: 'กุยช่าย',
								},
							],
						},
						{
							name: 'ข้าวหน้าเป็ด',
							url: 'restaurants?productTags=52&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 52,
									description: 'ข้าวหน้าเป็ด',
								},
							],
						},
						{
							name: 'เป็ดพะโล้',
							url: 'restaurants?productTags=8&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 8,
									description: 'เป็ดพะโล้',
								},
							],
						},
						{
							name: 'ขนมเบื้อง',
							url: 'restaurants?productTags=62&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 62,
									description: 'ขนมเบื้อง',
								},
							],
						},
						{
							name: 'ไส้อั่ว',
							url: 'restaurants?productTags=41&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 41,
									description: 'ไส้อั่ว',
								},
							],
						},
						{
							name: 'ปูม้า',
							url: 'restaurants?productTags=58&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 58,
									description: 'ปูม้า',
								},
							],
						},
						{
							name: 'หมูหัน',
							url: 'restaurants?productTags=57&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 57,
									description: 'หมูหัน',
								},
							],
						},
						{
							name: 'กุ้งอบวุ้นเส้น',
							url: 'restaurants?productTags=61&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 61,
									description: 'กุ้งอบวุ้นเส้น',
								},
							],
						},
						{
							name: 'ปูดอง',
							url: 'restaurants?productTags=27&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 27,
									description: 'ปูดอง',
								},
							],
						},
						{
							name: 'ข้าวแกงกะหรี่',
							url: 'restaurants?productTags=60&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 60,
									description: 'ข้าวแกงกะหรี่',
								},
							],
						},
						{
							name: 'เครปเค้ก',
							url: 'restaurants?productTags=48&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 48,
									description: 'เครปเค้ก',
								},
							],
						},
						{
							name: 'เกี๊ยวซ่า',
							url: 'restaurants?productTags=17&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 17,
									description: 'เกี๊ยวซ่า',
								},
							],
						},
						{
							name: 'เทปันยากิ',
							url: 'restaurants?productTags=33&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 33,
									description: 'เทปันยากิ',
								},
							],
						},
						{
							name: 'ทาโกะยากิ',
							url: 'restaurants?productTags=63&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 63,
									description: 'ทาโกะยากิ',
								},
							],
						},
						{
							name: 'ผัดกะเพรา',
							url: 'restaurants?productTags=38&domain=1&regions=9681',
							path: 'businesses',
							locationRequired: true,
							params: [
								{
									name: 'regions',
									value: 9681,
									description: 'กรุงเทพและปริมณฑล',
								},
								{
									name: 'domain',
									value: 1,
								},
								{
									name: 'productTags',
									value: 38,
									description: 'ผัดกะเพรา',
								},
							],
						},
					],
				},
				{
					title: 'เลือกตามย่าน',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/browse/region.png',
					entities: [
						{
							name: 'ข้าวสาร',
							url: 'restaurants?regions=1029',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 1029,
									description: 'ข้าวสาร',
								},
							],
						},
						{
							name: 'คลองตัน',
							url: 'restaurants?regions=226',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 226,
									description: 'คลองตัน',
								},
							],
						},
						{
							name: 'คลองถม - วรจักร - ยศเส',
							url: 'restaurants?regions=255',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 255,
									description: 'คลองถม - วรจักร - ยศเส',
								},
							],
						},
						{
							name: 'คลองสาน',
							url: 'restaurants?regions=89',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 89,
									description: 'คลองสาน',
								},
							],
						},
						{
							name: 'คลองสาน - เจริญนคร - ตากสิน',
							url: 'restaurants?regions=247',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 247,
									description: 'คลองสาน - เจริญนคร - ตากสิน',
								},
							],
						},
						{
							name: 'คลองสามวา',
							url: 'restaurants?regions=204',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 204,
									description: 'คลองสามวา',
								},
							],
						},
						{
							name: 'คลองเตย',
							url: 'restaurants?regions=155',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 155,
									description: 'คลองเตย',
								},
							],
						},
						{
							name: 'คันนายาว',
							url: 'restaurants?regions=194',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 194,
									description: 'คันนายาว',
								},
							],
						},
						{
							name: 'งามวงศ์วาน-พงษ์เพชร',
							url: 'restaurants?regions=18981',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 18981,
									description: 'งามวงศ์วาน-พงษ์เพชร',
								},
							],
						},
						{
							name: 'จตุจักร',
							url: 'restaurants?regions=142',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 142,
									description: 'จตุจักร',
								},
							],
						},
						{
							name: 'จตุจักร - กำแพงเพชร  - หมอชิต',
							url: 'restaurants?regions=243',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 243,
									description: 'จตุจักร - กำแพงเพชร  - หมอชิต',
								},
							],
						},
						{
							name: 'จอมทอง',
							url: 'restaurants?regions=161',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 161,
									description: 'จอมทอง',
								},
							],
						},
						{
							name: 'จุฬาลงกรณ์',
							url: 'restaurants?regions=221',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 221,
									description: 'จุฬาลงกรณ์',
								},
							],
						},
						{
							name: 'ชิดลม',
							url: 'restaurants?regions=51975',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 51975,
									description: 'ชิดลม',
								},
							],
						},
						{
							name: 'ซอยนานา เยาวราช',
							url: 'restaurants?regions=55829',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 55829,
									description: 'ซอยนานา เยาวราช',
								},
							],
						},
						{
							name: 'ดอนเมือง',
							url: 'restaurants?regions=166',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 166,
									description: 'ดอนเมือง',
								},
							],
						},
						{
							name: 'ดินแดง',
							url: 'restaurants?regions=129',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 129,
									description: 'ดินแดง',
								},
							],
						},
						{
							name: 'ดินแดง - ประชาสงเคราะห์',
							url: 'restaurants?regions=54045',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 54045,
									description: 'ดินแดง - ประชาสงเคราะห์',
								},
							],
						},
						{
							name: 'ดุสิต',
							url: 'restaurants?regions=15',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 15,
									description: 'ดุสิต',
								},
							],
						},
						{
							name: 'ตลาดพลู',
							url: 'restaurants?regions=49984',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 49984,
									description: 'ตลาดพลู',
								},
							],
						},
						{
							name: 'ตลิ่งชัน',
							url: 'restaurants?regions=94',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 94,
									description: 'ตลิ่งชัน',
								},
							],
						},
						{
							name: 'ติวานนท์',
							url: 'restaurants?regions=18988',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 18988,
									description: 'ติวานนท์',
								},
							],
						},
						{
							name: 'ถนนจันทน์',
							url: 'restaurants?regions=232',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 232,
									description: 'ถนนจันทน์',
								},
							],
						},
						{
							name: 'ถนนจันทน์ - เซ็นต์หลุยส์',
							url: 'restaurants?regions=54022',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 54022,
									description: 'ถนนจันทน์ - เซ็นต์หลุยส์',
								},
							],
						},
						{
							name: 'ทวีวัฒนา',
							url: 'restaurants?regions=212',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 212,
									description: 'ทวีวัฒนา',
								},
							],
						},
						{
							name: 'ทองหล่อ',
							url: 'restaurants?regions=224',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 224,
									description: 'ทองหล่อ',
								},
							],
						},
						{
							name: 'ทาวน์อินทาวน์',
							url: 'restaurants?regions=54044',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 54044,
									description: 'ทาวน์อินทาวน์',
								},
							],
						},
						{
							name: 'ทุ่งครุ',
							url: 'restaurants?regions=215',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 215,
									description: 'ทุ่งครุ',
								},
							],
						},
						{
							name: 'ทุ่งมหาเมฆ',
							url: 'restaurants?regions=55838',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 55838,
									description: 'ทุ่งมหาเมฆ',
								},
							],
						},
						{
							name: 'ท่าดินแดง',
							url: 'restaurants?regions=53807',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 53807,
									description: 'ท่าดินแดง',
								},
							],
						},
						{
							name: 'ท่าพระ',
							url: 'restaurants?regions=262',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 262,
									description: 'ท่าพระ',
								},
							],
						},
						{
							name: 'ท่าพระจันทร์',
							url: 'restaurants?regions=51970',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 51970,
									description: 'ท่าพระจันทร์',
								},
							],
						},
						{
							name: 'ท่าพระจันทร์ - วังบูรพา',
							url: 'restaurants?regions=54015',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 54015,
									description: 'ท่าพระจันทร์ - วังบูรพา',
								},
							],
						},
						{
							name: 'ท่าพระอาทิตย์ - บางลำภู',
							url: 'restaurants?regions=23141',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 23141,
									description: 'ท่าพระอาทิตย์ - บางลำภู',
								},
							],
						},
						{
							name: 'ธนบุรี',
							url: 'restaurants?regions=74',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 74,
									description: 'ธนบุรี',
								},
							],
						},
						{
							name: 'นราธิวาสราชนครินทร์',
							url: 'restaurants?regions=264',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 264,
									description: 'นราธิวาสราชนครินทร์',
								},
							],
						},
						{
							name: 'นางเลิ้ง',
							url: 'restaurants?regions=54016',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 54016,
									description: 'นางเลิ้ง',
								},
							],
						},
						{
							name: 'นานา',
							url: 'restaurants?regions=51973',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 51973,
									description: 'นานา',
								},
							],
						},
						{
							name: 'นิด้า - เสรีไทย',
							url: 'restaurants?regions=18897',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 18897,
									description: 'นิด้า - เสรีไทย',
								},
							],
						},
						{
							name: 'บางกอกน้อย',
							url: 'restaurants?regions=101',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 101,
									description: 'บางกอกน้อย',
								},
							],
						},
						{
							name: 'บางกอกใหญ่',
							url: 'restaurants?regions=82',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 82,
									description: 'บางกอกใหญ่',
								},
							],
						},
						{
							name: 'บางกะปิ',
							url: 'restaurants?regions=39',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 39,
									description: 'บางกะปิ',
								},
							],
						},
						{
							name: 'บางขุนนนท์',
							url: 'restaurants?regions=54042',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 54042,
									description: 'บางขุนนนท์',
								},
							],
						},
						{
							name: 'บางขุนเทียน',
							url: 'restaurants?regions=107',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 107,
									description: 'บางขุนเทียน',
								},
							],
						},
						{
							name: 'บางคอแหลม',
							url: 'restaurants?regions=147',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 147,
									description: 'บางคอแหลม',
								},
							],
						},
						{
							name: 'บางซื่อ',
							url: 'restaurants?regions=139',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 139,
									description: 'บางซื่อ',
								},
							],
						},
						{
							name: 'บางนา',
							url: 'restaurants?regions=210',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 210,
									description: 'บางนา',
								},
							],
						},
						{
							name: 'บางบอน',
							url: 'restaurants?regions=218',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 218,
									description: 'บางบอน',
								},
							],
						},
						{
							name: 'บางพลัด',
							url: 'restaurants?regions=124',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 124,
									description: 'บางพลัด',
								},
							],
						},
						{
							name: 'บางรัก',
							url: 'restaurants?regions=30',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 30,
									description: 'บางรัก',
								},
							],
						},
						{
							name: 'บางรัก',
							url: 'restaurants?regions=54019',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 54019,
									description: 'บางรัก',
								},
							],
						},
						{
							name: 'บางเขน',
							url: 'restaurants?regions=36',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 36,
									description: 'บางเขน',
								},
							],
						},
						{
							name: 'บางเขน - หลักสี่ - แจ้งวัฒนะ',
							url: 'restaurants?regions=1012',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 1012,
									description: 'บางเขน - หลักสี่ - แจ้งวัฒนะ',
								},
							],
						},
						{
							name: 'บางแค',
							url: 'restaurants?regions=182',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 182,
									description: 'บางแค',
								},
							],
						},
						{
							name: 'บึงกุ่ม',
							url: 'restaurants?regions=131',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 131,
									description: 'บึงกุ่ม',
								},
							],
						},
						{
							name: 'บ้านหม้อ',
							url: 'restaurants?regions=51971',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 51971,
									description: 'บ้านหม้อ',
								},
							],
						},
						{
							name: 'ปทุมวัน',
							url: 'restaurants?regions=42',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 42,
									description: 'ปทุมวัน',
								},
							],
						},
						{
							name: 'ประชาชื่น - วงศ์สว่าง',
							url: 'restaurants?regions=18978',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 18978,
									description: 'ประชาชื่น - วงศ์สว่าง',
								},
							],
						},
						{
							name: 'ประตูน้ำ',
							url: 'restaurants?regions=40971',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 40971,
									description: 'ประตูน้ำ',
								},
							],
						},
						{
							name: 'ประเวศ',
							url: 'restaurants?regions=151',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 151,
									description: 'ประเวศ',
								},
							],
						},
						{
							name: 'ปิ่นเกล้า',
							url: 'restaurants?regions=1030',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 1030,
									description: 'ปิ่นเกล้า',
								},
							],
						},
						{
							name: 'ป้อมปราบศัตรูพ่าย',
							url: 'restaurants?regions=47',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 47,
									description: 'ป้อมปราบศัตรูพ่าย',
								},
							],
						},
						{
							name: 'พญาไท',
							url: 'restaurants?regions=72',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 72,
									description: 'พญาไท',
								},
							],
						},
						{
							name: 'พระนคร',
							url: 'restaurants?regions=2',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 2,
									description: 'พระนคร',
								},
							],
						},
						{
							name: 'พระราม 2',
							url: 'restaurants?regions=263',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 263,
									description: 'พระราม 2',
								},
							],
						},
						{
							name: 'พระราม 3',
							url: 'restaurants?regions=233',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 233,
									description: 'พระราม 3',
								},
							],
						},
						{
							name: 'พระราม 4',
							url: 'restaurants?regions=40940',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 40940,
									description: 'พระราม 4',
								},
							],
						},
						{
							name: 'พระราม 5',
							url: 'restaurants?regions=23148',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 23148,
									description: 'พระราม 5',
								},
							],
						},
						{
							name: 'พระราม 8',
							url: 'restaurants?regions=23143',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 23143,
									description: 'พระราม 8',
								},
							],
						},
						{
							name: 'พระราม 9',
							url: 'restaurants?regions=257',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 257,
									description: 'พระราม 9',
								},
							],
						},
						{
							name: 'พระโขนง',
							url: 'restaurants?regions=53',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 53,
									description: 'พระโขนง',
								},
							],
						},
						{
							name: 'พร้อมพงษ์',
							url: 'restaurants?regions=244',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 244,
									description: 'พร้อมพงษ์',
								},
							],
						},
						{
							name: 'พัฒนาการ',
							url: 'restaurants?regions=54043',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 54043,
									description: 'พัฒนาการ',
								},
							],
						},
						{
							name: 'ภาษีเจริญ',
							url: 'restaurants?regions=110',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 110,
									description: 'ภาษีเจริญ',
								},
							],
						},
						{
							name: 'มีนบุรี',
							url: 'restaurants?regions=55',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 55,
									description: 'มีนบุรี',
								},
							],
						},
						{
							name: 'ยานนาวา',
							url: 'restaurants?regions=65',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 65,
									description: 'ยานนาวา',
								},
							],
						},
						{
							name: 'รัชดา - ห้วยขวาง',
							url: 'restaurants?regions=239',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 239,
									description: 'รัชดา - ห้วยขวาง',
								},
							],
						},
						{
							name: 'ราชประสงค์',
							url: 'restaurants?regions=228',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 228,
									description: 'ราชประสงค์',
								},
							],
						},
						{
							name: 'ราชปรารภ',
							url: 'restaurants?regions=56052',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 56052,
									description: 'ราชปรารภ',
								},
							],
						},
						{
							name: 'ราชพฤกษ์',
							url: 'restaurants?regions=1031',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 1031,
									description: 'ราชพฤกษ์',
								},
							],
						},
						{
							name: 'ราชวัตร - ศรีย่าน',
							url: 'restaurants?regions=54018',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 54018,
									description: 'ราชวัตร - ศรีย่าน',
								},
							],
						},
						{
							name: 'ราชเทวี',
							url: 'restaurants?regions=170',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 170,
									description: 'ราชเทวี',
								},
							],
						},
						{
							name: 'รามคำแหง - ลำสาลี',
							url: 'restaurants?regions=240',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 240,
									description: 'รามคำแหง - ลำสาลี',
								},
							],
						},
						{
							name: 'รามอินทรา',
							url: 'restaurants?regions=50695',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 50695,
									description: 'รามอินทรา',
								},
							],
						},
						{
							name: 'ราษฎร์บูรณะ',
							url: 'restaurants?regions=121',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 121,
									description: 'ราษฎร์บูรณะ',
								},
							],
						},
						{
							name: 'ราษฎร์บูรณะ  -  สุขสวัสดิ์',
							url: 'restaurants?regions=1035',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 1035,
									description: 'ราษฎร์บูรณะ  -  สุขสวัสดิ์',
								},
							],
						},
						{
							name: 'ร่มเกล้า',
							url: 'restaurants?regions=1032',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 1032,
									description: 'ร่มเกล้า',
								},
							],
						},
						{
							name: 'ลาดกระบัง',
							url: 'restaurants?regions=58',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 58,
									description: 'ลาดกระบัง',
								},
							],
						},
						{
							name: 'ลาดปลาเค้า',
							url: 'restaurants?regions=18864',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 18864,
									description: 'ลาดปลาเค้า',
								},
							],
						},
						{
							name: 'ลาดพร้าว',
							url: 'restaurants?regions=175',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 175,
									description: 'ลาดพร้าว',
								},
							],
						},
						{
							name: 'วงศ์สว่าง',
							url: 'restaurants?regions=55854',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 55854,
									description: 'วงศ์สว่าง',
								},
							],
						},
						{
							name: 'วงเวียนใหญ่',
							url: 'restaurants?regions=54017',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 54017,
									description: 'วงเวียนใหญ่',
								},
							],
						},
						{
							name: 'วังทองหลาง',
							url: 'restaurants?regions=199',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 199,
									description: 'วังทองหลาง',
								},
							],
						},
						{
							name: 'วังหลัง',
							url: 'restaurants?regions=250',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 250,
									description: 'วังหลัง',
								},
							],
						},
						{
							name: 'วังหิน-โชคชัย 4',
							url: 'restaurants?regions=245',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 245,
									description: 'วังหิน-โชคชัย 4',
								},
							],
						},
						{
							name: 'วัชรพล',
							url: 'restaurants?regions=50170',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 50170,
									description: 'วัชรพล',
								},
							],
						},
						{
							name: 'วัฒนา',
							url: 'restaurants?regions=178',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 178,
									description: 'วัฒนา',
								},
							],
						},
						{
							name: 'ศรีนครินทร์',
							url: 'restaurants?regions=235',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 235,
									description: 'ศรีนครินทร์',
								},
							],
						},
						{
							name: 'ศาลาธรรมสพน์',
							url: 'restaurants?regions=55876',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 55876,
									description: 'ศาลาธรรมสพน์',
								},
							],
						},
						{
							name: 'สยาม',
							url: 'restaurants?regions=220',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 220,
									description: 'สยาม',
								},
							],
						},
						{
							name: 'สวนหลวง',
							url: 'restaurants?regions=159',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 159,
									description: 'สวนหลวง',
								},
							],
						},
						{
							name: 'สวนหลวง ร.9',
							url: 'restaurants?regions=53812',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 53812,
									description: 'สวนหลวง ร.9',
								},
							],
						},
						{
							name: 'สะพานควาย',
							url: 'restaurants?regions=50305',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 50305,
									description: 'สะพานควาย',
								},
							],
						},
						{
							name: 'สะพานสูง',
							url: 'restaurants?regions=197',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 197,
									description: 'สะพานสูง',
								},
							],
						},
						{
							name: 'สะพานใหม่',
							url: 'restaurants?regions=18492',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 18492,
									description: 'สะพานใหม่',
								},
							],
						},
						{
							name: 'สัมพันธวงศ์',
							url: 'restaurants?regions=68',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 68,
									description: 'สัมพันธวงศ์',
								},
							],
						},
						{
							name: 'สาทร',
							url: 'restaurants?regions=135',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 135,
									description: 'สาทร',
								},
							],
						},
						{
							name: 'สาทร - นราธิวาส',
							url: 'restaurants?regions=1020',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 1020,
									description: 'สาทร - นราธิวาส',
								},
							],
						},
						{
							name: 'สาธุประดิษฐ์',
							url: 'restaurants?regions=1015',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 1015,
									description: 'สาธุประดิษฐ์',
								},
							],
						},
						{
							name: 'สามย่าน',
							url: 'restaurants?regions=50308',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 50308,
									description: 'สามย่าน',
								},
							],
						},
						{
							name: 'สามเสน',
							url: 'restaurants?regions=50704',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 50704,
									description: 'สามเสน',
								},
							],
						},
						{
							name: 'สายไหม',
							url: 'restaurants?regions=190',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 190,
									description: 'สายไหม',
								},
							],
						},
						{
							name: 'สำโรง',
							url: 'restaurants?regions=1011',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 1011,
									description: 'สำโรง',
								},
							],
						},
						{
							name: 'สีลม',
							url: 'restaurants?regions=50694',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 50694,
									description: 'สีลม',
								},
							],
						},
						{
							name: 'สี่พระยา',
							url: 'restaurants?regions=1034',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 1034,
									description: 'สี่พระยา',
								},
							],
						},
						{
							name: 'สุขาภิบาล 1, 2, 3',
							url: 'restaurants?regions=259',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 259,
									description: 'สุขาภิบาล 1, 2, 3',
								},
							],
						},
						{
							name: 'สุทธิสาร',
							url: 'restaurants?regions=40949',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 40949,
									description: 'สุทธิสาร',
								},
							],
						},
						{
							name: 'หนองจอก',
							url: 'restaurants?regions=21',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 21,
									description: 'หนองจอก',
								},
							],
						},
						{
							name: 'หนองแขม',
							url: 'restaurants?regions=118',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 118,
									description: 'หนองแขม',
								},
							],
						},
						{
							name: 'หลักสี่',
							url: 'restaurants?regions=187',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 187,
									description: 'หลักสี่',
								},
							],
						},
						{
							name: 'หลังสวน',
							url: 'restaurants?regions=222',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 222,
									description: 'หลังสวน',
								},
							],
						},
						{
							name: 'หลานหลวง',
							url: 'restaurants?regions=252',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 252,
									description: 'หลานหลวง',
								},
							],
						},
						{
							name: 'ห้วยขวาง',
							url: 'restaurants?regions=85',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 85,
									description: 'ห้วยขวาง',
								},
							],
						},
						{
							name: 'อนุสาวรีย์ชัยสมรภูมิ- รางน้ำ',
							url: 'restaurants?regions=241',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 241,
									description: 'อนุสาวรีย์ชัยสมรภูมิ- รางน้ำ',
								},
							],
						},
						{
							name: 'อารีย์',
							url: 'restaurants?regions=242',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 242,
									description: 'อารีย์',
								},
							],
						},
						{
							name: 'อุดมสุข',
							url: 'restaurants?regions=40946',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 40946,
									description: 'อุดมสุข',
								},
							],
						},
						{
							name: 'อโศก',
							url: 'restaurants?regions=225',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 225,
									description: 'อโศก',
								},
							],
						},
						{
							name: 'อ่อนนุช',
							url: 'restaurants?regions=55711',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 55711,
									description: 'อ่อนนุช',
								},
							],
						},
						{
							name: 'เกษตร - นวมินทร์',
							url: 'restaurants?regions=18986',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 18986,
									description: 'เกษตร - นวมินทร์',
								},
							],
						},
						{
							name: 'เกาะเสม็ด',
							url: 'restaurants?regions=55729',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 55729,
									description: 'เกาะเสม็ด',
								},
							],
						},
						{
							name: 'เจริญกรุง',
							url: 'restaurants?regions=53808',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 53808,
									description: 'เจริญกรุง',
								},
							],
						},
						{
							name: 'เจริญกรุง - ถนนตก - หัวลำโพง',
							url: 'restaurants?regions=237',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 237,
									description: 'เจริญกรุง - ถนนตก - หัวลำโพง',
								},
							],
						},
						{
							name: 'เจริญนคร',
							url: 'restaurants?regions=56054',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 56054,
									description: 'เจริญนคร',
								},
							],
						},
						{
							name: 'เทเวศน์',
							url: 'restaurants?regions=55972',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 55972,
									description: 'เทเวศน์',
								},
							],
						},
						{
							name: 'เพชรบุรีตัดใหม่',
							url: 'restaurants?regions=229',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 229,
									description: 'เพชรบุรีตัดใหม่',
								},
							],
						},
						{
							name: 'เพชรเกษม',
							url: 'restaurants?regions=248',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 248,
									description: 'เพชรเกษม',
								},
							],
						},
						{
							name: 'เพลินจิต',
							url: 'restaurants?regions=51976',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 51976,
									description: 'เพลินจิต',
								},
							],
						},
						{
							name: 'เยาวราช',
							url: 'restaurants?regions=253',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 253,
									description: 'เยาวราช',
								},
							],
						},
						{
							name: 'เลียบทางด่วนรามอินทรา',
							url: 'restaurants?regions=42140',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 42140,
									description: 'เลียบทางด่วนรามอินทรา',
								},
							],
						},
						{
							name: 'เสนา - รัชโยธิน',
							url: 'restaurants?regions=256',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 256,
									description: 'เสนา - รัชโยธิน',
								},
							],
						},
						{
							name: 'เสาชิงช้า',
							url: 'restaurants?regions=254',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 254,
									description: 'เสาชิงช้า',
								},
							],
						},
						{
							name: 'เหม่งจ๋าย',
							url: 'restaurants?regions=27098',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 27098,
									description: 'เหม่งจ๋าย',
								},
							],
						},
						{
							name: 'เอกมัย',
							url: 'restaurants?regions=18675',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 18675,
									description: 'เอกมัย',
								},
							],
						},
						{
							name: 'เอแบค',
							url: 'restaurants?regions=55509',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 55509,
									description: 'เอแบค',
								},
							],
						},
						{
							name: 'แม้นศรี - ยศเส',
							url: 'restaurants?regions=54028',
							path: 'restaurants',
							locationRequired: false,
							params: [
								{
									name: 'regions',
									value: 54028,
									description: 'แม้นศรี - ยศเส',
								},
							],
						},
					],
				},
				{
					title: 'เลือกตามสถานี BTS',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/browse/bts-mrt.png',
					entities: [
						{
							name: 'BTS กรุงธนบุรี',
							url: 'places/bts-krung-thon-buri?domain=1',
							path: 'places/bts-krung-thon-buri',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS กรุงธนบุรี',
								},
							],
						},
						{
							name: 'BTS ชิดลม',
							url: 'places/bts-chitlom?domain=1',
							path: 'places/bts-chitlom',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS ชิดลม',
								},
							],
						},
						{
							name: 'BTS ช่องนนทรี',
							url: 'places/bts-chongnon-si?domain=1',
							path: 'places/bts-chongnon-si',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS ช่องนนทรี',
								},
							],
						},
						{
							name: 'BTS ตลาดพลู',
							url: 'places/%E0%B8%B4bts-talat-phlu?domain=1',
							path: 'places/%E0%B8%B4bts-talat-phlu',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS ตลาดพลู',
								},
							],
						},
						{
							name: 'BTS ทองหล่อ',
							url: 'places/bts-thonglor?domain=1',
							path: 'places/bts-thonglor',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS ทองหล่อ',
								},
							],
						},
						{
							name: 'BTS นานา',
							url: 'places/bts-nana?domain=1',
							path: 'places/bts-nana',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS นานา',
								},
							],
						},
						{
							name: 'BTS บางจาก',
							url: 'places/bts-bang-chak?domain=1',
							path: 'places/bts-bang-chak',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS บางจาก',
								},
							],
						},
						{
							name: 'BTS บางนา',
							url: 'places/bts-bang-na?domain=1',
							path: 'places/bts-bang-na',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS บางนา',
								},
							],
						},
						{
							name: 'BTS บางหว้า',
							url: 'places/%E0%B8%BAbts-bang-wa?domain=1',
							path: 'places/%E0%B8%BAbts-bang-wa',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS บางหว้า',
								},
							],
						},
						{
							name: 'BTS ปุณณวิถี',
							url: 'places/bts-punnawithi?domain=1',
							path: 'places/bts-punnawithi',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS ปุณณวิถี',
								},
							],
						},
						{
							name: 'BTS พญาไท',
							url: 'places/bts-phaya-thai?domain=1',
							path: 'places/bts-phaya-thai',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS พญาไท',
								},
							],
						},
						{
							name: 'BTS พระโขนง',
							url: 'places/bts-phra-khanong?domain=1',
							path: 'places/bts-phra-khanong',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS พระโขนง',
								},
							],
						},
						{
							name: 'BTS พร้อมพงษ์',
							url: 'places/bts-phrompong?domain=1',
							path: 'places/bts-phrompong',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS พร้อมพงษ์',
								},
							],
						},
						{
							name: 'BTS ราชดำริ',
							url: 'places/bts-ratchadumri?domain=1',
							path: 'places/bts-ratchadumri',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS ราชดำริ',
								},
							],
						},
						{
							name: 'BTS ราชเทวี',
							url: 'places/bts-ratchathewi?domain=1',
							path: 'places/bts-ratchathewi',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS ราชเทวี',
								},
							],
						},
						{
							name: 'BTS วงเวียนใหญ่',
							url: 'places/bts-wongwian-yai?domain=1',
							path: 'places/bts-wongwian-yai',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS วงเวียนใหญ่',
								},
							],
						},
						{
							name: 'BTS วุฒากาศ',
							url: 'places/bts-wutthakat?domain=1',
							path: 'places/bts-wutthakat',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS วุฒากาศ',
								},
							],
						},
						{
							name: 'BTS ศาลาแดง',
							url: 'places/bts-sala-dang?domain=1',
							path: 'places/bts-sala-dang',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS ศาลาแดง',
								},
							],
						},
						{
							name: 'BTS สถานีพหลโยธิน 24',
							url: 'places/bts-phahonyothin-24?domain=1',
							path: 'places/bts-phahonyothin-24',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS สถานีพหลโยธิน 24',
								},
							],
						},
						{
							name: 'BTS สถานีมหาวิทยาลัยเกษตรศาสตร์',
							url: 'places/bts-kasetsart-university?domain=1',
							path: 'places/bts-kasetsart-university',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS สถานีมหาวิทยาลัยเกษตรศาสตร์',
								},
							],
						},
						{
							name: 'BTS สถานีรัชโยธิน',
							url: 'places/bts-ratchayothin?domain=1',
							path: 'places/bts-ratchayothin',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS สถานีรัชโยธิน',
								},
							],
						},
						{
							name: 'BTS สถานีเสนานิคม',
							url: 'places/bts-sena-nikhom?domain=1',
							path: 'places/bts-sena-nikhom',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS สถานีเสนานิคม',
								},
							],
						},
						{
							name: 'BTS สนามกีฬาแห่งชาติ',
							url: 'places/bts-national-stadium?domain=1',
							path: 'places/bts-national-stadium',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS สนามกีฬาแห่งชาติ',
								},
							],
						},
						{
							name: 'BTS สนามเป้า',
							url: 'places/bts-sanam-pao?domain=1',
							path: 'places/bts-sanam-pao',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS สนามเป้า',
								},
							],
						},
						{
							name: 'BTS สยาม',
							url: 'places/bts-siam?domain=1',
							path: 'places/bts-siam',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS สยาม',
								},
							],
						},
						{
							name: 'BTS สะพานควาย',
							url: 'places/bts-saphan-khwai?domain=1',
							path: 'places/bts-saphan-khwai',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS สะพานควาย',
								},
							],
						},
						{
							name: 'BTS สะพานตากสิน',
							url: 'places/bts-saphan-taksin?domain=1',
							path: 'places/bts-saphan-taksin',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS สะพานตากสิน',
								},
							],
						},
						{
							name: 'BTS สุรศักดิ์',
							url: 'places/bts-sura-suk?domain=1',
							path: 'places/bts-sura-suk',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS สุรศักดิ์',
								},
							],
						},
						{
							name: 'BTS หมอชิต',
							url: 'places/bts-mochit?domain=1',
							path: 'places/bts-mochit',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS หมอชิต',
								},
							],
						},
						{
							name: 'BTS ห้าแยกลาดพร้าว',
							url: 'places/bts-ha-yaek-lat-phrao?domain=1',
							path: 'places/bts-ha-yaek-lat-phrao',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS ห้าแยกลาดพร้าว',
								},
							],
						},
						{
							name: 'BTS อนุสาวรีย์ชัยสมรภูมิ',
							url: 'places/bts-victory-monument?domain=1',
							path: 'places/bts-victory-monument',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS อนุสาวรีย์ชัยสมรภูมิ',
								},
							],
						},
						{
							name: 'BTS อารีย์',
							url: 'places/bts-ari?domain=1',
							path: 'places/bts-ari',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS อารีย์',
								},
							],
						},
						{
							name: 'BTS อุดมสุข',
							url: 'places/bts-udom-suk?domain=1',
							path: 'places/bts-udom-suk',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS อุดมสุข',
								},
							],
						},
						{
							name: 'BTS อโศก',
							url: 'places/bts-asoke?domain=1',
							path: 'places/bts-asoke',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS อโศก',
								},
							],
						},
						{
							name: 'BTS อ่อนนุช',
							url: 'places/bts-on-nut?domain=1',
							path: 'places/bts-on-nut',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS อ่อนนุช',
								},
							],
						},
						{
							name: 'BTS เพลินจิต',
							url: 'places/bts-phloenchit?domain=1',
							path: 'places/bts-phloenchit',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS เพลินจิต',
								},
							],
						},
						{
							name: 'BTS เอกมัย',
							url: 'places/bts-ekamai?domain=1',
							path: 'places/bts-ekamai',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS เอกมัย',
								},
							],
						},
						{
							name: 'BTS แบริ่ง',
							url: 'places/bts-bearing?domain=1',
							path: 'places/bts-bearing',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS แบริ่ง',
								},
							],
						},
						{
							name: 'BTS โพธิ์นิมิตร',
							url: 'places/bts-pho-nimit?domain=1',
							path: 'places/bts-pho-nimit',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
									description: 'BTS โพธิ์นิมิตร',
								},
							],
						},
					],
				},
				{
					title: 'เลือกตามสถานี MRT',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/browse/bts-mrt.png',
					entities: [
						{
							name: 'MRT กำแพงเพชร',
							url: 'places/mrt-kampang-phet?domain=1',
							path: 'places/mrt-kampang-phet',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT คลองเตย',
							url: 'places/mrt-khlong-toei?domain=1',
							path: 'places/mrt-khlong-toei',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT ท่าพระ',
							url: 'places/mrt-tha-phra?domain=1',
							path: 'places/mrt-tha-phra',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT บางซื่อ',
							url: 'places/mrt-bang-sue?domain=1',
							path: 'places/mrt-bang-sue',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT บางแค',
							url: 'places/mrt-bang-khae?domain=1',
							path: 'places/mrt-bang-khae',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT พระราม 9',
							url: 'places/mrt-phra-ram-9?domain=1',
							path: 'places/mrt-phra-ram-9',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT พหลโยธิน',
							url: 'places/mrt-phahon-yothin?domain=1',
							path: 'places/mrt-phahon-yothin',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT ภาษีเจริญ',
							url: 'places/mrt-phasi-charoen?domain=1',
							path: 'places/mrt-phasi-charoen',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT รัชดาภิเษก',
							url: 'places/mrt-ratchadaphisek?domain=1',
							path: 'places/mrt-ratchadaphisek',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT ลาดพร้าว',
							url: 'places/mrt-lat-phrao?domain=1',
							path: 'places/mrt-lat-phrao',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT ลุมพินี',
							url: 'places/mrt-lumphini?domain=1',
							path: 'places/mrt-lumphini',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT วัดมังกร',
							url: 'places/mrt-wat-mangkon-station?domain=1',
							path: 'places/mrt-wat-mangkon-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT ศูนย์การประชุมแห่งชาติสิริกิติ์',
							url:
								'places/mrt-queen-sirikit-national-convention-centre?domain=1',
							path: 'places/mrt-queen-sirikit-national-convention-centre',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT ศูนย์วัฒนธรรมแห่งประเทศไทย',
							url: 'places/mrt-thailand-cultural-centre?domain=1',
							path: 'places/mrt-thailand-cultural-centre',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT สนามไชย',
							url: 'places/mrt-sanam-chai?domain=1',
							path: 'places/mrt-sanam-chai',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT สวนจตุจักร',
							url: 'places/mrt-chatuchak-park?domain=1',
							path: 'places/mrt-chatuchak-park',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT สามยอด',
							url: 'places/mrt-sam-yot?domain=1',
							path: 'places/mrt-sam-yot',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT สามย่าน',
							url: 'places/mrt-sam-yan?domain=1',
							path: 'places/mrt-sam-yan',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT สีลม',
							url: 'places/mrt-silom?domain=1',
							path: 'places/mrt-silom',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT สุขุมวิท',
							url: 'places/mrt-sukhumvit?domain=1',
							path: 'places/mrt-sukhumvit',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT สุทธิสาร',
							url: 'places/mrt-sutthisan?domain=1',
							path: 'places/mrt-sutthisan',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT หลักสอง',
							url: 'places/mrt-lak-song?domain=1',
							path: 'places/mrt-lak-song',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT หัวลำโพง',
							url: 'places/mrt-hua-lamphong?domain=1',
							path: 'places/mrt-hua-lamphong',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT ห้วยขวาง',
							url: 'places/mrt-huai-khwang?domain=1',
							path: 'places/mrt-huai-khwang',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT อิสรภาพ',
							url: 'places/mrt-itsaraphap?domain=1',
							path: 'places/mrt-itsaraphap',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT เพชรบุรี',
							url: 'places/mrt-phetchaburi?domain=1',
							path: 'places/mrt-phetchaburi',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRT เพชรเกษม 48',
							url: 'places/mrt-phet-kasem-48?domain=1',
							path: 'places/mrt-phet-kasem-48',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA กระทรวงสาธารณสุข',
							url: 'places/mrta-ministry-of-public-health-station?domain=1',
							path: 'places/mrta-ministry-of-public-health-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA คลองบางไผ่',
							url: 'places/mrta-purple-line-khlong-bang-phai-station?domain=1',
							path: 'places/mrta-purple-line-khlong-bang-phai-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA ตลาดบางใหญ่',
							url: 'places/mrta-talad-bang-yai-station?domain=1',
							path: 'places/mrta-talad-bang-yai-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA ท่าอิฐ',
							url: 'places/mrta-tha-it-station?domain=1',
							path: 'places/mrta-tha-it-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA บางซ่อน',
							url: 'places/mrta-bang-son-station?domain=1',
							path: 'places/mrta-bang-son-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA บางพลู',
							url: 'places/mrta-bang-phlu-station?domain=1',
							path: 'places/mrta-bang-phlu-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA บางรักใหญ่',
							url: 'places/mrta-bang-rak-yai-station?domain=1',
							path: 'places/mrta-bang-rak-yai-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA วงศ์สว่าง',
							url: 'places/mrta-wong-sawang-station?domain=1',
							path: 'places/mrta-wong-sawang-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA ศรีพรสวรรค์',
							url: 'places/mrta-si-phonsawan-station?domain=1',
							path: 'places/mrta-si-phonsawan-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA ศูนย์ราชการนนทบุรี',
							url: 'places/mrta-nonthaburi-civic-center-station?domain=1',
							path: 'places/mrta-nonthaburi-civic-center-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA สะพานพระนั่งเกล้า',
							url: 'places/mrta-phra-nang-klao-bridge-station?domain=1',
							path: 'places/mrta-phra-nang-klao-bridge-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA สามแยกบางใหญ่',
							url: 'places/mrta-sam-yeak-bang-yai-station?domain=1',
							path: 'places/mrta-sam-yeak-bang-yai-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA เตาปูน',
							url: 'places/mrta-tao-poon-station?domain=1',
							path: 'places/mrta-tao-poon-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA แยกติวานนท์',
							url: 'places/mrta-yaek-tiwanon-station?domain=1',
							path: 'places/mrta-yaek-tiwanon-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA แยกนนทบุรี 1',
							url: 'places/mrta-yaek-nonthaburi-station?domain=1',
							path: 'places/mrta-yaek-nonthaburi-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
						{
							name: 'MRTA ไทรม้า',
							url: 'places/mrta-sai-ma-station?domain=1',
							path: 'places/mrta-sai-ma-station',
							locationRequired: false,
							params: [
								{
									name: 'domain',
									value: 1,
								},
							],
						},
					],
				},
				{
					title: 'Users’ Choice 2019',
					url: 'users-choice',
					iconUrl:
						'https://static2.wongnai.com/static/5.113.0/welcome/common/images/browse/users-choice-2019.png',
				},
			],
			_q: {},
		},
		key: 0.11260243851295493,
		error: null,
	},
	businessAtmospherePhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	topicComments: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	dealSortModal: {
		isOpen: false,
	},
	promotion: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	appConfig: {
		value: {
			'cooking.campaign.submit-recipe.rewards.3.form-url':
				'https://goo.gl/forms/Vaf6ZT4bRfHC0BoG3',
			'cooking.campaign.submit-recipe.form-url-2':
				'https://goo.gl/forms/QbQDyvQUIzn5ypai1',
			'cooking.download-popup.recipes.2.title':
				'ข้าวไข่ข้นกุ้ง เนื้อนุ่มละมุนลิ้น',
			'cooking.campaign.submit-recipe.rewards.6.message.mobile':
				'เย้ ! ยินดีด้วยคุณได้รับ "แผ่นรองของร้อน\nน้องหมี" จาก Wongnai Cooking\nยังเหลืออีก 1 รางวัลใหญ่\nให้เล่นจนถึง 13 พฤษภาคมนี้',
			'cooking.download-popup.recipes.3.title': 'สปาเก็ตตี้หอยลายน้ำพริกเผา',
			'cooking.campaign.submit-recipe.form-url-3':
				'https://goo.gl/forms/Ssb3ZMsEH5s1wTCH2',
			'cooking.download-popup.recipes.4.title': 'ซานต้าจิ๋ว',
			'cooking.campaign.submit-recipe.rewards.3.message.mobile':
				'ว้าว ! ยินดีด้วยคุณได้รับ "Gift Set"\nจาก Knorr เอาไปทำอาหารอร่อยๆกันเลย\nยังเหลืออีก 2 รางวัล\nให้เล่นจนถึง 13 พฤษภาคมนี้',
			'cooking.campaign.submit-recipe.title':
				'คุณได้เข้าร่วมกิจกรรม\n"เข้าครัว แชร์สูตรเด็ด รับปีใหม่ กับคนอร์"\nร่วมสนุกได้ตั้งแต่วันนี้ - 31 ธ.ค. 61',
			'cooking.campaign.submit-recipe.rewards.3.image-url':
				'https://s3-ap-southeast-1.amazonaws.com/static.wongnai.com/cooking-campaign/Gift1-240px.png',
			'cooking.download-popup.recipes.1.ownerName': 'LunnyToon',
			'cooking.campaign.submit-recipe.info-url':
				'https://www.wongnai.com/blogs/wongnai-cooking-recipes-for-new-year',
			'cooking.campaign.submit-recipe.rewards.6.image-url':
				'https://s3-ap-southeast-1.amazonaws.com/static.wongnai.com/cooking-campaign/Gift2-240px.png',
			'cooking.download-popup.recipes.2.ownerName': 'sweety nutthy',
			'cooking.download-popup.recipes.3.ownerName': 'Oat Nutthapong',
			'cooking.campaign.submit-recipe.rewards.steps': '3,6,10',
			'cooking.download-popup.recipes.4.ownerName': 'kiejung',
			'cooking.download-popup.recipes.1.recipeUrl':
				'https://www.wongnai.com/recipes/ugc/9274cc0049cf42e692ae0b2e3f534ddc?ref=cooking-app-dl-popup',
			'cooking.download-popup.recipes.2.recipeUrl':
				'https://www.wongnai.com/recipes/ugc/86aa61cbd1cf40aa86bab1e1f5396bfa?ref=cooking-app-dl-popup',
			'cooking.download-popup.recipes.4.imageUrl':
				'https://s3-ap-southeast-1.amazonaws.com/static.wongnai.com/cooking-campaign/gift4.png',
			'cooking.download-popup.recipes.3.recipeUrl':
				'https://www.wongnai.com/recipes/ugc/33aa03f172ad45578a1b6599fe0f2f77?ref=cooking-app-dl-popup',
			'cooking.download-popup.recipes.4.recipeUrl':
				'https://www.wongnai.com/recipes/ugc/5bf3b4c3b8194edd8b340bba0752b37d?ref=cooking-app-dl-popup',
			'cooking.download-popup.recipes.3.imageUrl':
				'https://s3-ap-southeast-1.amazonaws.com/static.wongnai.com/cooking-campaign/gift3.png',
			'cooking.download-popup.recipes.2.imageUrl':
				'https://s3-ap-southeast-1.amazonaws.com/static.wongnai.com/cooking-campaign/gift2.png',
			'cooking.campaign.submit-recipe.rewards.3.caption': 'Gift Set จาก\nKnorr',
			'cooking.campaign.submit-recipe.enabled': 'true',
			'cooking.download-popup.recipes.1.imageUrl':
				'https://s3-ap-southeast-1.amazonaws.com/static.wongnai.com/cooking-campaign/gift1.png',
			'cooking.campaign.submit-recipe.rewards.10.image-url':
				'https://s3-ap-southeast-1.amazonaws.com/static.wongnai.com/cooking-campaign/Gift3-240px.png',
			'cooking.campaign.submit-recipe.rewards.3.message':
				'ว้าว ! ยินดีด้วยคุณได้รับ "Gift Set" จาก Knorr\nเอาไปทำอาหารอร่อยๆกันเลย\nยังเหลืออีก 2 รางวัล ให้เล่นจนถึง 13 พฤษภาคมนี้',
			'cooking.campaign.submit-recipe.title.mobile':
				'คุณได้เข้าร่วมกิจกรรม\n"เข้าครัว แชร์สูตรเด็ด รับปีใหม่ กับคนอร์"\nร่วมสนุกได้ตั้งแต่วันนี้ - 31 ธ.ค. 61',
			'cooking.campaign.submit-recipe.rewards.6.caption':
				'แผ่นรองของร้อนน้องหมี จาก\nWongnai Cooking',
			'cooking.campaign.submit-recipe.end-timestamp': '1540141199000',
			'cooking.campaign.submit-recipe.rewards.6.message':
				'เย้ ! ยินดีด้วยคุณได้รับ "แผ่นรองของร้อนน้องหมี"\nจาก Wongnai Cooking ยังเหลืออีก 1 รางวัลใหญ่\nให้เล่นจนถึง 13 พฤษภาคมนี้',
			'cooking.campaign.submit-recipe.rewards.10.caption':
				'ถุงมือกันความร้อนน้องหมี จาก\nWongnai Cooking',
			'cooking.campaign.submit-recipe.start-timestamp': '1539277200000',
			'cooking.campaign.submit-recipe.rewards.10.form-url':
				'https://goo.gl/forms/SEis9Q9auDkzRb0N2',
			'cooking.campaign.submit-recipe.rewards.10.message':
				'อันสุดท้ายแล้ว ! ยินดีด้วยคุณได้รับ\n"ถุงมือกันความร้อนน้องหมี" จาก Wongnai Cooking\nที่หาที่ไหนไม่ได้ มีเฉพาะคุณเท่านั้น',
			'cooking.campaign.submit-recipe.rewards.10.message.mobile':
				'อันสุดท้ายแล้ว ! ยินดีด้วยคุณได้รับ\n"ถุงมือกันความร้อนน้องหมี" จาก\nWongnai Cooking\nที่หาที่ไหนไม่ได้ มีเฉพาะคุณเท่านั้น',
			'cooking.campaign.submit-recipe.form-url':
				'https://goo.gl/forms/KGwUy73RLIYzOJk02',
			'cooking.campaign.submit-recipe.rewards.6.form-url':
				'https://goo.gl/forms/tXR8XCMX5lOUafdC2',
			'cooking.download-popup.recipes.1.title': 'ปีกไก่ทอดน้ำปลา',
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
	cookingSeo: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	bookmarkedBusinessIds: [],
	provinces: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	cookingLeaderboard: {
		page: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
		me: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
		seo: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
	},
	userTrips: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	recipeBookmark: {
		userBookmarks: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
	},
	foodWelcome: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	topics: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	collectionsPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	listing: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	currentCity: {
		id: 1,
		welcomeUrl: 'bangkok',
		cityName: 'กรุงเทพมหานคร',
		cityCode: 1,
		locale: 'th',
	},
	cookingBrowse: {
		browses: {
			isFetching: false,
			value: [],
			key: null,
			error: null,
		},
		seo: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
	},
	canCreateReview: {},
	tripsByTagPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	trip: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	subdistricts: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	recipes: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	pollQuestion: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	announcementsDidClose: {},
	cookingNotification: {
		dialog: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
		page: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
		statistic: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
		pushSetting: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
	},
	cookingRecentHomework: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	cookingUser: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	districts: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	notificationsModal: {
		isOpen: false,
	},
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
	chainProfileModal: {
		isOpen: false,
	},
	eliteNews: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	campaignDealsPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	announcementModal: {
		type: 1,
		isOpen: false,
	},
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
		page: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
		me: {
			isFetching: false,
			value: null,
			key: null,
			error: null,
		},
		seo: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
	},
	beautyBrowse: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	photoComments: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	recipesByFirstTag: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	evouchersFilterForm: {},
	evoucherSortModal: {
		isOpen: false,
	},
	celebChefs: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	beautyWelcome: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	photoReportModal: {
		isOpen: false,
	},
	recommendedArticlesPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	tripCommentEditor: {
		isOpen: false,
		commentId: null,
	},
	searchResultPlaceLandingMap: {
		isOpen: false,
	},
	businessDeals: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	maliClub: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	CreateBusinessWithDomainModal: {
		isOpen: false,
	},
	meEditProfile: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessGroundPhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	tripCommentDeleteModal: {
		isOpen: false,
		commentId: null,
	},
	notifications: {
		isFetching: false,
		value: null,
		key: null,
		error: null,
	},
	topicRules: {
		isFetching: false,
		value: null,
		key: null,
		error: null,
	},
	cookingCookbooks: {
		page: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
		seo: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
		recommended: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
	},
	topicTags: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	evouchersList: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	contactFormDomain: {
		domain: null,
	},
	searchGroupDropDown: {
		isOpen: false,
	},
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
	bottomBarStyle: {
		message: null,
		isOpen: false,
	},
	searchInsertionAds: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	showCookingAnnouncementModal: false,
	usersChoice: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	photoViewerModal: {
		isOpen: false,
		index: 0,
	},
	interests: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	defaultDialog: {
		message: null,
		isOpen: false,
	},
	userList: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	showRecipeTagsModal: false,
	announcementsMobileSeen: {},
	finishWriteReviewModal: {
		shouldShow: false,
		writeReviewResponse: {},
	},
	dealBusinessesPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessFavourites: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	collectionContentPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	reviewsPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	recipeViewHomeworkModal: {
		openId: null,
	},
	recommendedRecipes: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	userLists: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	showRecipeImagesModal: false,
	userLabels: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	createBookmarkLabelModal: {
		isOpen: false,
	},
	articlesContentPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	listingItemsPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	evouchersFilterModal: {
		isOpen: false,
	},
	themeCardCategoryGroups: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	fetchDataHttpStatusCode: 200,
	recipePageviewModal: {
		isOpen: false,
	},
	topicReportDialog: {
		show: false,
	},
	suggestCollectionModal: {
		isOpen: false,
	},
	user: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	topicTag: {
		isFetching: false,
		value: null,
		key: null,
		error: null,
	},
	announcements: {},
	userPhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	l: 0,
	deal: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	facilitiesModal: {
		isOpen: false,
	},
	reviewComments: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	sucesssNoticeBar: {
		message: null,
		isOpen: false,
	},
	collectionBusinesses: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	articlesPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	meOrdersPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	insightReport: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	tripArticlesTopTags: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	domainItemBadge: {},
	meOrderCards: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	businessBookmarkLabelsMe: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	campaignSeo: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	bookmarkLabelsMe: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	campaignBusinessesPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessFilterDraftForm: {},
	nearbyAttractions: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	popularUgcRecipes: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	userFollowDropdown: {
		isOpen: false,
	},
	chainArticlesPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	currentLocation: {},
	businessAmenityAndActivityPhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessPhotosTabCache: {},
	businesses: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	trips: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	coCooking: {
		landing: {
			isFetching: false,
			value: [],
			key: null,
			error: null,
		},
	},
	recipe: {
		ingredients: {
			byId: {},
			all: [],
			dataState: 'persisted',
			mode: 'edit',
			validationMessages: {},
		},
		confirmDeleteModal: {
			isOpen: false,
			recipeId: null,
		},
		instructions: {
			byId: {},
			all: [],
			dataState: {},
			orderingDataState: 'persisted',
			isAsyncBufferStatusEmpty: {},
			mode: 'edit',
			validationMessages: {},
			confirmDeleteModal: {
				isOpen: false,
				instructionId: null,
			},
		},
		submitCampaignModal: {
			isOpen: false,
		},
		instructionImages: {
			byInstructionId: {},
			byId: {},
			dataState: {},
		},
		serverErrorModal: {
			isOpen: false,
			messages: [],
		},
		submitRecipeAppDownloadModal: {
			isOpen: false,
		},
		info: {
			value: {},
			validationMessages: {},
			dataState: 'persisted',
		},
		state: 'Draft',
		imageModal: {
			isOpen: false,
			images: [],
			imageIndex: 0,
		},
		validationModal: {
			isOpen: false,
			messages: [],
		},
		submitCampaignInfoModal: {
			isOpen: false,
		},
		images: {
			value: [],
			fetching: [],
			dataState: 'persisted',
			validationMessages: {},
			schema: {
				fetching: 1,
			},
		},
		tags: {
			value: [],
			validationMessages: {},
			dataState: 'persisted',
		},
		id: null,
	},
	navigating: true,
	shareModal: {
		isOpen: false,
	},
	recipeLikes: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	advertisements: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	chainSections: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	searchSuggestionsPane: {
		isOpen: false,
	},
	adminBusiness: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessBathroomPhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	userTopics: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessesSeo: {
		isFetching: false,
		value: {
			size: 100,
			extras: {},
			data: [
				{
					id: 138064,
					eid: 'umenohana',
					displayName: 'UMENOHANA   นิฮอนมูระมอลล์',
					url: 'restaurants/umenohana',
					shortUrl: 'r/umenohana',
				},
				{
					id: 4,
					eid: 'kosirae',
					displayName: 'Kosirae',
					url: 'restaurants/kosirae',
					shortUrl: 'r/kosirae',
				},
				{
					id: 8201,
					eid: 'simorakot-ssk',
					displayName: 'ข้าวหมูแดงสีมรกต Soi Su Korn 1',
					url: 'restaurants/simorakot-ssk',
					shortUrl: 'r/simorakot-ssk',
				},
				{
					id: 4285,
					eid: 'lordjims',
					displayName: 'Lord Jims Restaurant โรงแรมโอเรียนเต็ล',
					url: 'restaurants/lordjims',
					shortUrl: 'r/lordjims',
				},
				{
					id: 10183,
					eid: 'sushimasa',
					displayName: 'Sushi Masa ราชเทวี',
					url: 'restaurants/sushimasa',
					shortUrl: 'r/sushimasa',
				},
				{
					id: 166774,
					eid: 'littlehideout',
					displayName: 'Little Hideout ตลิ่งชัน',
					url: 'restaurants/littlehideout',
					shortUrl: 'r/littlehideout',
				},
				{
					id: 27080,
					eid: 'littletreegarden',
					displayName: 'Little Tree Garden',
					url: 'restaurants/littletreegarden',
					shortUrl: 'r/littletreegarden',
				},
				{
					id: 2097,
					eid: 'zongpedpalow',
					displayName: 'ซ้งเป็ดพะโล้ สี่แยกวังหิน',
					url: 'restaurants/zongpedpalow',
					shortUrl: 'r/zongpedpalow',
				},
				{
					id: 13581,
					eid: 'tenyuugrand-sathorn',
					displayName: 'Tenyuu Grand',
					url: 'restaurants/tenyuugrand-sathorn',
					shortUrl: 'r/tenyuugrand-sathorn',
				},
				{
					id: 1714,
					eid: 'kruasaroschad',
					displayName: 'ครัวสา รสจัด',
					url: 'restaurants/kruasaroschad',
					shortUrl: 'r/kruasaroschad',
				},
				{
					id: 7021,
					eid: 'bakeawish-ssw',
					displayName: 'Bake a wish Japanese Homemade Cake สุขสวัสดิ์ 19',
					url: 'restaurants/bakeawish-ssw',
					shortUrl: 'r/bakeawish-ssw',
				},
				{
					id: 21209,
					eid: 'creamery-samyan',
					displayName: 'Creamery Boutique Ice Cream U-Center สามย่าน',
					url: 'restaurants/creamery-samyan',
					shortUrl: 'r/creamery-samyan',
				},
				{
					id: 123257,
					eid: 'tuangdimsum',
					displayName: 'ตวง ติ่มซำ',
					url: 'restaurants/tuangdimsum',
					shortUrl: 'r/tuangdimsum',
				},
				{
					id: 150896,
					eid: 'lavie-vhb',
					displayName: 'La VIE Bistronomy',
					url: 'restaurants/lavie-vhb',
					shortUrl: 'r/lavie-vhb',
				},
				{
					id: 3068,
					eid: 'vertigo',
					displayName: 'Vertigo and Moon Bar',
					url: 'restaurants/vertigo',
					shortUrl: 'r/vertigo',
				},
				{
					id: 5290,
					publicId: '5290th',
					displayName: 'ครัวดอกไม้ขาว แม้นศรี - ยศเส',
					url:
						'restaurants/5290th-%E0%B8%84%E0%B8%A3%E0%B8%B1%E0%B8%A7%E0%B8%94%E0%B8%AD%E0%B8%81%E0%B9%84%E0%B8%A1%E0%B9%89%E0%B8%82%E0%B8%B2%E0%B8%A7',
					shortUrl: 'r/5290th',
				},
				{
					id: 190401,
					eid: 'pataplantation',
					displayName: 'PATA PLANTATION',
					url: 'restaurants/pataplantation',
					shortUrl: 'r/pataplantation',
				},
				{
					id: 119931,
					eid: 'sousaku',
					displayName: 'Sousaku',
					url: 'restaurants/sousaku',
					shortUrl: 'r/sousaku',
				},
				{
					id: 7198,
					eid: 'waterlibrary',
					displayName: 'Water Library จามจุรีสแควร์',
					url: 'restaurants/waterlibrary',
					shortUrl: 'r/waterlibrary',
				},
				{
					id: 22277,
					eid: 'aboveeleven',
					displayName: 'ABOVE ELEVEN',
					url: 'restaurants/aboveeleven',
					shortUrl: 'r/aboveeleven',
				},
				{
					id: 218426,
					eid: 'farmtotable-ho',
					displayName: 'Farm to Table ไฮด์เอาท์',
					url: 'restaurants/farmtotable-ho',
					shortUrl: 'r/farmtotable-ho',
				},
				{
					id: 22863,
					eid: '25degrees',
					displayName: '25 Degrees Bangkok',
					url: 'restaurants/25degrees',
					shortUrl: 'r/25degrees',
				},
				{
					id: 162245,
					eid: 'ginzasushiichi',
					displayName: 'Ginza Sushi Ichi',
					url: 'restaurants/ginzasushiichi',
					shortUrl: 'r/ginzasushiichi',
				},
				{
					id: 269458,
					eid: 'lecochonblanc',
					displayName: 'Le Cochon Blanc',
					url: 'restaurants/lecochonblanc',
					shortUrl: 'r/lecochonblanc',
				},
				{
					id: 3034,
					eid: 'thegrilltokyo',
					displayName: 'The Grill Tokyo สยามพารากอน',
					url: 'restaurants/thegrilltokyo',
					shortUrl: 'r/thegrilltokyo',
				},
				{
					id: 21679,
					eid: 'mavericksuki',
					displayName: 'สุกี้ยากี้เมาเวอริค ซอยยศเส',
					url: 'restaurants/mavericksuki',
					shortUrl: 'r/mavericksuki',
				},
				{
					id: 5281,
					publicId: '5281BP',
					displayName: 'ออน ล๊อก หยุ่น',
					url:
						'restaurants/5281BP-%E0%B8%AD%E0%B8%AD%E0%B8%99-%E0%B8%A5%E0%B9%8A%E0%B8%AD%E0%B8%81-%E0%B8%AB%E0%B8%A2%E0%B8%B8%E0%B9%88%E0%B8%99',
					shortUrl: 'r/5281BP',
				},
				{
					id: 9045,
					eid: 'janhom',
					displayName: 'จันทน์หอม',
					url: 'restaurants/janhom',
					shortUrl: 'r/janhom',
				},
				{
					id: 8795,
					publicId: '8795IP',
					displayName: 'ขนมปังเจ้าอร่อยเด็ดเยาวราช',
					url:
						'restaurants/8795IP-%E0%B8%82%E0%B8%99%E0%B8%A1%E0%B8%9B%E0%B8%B1%E0%B8%87%E0%B9%80%E0%B8%88%E0%B9%89%E0%B8%B2%E0%B8%AD%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%A2%E0%B9%80%E0%B8%94%E0%B9%87%E0%B8%94%E0%B9%80%E0%B8%A2%E0%B8%B2%E0%B8%A7%E0%B8%A3%E0%B8%B2%E0%B8%8A',
					shortUrl: 'r/8795IP',
				},
				{
					id: 67912,
					eid: 'maeklonghuaplamorfai',
					displayName: 'แม่กลองหัวปลาหม้อไฟ คลองขวาง',
					url: 'restaurants/maeklonghuaplamorfai',
					shortUrl: 'r/maeklonghuaplamorfai',
				},
				{
					id: 10185,
					publicId: '10185Rh',
					displayName: 'เหล่ากุ้ย บะหมี่อัศวิน',
					url:
						'restaurants/10185Rh-%E0%B9%80%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%B2%E0%B8%81%E0%B8%B8%E0%B9%89%E0%B8%A2-%E0%B8%9A%E0%B8%B0%E0%B8%AB%E0%B8%A1%E0%B8%B5%E0%B9%88%E0%B8%AD%E0%B8%B1%E0%B8%A8%E0%B8%A7%E0%B8%B4%E0%B8%99',
					shortUrl: 'r/10185Rh',
				},
				{
					id: 8476,
					eid: 'chareonsang',
					displayName: 'ขาหมูเจริญแสง สีลม',
					url: 'restaurants/chareonsang',
					shortUrl: 'r/chareonsang',
				},
				{
					id: 7661,
					eid: 'hydeandseek',
					displayName: 'Hyde & Seek Athenee Athenee',
					url: 'restaurants/hydeandseek',
					shortUrl: 'r/hydeandseek',
				},
				{
					id: 2496,
					publicId: '2496xR',
					displayName: 'ประจักษ์เป็ดย่าง บางรัก',
					url:
						'restaurants/2496xR-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%88%E0%B8%B1%E0%B8%81%E0%B8%A9%E0%B9%8C%E0%B9%80%E0%B8%9B%E0%B9%87%E0%B8%94%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%87-%E0%B8%9A%E0%B8%B2%E0%B8%87%E0%B8%A3%E0%B8%B1%E0%B8%81',
					shortUrl: 'r/2496xR',
				},
				{
					id: 25439,
					eid: 'ginzado-thonglor',
					displayName: 'Ginzado ทองหล่อ',
					url: 'restaurants/ginzado-thonglor',
					shortUrl: 'r/ginzado-thonglor',
				},
				{
					id: 250049,
					eid: 'phrodee',
					displayName: 'เพราะดี',
					url: 'restaurants/phrodee',
					shortUrl: 'r/phrodee',
				},
				{
					id: 9545,
					eid: 'anyasplace',
					displayName: "Anya's Place ศาลายา",
					url: 'restaurants/anyasplace',
					shortUrl: 'r/anyasplace',
				},
				{
					id: 18186,
					eid: 'thediningroom-ew',
					displayName: 'The Dining Room แกรนด์ ไฮแอท เอราวัณ',
					url: 'restaurants/thediningroom-ew',
					shortUrl: 'r/thediningroom-ew',
				},
				{
					id: 3959,
					eid: 'espresso',
					displayName: 'Espresso โรงแรมอินเตอร์คอนติเนนตัล',
					url: 'restaurants/espresso',
					shortUrl: 'r/espresso',
				},
				{
					id: 184778,
					eid: 'parismikki',
					displayName: 'Paris Mikki อโศก',
					url: 'restaurants/parismikki',
					shortUrl: 'r/parismikki',
				},
				{
					id: 13716,
					eid: 'smithandrabbit',
					displayName: 'Smith & Rabbit',
					url: 'restaurants/smithandrabbit',
					shortUrl: 'r/smithandrabbit',
				},
				{
					id: 203990,
					eid: 'arnosbutcher',
					displayName: "Arno's Butcher and Eatery ซอย นราธิวาสราชนครินทร์ 20",
					url: 'restaurants/arnosbutcher',
					shortUrl: 'r/arnosbutcher',
				},
				{
					id: 22882,
					eid: 'tinpresso',
					displayName: 'TINPRESSO',
					url: 'restaurants/tinpresso',
					shortUrl: 'r/tinpresso',
				},
				{
					id: 141381,
					publicId: '141381Av',
					displayName: 'TREAT Cafe & Hangout',
					url: 'restaurants/141381Av-treat-cafe-hangout',
					shortUrl: 'r/141381Av',
				},
				{
					id: 7648,
					eid: 'aoringo-thaniya',
					displayName: 'Aoringo Japanese Curry Place ตึกธนิยะ บีทีเอส วิงค์',
					url: 'restaurants/aoringo-thaniya',
					shortUrl: 'r/aoringo-thaniya',
				},
				{
					id: 8271,
					eid: 'jekhai',
					displayName: 'เจ๊ไข่ ซีฟู้ด ประชาชื่น',
					url: 'restaurants/jekhai',
					shortUrl: 'r/jekhai',
				},
				{
					id: 228,
					eid: 'zanotti',
					displayName: 'Zanotti IL Ristorante Italiano',
					url: 'restaurants/zanotti',
					shortUrl: 'r/zanotti',
				},
				{
					id: 128442,
					eid: 'fufushabu-rm',
					displayName: 'FuFu Shabu : Taiwanese Shabu (福福 ) พระราม 4',
					url: 'restaurants/fufushabu-rm',
					shortUrl: 'r/fufushabu-rm',
				},
				{
					id: 3968,
					eid: 'feiya',
					displayName: 'FEI YA โรงแรมเรเนซองส์ กรุงเทพฯ',
					url: 'restaurants/feiya',
					shortUrl: 'r/feiya',
				},
				{
					id: 120304,
					eid: 'thinkcafe',
					displayName: 'THINK CAFE เดอะบล๊อค ราชพฤกษ์',
					url: 'restaurants/thinkcafe',
					shortUrl: 'r/thinkcafe',
				},
				{
					id: 2597,
					eid: 'mitkoyuan',
					displayName: 'มิตรโกหย่วน',
					url: 'restaurants/mitkoyuan',
					shortUrl: 'r/mitkoyuan',
				},
				{
					id: 160539,
					eid: 'youandi-mb',
					displayName: 'You & I Premium Suki Buffet เมกา บางนา',
					url: 'restaurants/youandi-mb',
					shortUrl: 'r/youandi-mb',
				},
				{
					id: 270,
					publicId: '270Rq',
					displayName: 'แซ่บวัน รัชดา รัชดาภิเษก',
					url:
						'restaurants/270Rq-%E0%B9%81%E0%B8%8B%E0%B9%88%E0%B8%9A%E0%B8%A7%E0%B8%B1%E0%B8%99-%E0%B8%A3%E0%B8%B1%E0%B8%8A%E0%B8%94%E0%B8%B2-%E0%B8%A3%E0%B8%B1%E0%B8%8A%E0%B8%94%E0%B8%B2%E0%B8%A0%E0%B8%B4%E0%B9%80%E0%B8%A9%E0%B8%81',
					shortUrl: 'r/270Rq',
				},
				{
					id: 181414,
					eid: 'realichi',
					displayName: 'Realichi Yakiniku & Sushi เพชรบุรี',
					url: 'restaurants/realichi',
					shortUrl: 'r/realichi',
				},
				{
					id: 1667,
					publicId: '1667sR',
					displayName: 'ก๋วยจั๊บนายเอ็ก (Nai Ek Roll Noodle)',
					url:
						'restaurants/1667sR-%E0%B8%81%E0%B9%8B%E0%B8%A7%E0%B8%A2%E0%B8%88%E0%B8%B1%E0%B9%8A%E0%B8%9A%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B9%80%E0%B8%AD%E0%B9%87%E0%B8%81-nai-ek-roll-noodle',
					shortUrl: 'r/1667sR',
				},
				{
					id: 154872,
					eid: 'nabezo-ce',
					displayName: 'Nabezo Premium เซ็นทรัล แอมบาสซี่',
					url: 'restaurants/nabezo-ce',
					shortUrl: 'r/nabezo-ce',
				},
				{
					id: 98,
					eid: 'hanaya',
					displayName: 'Hanaya',
					url: 'restaurants/hanaya',
					shortUrl: 'r/hanaya',
				},
				{
					id: 121971,
					eid: 'seiryusushi-sld',
					displayName: 'Seiryu Sushi ศาลาแดง',
					url: 'restaurants/seiryusushi-sld',
					shortUrl: 'r/seiryusushi-sld',
				},
				{
					id: 180023,
					eid: 'oshathai',
					displayName: 'Royal Osha ร่วมฤดี',
					url: 'restaurants/oshathai',
					shortUrl: 'r/oshathai',
				},
				{
					id: 14055,
					eid: 'pho54-wanghin',
					displayName: 'เฝอ 54 (เฝอหม้อไฟเจ้าแรกในไทย) ลาดพร้าววังหิน',
					url: 'restaurants/pho54-wanghin',
					shortUrl: 'r/pho54-wanghin',
				},
				{
					id: 17338,
					eid: 'tonguefun-yotse',
					displayName: 'ไอติมหม้อไฟยศเส ซอยยศเส',
					url: 'restaurants/tonguefun-yotse',
					shortUrl: 'r/tonguefun-yotse',
				},
				{
					id: 2858,
					eid: 'isao',
					displayName: 'Isao',
					url: 'restaurants/isao',
					shortUrl: 'r/isao',
				},
				{
					id: 3522,
					eid: 'honmono-thonglor',
					displayName: 'HONMONO SUSHI ทองหล่อ 23',
					url: 'restaurants/honmono-thonglor',
					shortUrl: 'r/honmono-thonglor',
				},
				{
					id: 226680,
					eid: 'copper',
					displayName: 'Copper International Buffet',
					url: 'restaurants/copper',
					shortUrl: 'r/copper',
				},
				{
					id: 19861,
					eid: 'gyukaku-thaniya',
					displayName: 'Gyu Kaku Japanese BBQ Restaurant ธนิยะ',
					url: 'restaurants/gyukaku-thaniya',
					shortUrl: 'r/gyukaku-thaniya',
				},
				{
					id: 19635,
					publicId: '19635qC',
					displayName: 'อรุณวรรณ',
					url:
						'restaurants/19635qC-%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%93%E0%B8%A7%E0%B8%A3%E0%B8%A3%E0%B8%93',
					shortUrl: 'r/19635qC',
				},
				{
					id: 7644,
					publicId: '7644dC',
					displayName: 'Buttercup',
					url: 'restaurants/7644dC-buttercup',
					shortUrl: 'r/7644dC',
				},
				{
					id: 3132,
					eid: 'momoparadise-ctw',
					displayName: 'Mo-Mo-Paradise เซ็นทรัลเวิลด์',
					url: 'restaurants/momoparadise-ctw',
					shortUrl: 'r/momoparadise-ctw',
				},
				{
					id: 102,
					eid: 'indus',
					displayName: 'Indus',
					url: 'restaurants/indus',
					shortUrl: 'r/indus',
				},
				{
					id: 12272,
					eid: 'khundang',
					displayName: 'คุณแดงก๋วยจั๊บญวน ท่าพระอาทิตย์ - บางลำภู',
					url: 'restaurants/khundang',
					shortUrl: 'r/khundang',
				},
				{
					id: 2785,
					eid: 'bankara-skv39',
					displayName: 'Bankara Ramen สุขุมวิท 39',
					url: 'restaurants/bankara-skv39',
					shortUrl: 'r/bankara-skv39',
				},
				{
					id: 123371,
					eid: 'cocokup',
					displayName: "co-co-kup cafe'",
					url: 'restaurants/cocokup',
					shortUrl: 'r/cocokup',
				},
				{
					id: 12546,
					publicId: '12546tP',
					displayName: 'FLUFF Pancake Cafe สยามพารากอน',
					url: 'restaurants/12546tP-fluff-pancake-cafe-siam-paragon',
					shortUrl: 'r/12546tP',
				},
				{
					id: 223077,
					eid: 'sushimasato',
					displayName: 'Sushi Masato',
					url: 'restaurants/sushimasato',
					shortUrl: 'r/sushimasato',
				},
				{
					id: 162654,
					publicId: '162654Np',
					displayName: 'Cielo Sky Bar & Restaurant',
					url: 'restaurants/162654Np-cielo-sky-bar-restaurant',
					shortUrl: 'r/162654Np',
				},
				{
					id: 297987,
					publicId: '297987Cb',
					displayName: 'สวนผัก โอ้กะจู๋ Siam Square One',
					url:
						'restaurants/297987Cb-%E0%B8%AA%E0%B8%A7%E0%B8%99%E0%B8%9C%E0%B8%B1%E0%B8%81-%E0%B9%82%E0%B8%AD%E0%B9%89%E0%B8%81%E0%B8%B0%E0%B8%88%E0%B8%B9%E0%B9%8B-siam-square-one',
					shortUrl: 'r/297987Cb',
				},
				{
					id: 340894,
					publicId: '340894da',
					displayName: 'Hotto Bun สามย่าน จุฬาซอย11',
					url:
						'restaurants/340894da-hotto-bun-%E0%B8%AA%E0%B8%B2%E0%B8%A1%E0%B8%A2%E0%B9%88%E0%B8%B2%E0%B8%99-%E0%B8%88%E0%B8%B8%E0%B8%AC%E0%B8%B2%E0%B8%8B%E0%B8%AD%E0%B8%A211',
					shortUrl: 'r/340894da',
				},
				{
					id: 176131,
					publicId: '176131vy',
					displayName: "B-story Cafe'",
					url: 'restaurants/176131vy-b-story-cafe',
					shortUrl: 'r/176131vy',
				},
				{
					id: 175563,
					eid: 'nhongrimklong',
					displayName: 'หน่องริมคลอง',
					url: 'restaurants/nhongrimklong',
					shortUrl: 'r/nhongrimklong',
				},
				{
					id: 4455,
					eid: 'kinjookinawa',
					displayName: 'Okinawa Kinjo Japanese Restaurant',
					url: 'restaurants/kinjookinawa',
					shortUrl: 'r/kinjookinawa',
				},
				{
					id: 2799,
					eid: 'suanpaknam',
					displayName: 'สวนผักน้ำ',
					url: 'restaurants/suanpaknam',
					shortUrl: 'r/suanpaknam',
				},
				{
					id: 120530,
					publicId: '120530de',
					displayName: 'Gold Curry Bangkok สีลม',
					url: 'restaurants/120530de-gold-curry-bangkok-silom',
					shortUrl: 'r/120530de',
				},
				{
					id: 2459,
					eid: 'baanyay',
					displayName: 'บ้านยาย',
					url: 'restaurants/baanyay',
					shortUrl: 'r/baanyay',
				},
				{
					id: 4883,
					eid: 'the-raintree-cafe',
					displayName: 'The Rain Tree Cafe ดิ แอทธินี โฮเทล แบงค็อก',
					url: 'restaurants/the-raintree-cafe',
					shortUrl: 'r/the-raintree-cafe',
				},
				{
					id: 419,
					publicId: '419pE',
					displayName: 'ฮั่วเซ่งฮง เจริญกรุง 14',
					url:
						'restaurants/419pE-%E0%B8%AE%E0%B8%B1%E0%B9%88%E0%B8%A7%E0%B9%80%E0%B8%8B%E0%B9%88%E0%B8%87%E0%B8%AE%E0%B8%87-%E0%B9%80%E0%B8%88%E0%B8%A3%E0%B8%B4%E0%B8%8D%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B8%87-14',
					shortUrl: 'r/419pE',
				},
				{
					id: 7,
					eid: 'sirocco',
					displayName: 'Sirocco โรงแรมเลอบัว แอท สเตท ทาวเวอร์',
					url: 'restaurants/sirocco',
					shortUrl: 'r/sirocco',
				},
				{
					id: 226456,
					eid: 'yasuda',
					displayName: 'Yasuda',
					url: 'restaurants/yasuda',
					shortUrl: 'r/yasuda',
				},
				{
					id: 12556,
					eid: 'jae-auan-steem-rice',
					displayName: 'ข้าวมันไก่ เจ๊อ้วน',
					url: 'restaurants/jae-auan-steem-rice',
					shortUrl: 'r/jae-auan-steem-rice',
				},
				{
					id: 227018,
					eid: 'ekkamaimacchiato',
					displayName: 'Ekkamai Macchiato - Home Brewer',
					url: 'restaurants/ekkamaimacchiato',
					shortUrl: 'r/ekkamaimacchiato',
				},
				{
					id: 216206,
					publicId: '216206bI',
					displayName: 'hotto bun ท่ามหาราช',
					url:
						'restaurants/216206bI-hotto-bun-%E0%B8%97%E0%B9%88%E0%B8%B2%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A3%E0%B8%B2%E0%B8%8A',
					shortUrl: 'r/216206bI',
				},
				{
					id: 10567,
					eid: 'plewnakhonpathom-prb',
					displayName: 'เปลว นครปฐม ก๋วยเตี๋ยวต้มยำโบราณ ห้วยขวาง',
					url: 'restaurants/plewnakhonpathom-prb',
					shortUrl: 'r/plewnakhonpathom-prb',
				},
				{
					id: 154151,
					publicId: '154151tu',
					displayName: 'Chim by Siam Wisdom',
					url: 'restaurants/154151tu-chim-by-siam-wisdom',
					shortUrl: 'r/154151tu',
				},
				{
					id: 145119,
					eid: 'riverwine',
					displayName: 'RIVER WINE Restaurant and wine bar สาขาปากเกร็ด',
					url: 'restaurants/riverwine',
					shortUrl: 'r/riverwine',
				},
				{
					id: 176294,
					eid: 'veganerie',
					displayName: 'Veganerie เมอร์คิวรี่ วิว ชิดลม',
					url: 'restaurants/veganerie',
					shortUrl: 'r/veganerie',
				},
				{
					id: 9149,
					eid: 'joushitsu',
					displayName: 'Joushitsu Sushi',
					url: 'restaurants/joushitsu',
					shortUrl: 'r/joushitsu',
				},
				{
					id: 178356,
					publicId: '178356pT',
					displayName: 'Hidden Backyard Café & Hang Out',
					url: 'restaurants/178356pT-hidden-backyard-caf%C3%A9-hang-out',
					shortUrl: 'r/178356pT',
				},
				{
					id: 3569,
					publicId: '3569NH',
					displayName: 'เจ๊ไฝ ประตูผี',
					url:
						'restaurants/3569NH-%E0%B9%80%E0%B8%88%E0%B9%8A%E0%B9%84%E0%B8%9D-%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%95%E0%B8%B9%E0%B8%9C%E0%B8%B5',
					shortUrl: 'r/3569NH',
				},
				{
					id: 73422,
					eid: 'siangki',
					displayName: 'เซี่ยงกี่ข้าวต้มปลา',
					url: 'restaurants/siangki',
					shortUrl: 'r/siangki',
				},
				{
					id: 63,
					publicId: '63MX',
					displayName: 'Blue Elephant สาทรใต้',
					url:
						'restaurants/63MX-blue-elephant-%E0%B8%AA%E0%B8%B2%E0%B8%97%E0%B8%A3%E0%B9%83%E0%B8%95%E0%B9%89',
					shortUrl: 'r/63MX',
				},
				{
					id: 11361,
					eid: 'sawangarunbeef',
					displayName: 'ก๋วยเตี๋ยวเนื้อ สว่างอรุณ',
					url: 'restaurants/sawangarunbeef',
					shortUrl: 'r/sawangarunbeef',
				},
			],
			p: 1,
			te: 160323,
			_q: {
				url: 'https://www.wongnai.com/businesses?regions=9681&page.size=100',
				path: 'businesses',
				params: [
					{
						name: 'regions',
						value: '9681',
						description: 'กรุงเทพและปริมณฑล',
					},
					{
						name: 'page.size',
						value: '100',
					},
				],
			},
			next: 2,
			last: 1604,
		},
		key: {
			params: '[{"regions":9681,"page.size":100,"forseo":true}]',
		},
		error: null,
	},
	topic: {
		isFetching: false,
		value: null,
		key: null,
		error: null,
	},
	businessMenuPhotosPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	page: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	articlesMainTags: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	contactPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	conversationMessages: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	suggestions: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	businessPromotions: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	promotions: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	foodCategoryGroups: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	campaign: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	errorDialog: {
		message: null,
		isOpen: false,
	},
	branches: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	userReviews: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	contactFormStep: {
		step: 'DOMAIN_SELECTION',
	},
	topicComment: {
		isFetching: false,
		value: null,
		key: null,
		error: null,
	},
	hotelCategories: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	placeLanding: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	appRedirectModal: {},
	welcomeSections: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	chainPhotosPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	following: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	randomAdvertisements: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	userCheckins: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	termsOfServiceContentPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	sharingModal: {
		isOpen: false,
	},
	tripArticlesPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessMenuItemsPhotosPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessOtherPhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	photoBusiness: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	scb: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	cu: null,
	securityPolicy: {
		isFetching: false,
		value: null,
		key: null,
		error: null,
	},
	browsePane: {
		selectedBrowseCategoryIndex: 0,
		selectedBrowseItemIndex: null,
	},
	deliveryPromoModal: false,
	photo: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	forums: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	foodWelcomeSections: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	goodVibe: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	errorNoticeBar: {
		message: null,
		isOpen: false,
	},
	highlightDeals: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	bookmarkRemoveModal: {
		use: false,
	},
	navigationMenu: {
		isOpen: false,
	},
	userHowTos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	articleBusinessesPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	recommendedTrips: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	recipeCommentConfirmDeleteModal: {
		isOpen: false,
	},
	writeReviewOrPhotoPhotoModal: {
		isOpen: false,
	},
	businessTripPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessEditorialReviews: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	adminBusinessFormSchema: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	responsive: {
		phone: false,
		tablet: false,
		mobile: false,
		desktop: true,
		fakeWidth: 1200,
	},
	cookingRecipeGuide: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	beautyWelcomeSections: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessEmployeesPage: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	recipeHomeworks: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	followers: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	disableScrollRequestCount: 0,
	businessSearchResultRecommendations: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	youtubeVideoModal: {
		isOpen: false,
		video: null,
	},
	cookingSuggestions: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	recipeIsLiked: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	myBusinessPhotoPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	submitHomeworkCampaignModal: {
		isOpen: false,
	},
	userStatisticEvent: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessRatingMe: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	meOrder: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	dealsPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	cookingWelcomeSections: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	foodTips: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	article: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	tagCategories: {
		byId: {},
		all: [],
	},
	termsOfServiceModal: {
		isOpen: false,
		signUpForm: {},
		loginForm: {},
	},
	searchResultBusinessMap: {
		isOpen: false,
	},
	usersPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	nearbyRestaurants: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	browseItemsModal: {
		isOpen: false,
	},
	enfagrow: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	categoryFilterModal: {
		isOpen: false,
	},
	districtNeighborhoods: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	celebChefsSeo: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	writeReviewSchema: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	evoucherPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	me: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessFoodOrDrinkPhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	guest: {},
	userActivities: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	recipeData: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	facebookVideoModal: {
		isOpen: false,
		video: null,
	},
	userHomeworks: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessVideos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	review: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	videos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessRatingMeModal: {
		isOpen: false,
	},
	beautyCategories: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	recipeHomeworkSubmittedNoticeModal: {
		isOpen: false,
		homeworkId: null,
	},
	tags: {
		byId: {},
		byCategoryId: {},
	},
	bodyAttributes: {},
	evouchersPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	listingsContentPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessExtended: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	tripComments: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	businessReviewPhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	userInfo: {},
	recommendedListingsPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessDiningPhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	saveBookmarkModal: {
		isOpen: false,
	},
	userAgent:
		'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.88 Safari/537.36',
	userRecipes: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessThemeCards: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	businessRecommendations: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessReviews: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	tripSummarySidebar: {
		isOpen: false,
	},
	mainFacilitiesFilterModal: {
		isOpen: false,
	},
	citySelectorDropdown: {
		isOpen: false,
	},
	cookingUserGameScore: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	deliveryPromo: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	emailPasswordLoginModal: {
		isOpen: false,
		varaint: '',
		accessToken: '',
	},
	businessFilterForm: {},
	recommendedUsersPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessRoomPhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	dealCampaign: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	recipeSeeMoreLikeModal: {
		isOpen: false,
	},
	categories: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	meOrderMethods: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	knownRegions: {
		isFetching: false,
		value: null,
		key: null,
		error: null,
	},
	bussinessUsersChoice: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	aboutPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessMapPhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	loadingSpinner: {
		count: 0,
		message: null,
	},
	businessBookmarks: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	businessArticles: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	voucherPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	userDrafts: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	mainDealsPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	cookingSuggestionsPane: {
		isOpen: false,
	},
	recipeHomework: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	fetchDataErrorType: null,
	businessServices: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	businessTicketPricePhotos: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	nearbyHotels: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	editorialRecipes: {
		page: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
		seo: {
			isFetching: false,
			value: {},
			key: null,
			error: null,
		},
	},
	chainBusinessesPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	listingsPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	recipeCommentEditor: {
		isOpen: false,
		commentId: null,
	},
	businessesPlaceLanding: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	collection: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	hotelPrices: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	submitMessageModal: {
		isOpen: false,
		error: {},
	},
	photoBusinessAds: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	dealImageModal: {
		isOpen: false,
		images: [],
		imageIndex: 0,
	},
	businessMenu: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	conversationsPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	challengesPage: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
	cookingWelcomeSeoKeywords: {
		isFetching: false,
		value: [],
		key: null,
		error: null,
	},
	regions: {
		isFetching: false,
		value: {},
		key: null,
		error: null,
	},
}