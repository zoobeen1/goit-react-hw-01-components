import Profile from './Profile/Profile.jsx';
import user from 'data/user.json';
import Statistics from './Statistics/Statistics.jsx';
import data from 'data/data.json';
import FriendList from './Friendlist/FriendList.jsx';
import friends from 'data/friends.json';
import TransactionHistory from './Transactions/TransactionHistory.jsx';
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
