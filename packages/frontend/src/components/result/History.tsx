import { FC } from 'react';

export const History: FC = () => {
  return (
    <nav className="toc__nav">
      <span className="uppercase text-gray-600 font-bold text-xs">History</span>
      <ul>
        <li className="active">
          <ul>
            <li>
              <a>TODO: Calculator History</a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};
