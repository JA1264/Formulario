import '../../assets/styles/FlexItem.css'

function FlexItem({itemId}) {
    return ( 
        <div className='flex-container_child'>
            {itemId}
        </div>
     );
}

export default FlexItem;