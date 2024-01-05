
export const ItemReducer = (state = [], action) => {

    switch (action.type) {

        case 'AddProductCard':
            return[
                ...state,
                {
                    product: action.payload,
                    quantity: 1,    
                }
            ];
    
        case 'UpdateQuantityProductCard':
                return state.map((i) => {
                    if (i.product.id === action.payload.id) {
                        i.quantity = i.quantity + 1;
                    }
                    return i; 
                });
    
        case 'DeleteProductCard':
            return [
                ...state.filter((i) => i.product.id !== action.payload)
            ];
    
        default:
            return state;
    }

} 