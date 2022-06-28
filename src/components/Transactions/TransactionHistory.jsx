import PropTypes from 'prop-types';
import {
  Table,
  Head,
  HeadRow,
  Row,
  HeadItem,
  Item,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
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
        {items.map(({ id, type, amount, currency }, index) => (
          <Row key={id} index={index}>
            <Item>{type}</Item>
            <Item>{amount}</Item>
            <Item>{currency}</Item>
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

// export default TransactionHistory;
