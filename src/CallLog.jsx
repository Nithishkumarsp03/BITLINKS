import React from 'react';
import './CallLog.css';

function CallLog({ call }) {
  return (
    <div className={`call-log ${call.type === 'Missed Call' ? 'missed-call' : 'received-call'}`}>
      <div className="call-log-icon">
        {call.type === 'Call' ? (
          <span role="img" aria-label="call">📞</span>
        ) : (
          <span role="img" aria-label="missed call">📵</span>
        )}
      </div>
      <div className="call-log-details">
        <div className="call-log-date">
          <strong>{call.type}:</strong> {call.date} - {call.time}
        </div>
        <div className="call-log-message">{call.message}</div>
        {call.user && <div className="call-log-user">{call.user}</div>}
      </div>
    </div>
  );
}

export default CallLog;
