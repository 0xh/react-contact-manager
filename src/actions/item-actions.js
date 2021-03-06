import { client } from './';

const url = '/items';

export function fetchItems(){
    return dispatch => {
        dispatch({
            type: 'FETCH_ITEMS',
            payload: client.get(url)
        })
    }
}

export function newItem() {
    return dispatch => {
        dispatch({
            type: 'NEW_ITEM'
        })
    }
}

export function saveItem(item) {
    return dispatch => {
        const formData = new FormData();
        formData.append('name',item.name);
        formData.append("picture",item.picture);
        formData.append('price',item.price);
        return dispatch({
            type: 'SAVE_ITEM',
            payload: client.post(url, formData, {headers:{'Content-Type': 'multipart/form-data'}})
        })
    }
}

export function fetchItem(_id) {
    return dispatch => {
        return dispatch({
            type: 'FETCH_ITEM',
            payload: client.get(`${url}/${_id}`)
        })
    }
}

export function updateItem(item) {
    return dispatch => {
        return dispatch({
            type: 'UPDATE_ITEM',
            payload: client.put(`${url}/${item._id}`, item)
        })
    }
}

export function deleteItem(_id) {
    return dispatch => {
        return dispatch({
            type: 'DELETE_ITEM',
            payload: client.delete(`${url}/${_id}`)
        })
    }
}