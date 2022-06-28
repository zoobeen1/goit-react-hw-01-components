import PropTypes from 'prop-types';
import { Table, Thead, HeadTr, Tr, Th, Td } from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <Thead>
        <HeadTr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </HeadTr>
      </Thead>
      <tbody>
        {items.map((item, index) => (
          <Tr key={item.id} index={index}>
            <Td>{item.type}</Td>
            <Td>{item.amount}</Td>
            <Td>{item.currency}</Td>
          </Tr>
        ))}
      </tbody>
    </Table>
  );
}
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TransactionHistory;
