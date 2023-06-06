import { statusList } from './constants';

export type ReccommendStatus = (typeof statusList)[number]

export interface Dish {
    name: string
    diet?: Diet
    status?: ReccommendStatus
}

type Diet = 'vegetarian' | 'gluten-free' | 'lactose-free'
