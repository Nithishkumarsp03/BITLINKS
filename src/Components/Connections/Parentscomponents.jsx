import React, { useState } from 'react';
import ScheduleNetwork from './ScheduleNetwork';
import Networks from './Networks';
import './styles.css';

function ParentComponent() {
  const [view, setView] = useState(false);

  const handleViewToggle = (newView) => {
    setView(newView);
  };

  return (
    <div>
      <ScheduleNetwork onViewToggle={handleViewToggle} />
      <Networks view={view} />
    </div>
  );
}

export default ParentComponent;
