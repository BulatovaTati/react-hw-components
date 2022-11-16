import { Profile } from './userInfo/profile';
import user from './userInfo/user.json';
import { Statistics } from './statistics/statistics';
import statisticalData from './statistics/data.json';

import { FriendList } from './friends/friendsList';
import friends from './friends/friends.json';

import { TransactionHistory } from './transactions/transactionHistory';
import transactions from './transactions/transactions.json';

export const App = () => {
  return (
    <div className="App">
      <Profile
        username={user.username}
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
};
