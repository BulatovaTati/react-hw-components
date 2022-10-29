import styles from './transactions.module.css';
import PropTypes from 'prop-types';

function upperFirstLetter(string) {
  let newStr = string[0].toUpperCase() + string.slice(1);
  return newStr;
}
 export const TransactionHistory = ({ items }) => {
  return (
      <table className={styles.transactionHistory}>
        <thead className={styles.table}>
          <tr>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({type, amount, currency, id}) => (
            <tr key={id}>
              <td>{upperFirstLetter(type)}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};