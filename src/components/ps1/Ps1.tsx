import React from 'react';
import config from '../../../config.json';

export const Ps1 = () => {
  return (
    <div>
      <span className="text-light-green dark:text-dark-green">
        {config.shell.name}
      </span>
      <span className="text-light-gray dark:text-dark-gray">
        {config.shell.symbol}{' '}
      </span>
    </div>
  );
};

export default Ps1;
