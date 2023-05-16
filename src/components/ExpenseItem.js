import './ExpenseItem.css'

function ExpenseItem() { 
    return (
        <div className='expense-item'>
            <div>Date</div>
            <div className='expenseitem__description'>
                <h2>Car Insurance</h2>
                <div className='expense-item__price'>Amount</div>
            </div>
        </div>
    );
}

export default ExpenseItem;