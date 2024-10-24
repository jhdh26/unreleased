import './ItemList.css';

const ItemList = (props) => {
    return(
        <li className='item-list'>
            <span className='item-list-id'>{props.id}</span>
            <span className='item-list-name'>{props.name}</span>
            <span className='item-list-icons'>
                <span onClick={props.onFirstIconClick}>
                    {props.firstIcon}
                </span>
                <span onClick={props.onSecondIconClick}>
                    {props.secondIcon}
                </span>
                {props.thirdIcon}
            </span>
        </li>
    );
}

export default ItemList;
