import * as op from 'utils'

const accountBillingEmail = {
	data: {
		account: {
			id: 'starter-app',
			name: 'Starter',
			recurlyEmail: 'shadow_sun0708@hotmail.com',
			roles: { canQueryRecurlyInfo: true, __typename: 'AccountRoles' },
			requestsInCurrentBillingMonth: 0,
			synchronized: false,
			hasBeenOnTrial: false,
			currentSubscription: null,
			currentPlan: {
				id: 'sub-engine-cmm',
				isTrial: false,
				isUpgradeOption: false,
				name: 'Apollo Community',
				tier: 'COMMUNITY',
				capabilities: {
					maxRequestsPerMonth: 25000000,
					clients: false,
					metrics: true,
					__typename: 'BillingPlanCapabilities',
				},
				billingModel: 'SEAT_BASED',
				billingPeriod: 'MONTHLY',
				__typename: 'BillingPlan',
			},
			occupiedSeats: 1,
			__typename: 'Account',
		},
	},
}

const timeRangeProvider = {
	data: {
		service: {
			id: 'moment',
			account: {
				id: 'starter-app',
				currentPlan: {
					id: 'sub-engine-cmm',
					capabilities: {
						maxRangeInDays: 1,
						ranges: ['lastHour', 'lastDay'],
						__typename: 'BillingPlanCapabilities',
					},
					__typename: 'BillingPlan',
				},
				__typename: 'Account',
			},
			__typename: 'Service',
		},
	},
}

const erroredTracePaths = {
	data: {
		service: {
			id: 'moment',
			account: {
				id: 'starter-app',
				currentPlan: {
					id: 'sub-engine-cmm',
					capabilities: {
						traces: false,
						__typename: 'BillingPlanCapabilities',
					},
				},
			},
		},
	},
}

describe('index', () => {
	it('test', async () => {
		if (
			accountBillingEmail?.data?.account?.currentPlan?.capabilities?.clients ===
			false
		) {
			const newAccountBillingEmail = op.setIn(
				accountBillingEmail,
				['data', 'account', 'currentPlan', 'capabilities', 'clients'],
				true,
			)
		}

		if (timeRangeProvider?.data?.service?.account?.currentPlan?.capabilities) {
			const newTimeRangeProvider = op.setIn(
				timeRangeProvider,
				[
					'timeRangeProvider',
					'data',
					'service',
					'account',
					'currentPlan',
					'capabilities',
				],
				{
					maxRangeInDays: 99,
					ranges: ['lastHour', 'lastDay', 'custom'],
					__typename: 'BillingPlanCapabilities',
				},
			)
		}

		if (
			erroredTracePaths?.data?.service?.account?.currentPlan?.capabilities
				?.traces === false
		) {
			const newErroredTracePaths = op.setIn(
				erroredTracePaths,
				['data', 'service', 'account', 'currentPlan', 'capabilities', 'traces'],
				true,
			)
		}
	})
})
