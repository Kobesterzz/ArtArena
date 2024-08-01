import React from 'react';
import './AccountList.css';

function AccountList({ accounts, onSelectAccount }) {
  return (
    <div className="account-list">
      
      {accounts.map(account => (
        <div
          key={account.id}
          className="account-item"
          onClick={() => onSelectAccount(account.id)}
        >
          {account.name}
        </div>
      ))}
    </div>
  );
}

export default AccountList;
