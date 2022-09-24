import dishes from './shared/InitialState/dishes'
import sandwiches from './shared/InitialState/sandwiches'
import cakes from './shared/InitialState/cakes'

export interface StateProps {
    dishes: any[],
    sandwiches: any[],
    cakes: any[],
    orders: any[],
    items: string,
    active_url: string,
    active_tab: string,
}

const initialState = {
    dishes : dishes,
    sandwiches : sandwiches,
    cakes : cakes,
    orders : [],
    items: 'dishes',
    active_url: window.location.pathname,
    active_tab: 'dishes'
}

export const reducer = (state: StateProps = initialState, action: any) => {
    let price: number
    switch (action.type) {
        case "CREATE_ORDER":
            return { ...state, orders: [...state.orders, action.payload]}
        case "UPDATE_ORDER":
            state.orders.filter((order) => order.status === 'in_progress')[0].name = action.payload[0].current.value
            state.orders.filter((order) => order.status === 'in_progress')[0].adress = action.payload[1].current.value
            state.orders.filter((order) => order.status === 'in_progress')[0].phone = action.payload[2].current.value
            state.orders.filter((order) => order.status === 'in_progress')[0].email = action.payload[3].current.value
            state.orders.filter((order) => order.status === 'in_progress')[0].date = new Date().toLocaleString()
            state.orders.filter((order) => order.status === 'in_progress')[0].status = 'done'
            return { ...state, orders: [...state.orders]}
        case "ADD_ORDER":
            price = 0
            state.orders.filter((order) => order.status === 'in_progress')[0].menus.push(action.payload)
            state.orders.filter((order) => order.status === 'in_progress')[0].price = computePrice(state, price)
            return { ...state, orders: [...state.orders]}
        case "REMOVE_ORDER":
            state.orders.filter((order) => order.status === 'in_progress')[0].menus = state.orders.filter((order) => order.status === 'in_progress')[0].menus.filter((menu: any) => menu.name !== action.payload)
            price = 0
            state.orders.filter((order) => order.status === 'in_progress')[0].price = computePrice(state, price)
            return { ...state, orders: [...state.orders]}
        case "DECREMENT_ORDER":
            if(state.orders.filter((order) => order.status === 'in_progress')[0].menus.filter((menu: any) => menu.name === action.payload)[0].quantity > 1)
                state.orders.filter((order) => order.status === 'in_progress')[0].menus.filter((menu: any) => menu.name === action.payload)[0].quantity --
            price = 0
            state.orders.filter((order) => order.status === 'in_progress')[0].price = computePrice(state, price)
            return { ...state, orders: [...state.orders]}
        case "INCREMENT_ORDER":
            state.orders.filter((order) => order.status === 'in_progress')[0].menus.filter((menu: any) => menu.name === action.payload)[0].quantity ++
            price = 0
            state.orders.filter((order) => order.status === 'in_progress')[0].price = computePrice(state, price)
            return { ...state, orders: [...state.orders]}
        case "SWITCH_MENU":
            return { ...state, active_url: action.payload}
        case "SWITCH_TAB":
            return { ...state, items: action.payload, active_tab: action.payload}
        default:
            return state
    }
}

const computePrice = (state: any, price = 0) => {
    state.orders.filter((order: any) => order.status === 'in_progress')[0].menus.map((menu: any) => (
        price += menu.price*menu.quantity
    ))
    return price
}