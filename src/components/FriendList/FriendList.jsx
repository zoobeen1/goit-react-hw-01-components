import PropTypes from 'prop-types';
import { StyledFriendList } from './FriendList.styled';
import FriendListItem from './FriendListItem';
function FriendList({ friends }) {
  return (
    <StyledFriendList>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </StyledFriendList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
export default FriendList;
