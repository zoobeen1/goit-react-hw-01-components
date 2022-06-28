import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendList.styled';
function FriendListItem({ isOnline, avatar, name }) {
  return (
    <Item>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </Item>
  );
}
FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
export default FriendListItem;
