import PropTypes from 'prop-types';
import {
  StyledItem,
  StyledStatus,
  StyledAvatar,
  StyledName,
} from './FriendList.styled';
function FriendListItem({ isOnline, avatar, name }) {
  return (
    <StyledItem>
      <StyledStatus
        style={{
          backgroundColor: isOnline ? 'red' : 'green',
        }}
      ></StyledStatus>
      <StyledAvatar src={avatar} alt={name} width="48" />
      <StyledName>{name}</StyledName>
    </StyledItem>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
