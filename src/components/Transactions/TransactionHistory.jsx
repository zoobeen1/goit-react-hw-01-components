import PropTypes from 'prop-types';
import {
  Table,
  Head,
  HeadRow,
  Row,
  HeadItem,
  Item,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <Table>
      <Head>
        <HeadRow>
          <HeadItem>Type</HeadItem>
          <HeadItem>Amount</HeadItem>
          <HeadItem>Currency</HeadItem>
        </HeadRow>
      </Head>
      <tbody>
        {items.map((item, index) => (
          <Row key={item.id} index={index}>
            <Item>{item.type}</Item>
            <Item>{item.amount}</Item>
            <Item>{item.currency}</Item>
          </Row>
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
