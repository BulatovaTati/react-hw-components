import styles from './transactions.module.css';
import PropTypes from 'prop-types';

function upperFirstLetter(string) {
  let newStr = string[0].toUpperCase() + string.slice(1);
  return newStr;
}
export const TransactionHistory = ({ items }) => {
  return (
    <div className={styles.transTable}>
      <table className="transaction-history">
        <thead className={styles.table}>
          <tr>
            <th>TYPE</th>
            <th>AMOUNT</th>
            <th>CURRENCY</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {items.map(({type, amount, currency, id}) => (
            <tr key={id}>
              <td className={styles.tableData}>{upperFirstLetter(type)}</td>
              <td className={styles.tableData}>{amount}</td>
              <td className={styles.tableData}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.array,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
  id: PropTypes.number,
};
 