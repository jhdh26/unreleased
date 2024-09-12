import './ItemList.css'

const ItemList = (props) => {
    return(
        <li className='item-list'>
            <span className='item-list-id'>{props.id}</span>
            <span className='item-list-name'>{props.name}</span>
            <span className='item-list-icons'>
                {props.firstIcon }
                {props.secondIcon}
                {props.thirtyIcon}
            </span>
        </li>
    )
}

export default ItemList