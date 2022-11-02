import PropTypes from 'prop-types';
import { Table, Thead, Th, Td, Tr } from './transactions.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <Thead>
        <tr>
          <Th>TYPE</Th>
          <Th>AMOUNT</Th>
          <Th>CURRENCY</Th>
        </tr>
      </Thead>
      <tbody>
        {items.map(({ type, amount, currency, id }) => (
          <Tr key={id}>
            <Td>{upperCaseFirstLetter(type)}</Td>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
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

function upperCaseFirstLetter(string) {
  let newStr = string[0].toUpperCase() + string.slice(1);
  return newStr;
}
