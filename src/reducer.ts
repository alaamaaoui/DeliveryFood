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
    dishes : [{
        image: 'https://v2.tailwindcss.com/_next/static/media/jucy-beef-burger.346917d5ccb0b705233bb1665ffb63f6.jpg',
        name: 'Hank’s Juiciest Beef dishes',
        description: 'This is a description of Hank’s Juiciest Beef Burger',
        price: 12.3
    },
    {
        image: 'https://v2.tailwindcss.com/_next/static/media/healthy-beef-burger.d12b4138bb3a7311520a6b01ff4d749e.jpg',
        name: 'Lily’s Healthy Beef dishes',
        description: 'This is a description of Lily’s Healthy Beef Burger',
        price: 17.5
    },
    {
        image: 'https://v2.tailwindcss.com/_next/static/media/chicken-sandwich.8073c172870d9f66de9e2065797d611b.jpg',
        name: 'Southern Fried Chicken dishes',
        description: 'This is a description of Southern Fried Chicken Sandwich',
        price: 15.0
    }],
    sandwiches : [{
        image: 'https://v2.tailwindcss.com/_next/static/media/jucy-beef-burger.346917d5ccb0b705233bb1665ffb63f6.jpg',
        name: 'Hank’s Juiciest Beef Burger',
        description: 'This is a description of Hank’s Juiciest Beef Burger',
        price: 12.3
    },
    {
        image: 'https://v2.tailwindcss.com/_next/static/media/healthy-beef-burger.d12b4138bb3a7311520a6b01ff4d749e.jpg',
        name: 'Lily’s Healthy Beef Burger',
        description: 'This is a description of Lily’s Healthy Beef Burger',
        price: 17.5
    },
    {
        image: 'https://v2.tailwindcss.com/_next/static/media/chicken-sandwich.8073c172870d9f66de9e2065797d611b.jpg',
        name: 'Southern Fried Chicken Sandwich',
        description: 'This is a description of Southern Fried Chicken Sandwich',
        price: 15.0
    }],
    cakes : [{
        image: 'https://v2.tailwindcss.com/_next/static/media/jucy-beef-burger.346917d5ccb0b705233bb1665ffb63f6.jpg',
        name: 'Hank’s Juiciest Beef cakes',
        description: 'This is a description of Hank’s Juiciest Beef Burger',
        price: 12.3
    },
    {
        image: 'https://v2.tailwindcss.com/_next/static/media/healthy-beef-burger.d12b4138bb3a7311520a6b01ff4d749e.jpg',
        name: 'Lily’s Healthy Beef cakes',
        description: 'This is a description of Lily’s Healthy Beef Burger',
        price: 17.5
    },
    {
        image: 'https://v2.tailwindcss.com/_next/static/media/chicken-sandwich.8073c172870d9f66de9e2065797d611b.jpg',
        name: 'Southern Fried Chicken cakes',
        description: 'This is a description of Southern Fried Chicken Sandwich',
        price: 15.0
    }],
    orders : [{
        date: '23/09/2022',
        id: 1,
        name: 'Alaa Maaoui',
        adress: 'Avenue Habib Bourguiba, Menzel Jemil, Bizerte',
        phone: '52 142 028',
        email: 'alaa@gmail.com',
        price: 10,
        status: 'valid',
        menus: [{
            name: 'Hank’s Juiciest Beef dishes',
            price: 12.3,
            quantity: 2,
            description: 'This is a description of Hank’s Juiciest Beef dishes',
        },
        {
            name: 'Hank’s Juiciest Beef Burger',
            price: 12.3,
            quantity: 5,
            description: 'This is a description of Hank’s Juiciest Beef Burger',
        }],
    }],
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
            console.log(state.orders.filter((order) => order.status === 'in_progress')[0].date)
            state.orders.filter((order) => order.status === 'in_progress')[0].name = action.payload[0].current.value
            state.orders.filter((order) => order.status === 'in_progress')[0].adress = action.payload[1].current.value
            state.orders.filter((order) => order.status === 'in_progress')[0].phone = action.payload[2].current.value
            state.orders.filter((order) => order.status === 'in_progress')[0].email = action.payload[3].current.value
            state.orders.filter((order) => order.status === 'in_progress')[0].date = new Date().toLocaleString()
            state.orders.filter((order) => order.status === 'in_progress')[0].status = 'valid'
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