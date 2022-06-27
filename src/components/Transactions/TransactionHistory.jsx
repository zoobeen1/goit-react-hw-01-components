import PropTypes from 'prop-types';
// import css from './TransactionHistory.module.css';
import {
  StyledTable,
  StyledThead,
  StyledHeadTr,
  StyledTr,
  StyledTh,
  StyledTd,
} from './TransactionHistory.styled';

function TransactionHistory({ items }) {
  return (
    <StyledTable>
      <StyledThead>
        <StyledHeadTr>
          <StyledTh>Type</StyledTh>
          <StyledTh>Amount</StyledTh>
          <StyledTh>Currency</StyledTh>
        </StyledHeadTr>
      </StyledThead>
      <tbody>
        {items.map((item, index) => (
          <StyledTr key={item.id} index={index}>
            <StyledTd>{item.type}</StyledTd>
            <StyledTd>{item.amount}</StyledTd>
            <StyledTd>{item.currency}</StyledTd>
          </StyledTr>
        ))}
      </tbody>
    </StyledTable>
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
