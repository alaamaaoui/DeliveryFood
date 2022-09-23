export type AddItemsAction = {
    type: "ADD_ITEMS",
    payload: any
}

export const addItems = (items: any) => {
    return {
        type: "ADD_ITEMS",
        payload: items
    }
}

export type CreateOrderAction = {
    type: "CREATE_ORDER",
    payload: any
}

export const createOrder = (order: any) => {
    return {
        type: "CREATE_ORDER",
        payload: order
    }
}

export type UpdateOrderAction = {
    type: "UPDATE_ORDER",
    payload: any
}

export const updateOrder = (order: any) => {
    return {
        type: "UPDATE_ORDER",
        payload: order
    }
}

export type AddOrderAction = {
    type: "ADD_ORDER",
    payload: any
}

export const addOrder = (menu: any) => {
    return {
        type: "ADD_ORDER",
        payload: menu
    }
}

export type RemoveOrderAction = {
    type: "REMOVE_ORDER",
    payload: any
}

export const removeOrder = (menu: any) => {
    return {
        type: "REMOVE_ORDER",
        payload: menu
    }
}

export type DecrementOrderAction = {
    type: "DECREMENT_ORDER",
    payload: any
}

export const decrementOrder = (menu: any) => {
    return {
        type: "DECREMENT_ORDER",
        payload: menu
    }
}

export type IncrementOrderAction = {
    type: "INCREMENT_ORDER",
    payload: any
}

export const incrementOrder = (menu: any) => {
    return {
        type: "INCREMENT_ORDER",
        payload: menu
    }
}