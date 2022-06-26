import Profile from 'components/Profile/Profile.jsx';
import user from 'data/user.json';
import Statistics from 'components/Statistics/Statistics.jsx';
import data from 'data/data.json';
import FriendList from 'components/Friendlist/FriendList.jsx';
import friends from 'data/friends.json';
import TransactionHistory from 'components/Transactions/TransactionHistory.jsx';
import transactions from 'data/transactions.json';

export default function App() {
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}
