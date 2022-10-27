import Profile from './userInfo/user';
import user from './userInfo/user.json';
 
import Statistics from './statistics/statistics';
import statisticalData from './statistics/data.json';
import FriendList from './friends/friends';
import friends from './friends/friends.json';
import TransactionHistory from './transactions/transactions';
import transactions from './transactions/transactions.json';

  function RenderInPage() {
  return (
    <div className="App">
    <Profile
        name={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
 <Statistics title="Upload stats" stats={statisticalData} />
      <Statistics stats={statisticalData} />
     <FriendList friends={friends} />
 <TransactionHistory items={transactions} />
    </div>
  );
}
export default RenderInPage;
 
