import React from 'react';
import {colors} from '../../theme/colors';

const TabBar = ({className, tabList, onClick}) => {
  const [activeTab, setActiveTab] = React.useState(0);
  return (
    <div>
      <ul className='gap-10 flex'>
        {tabList?.map((tab, index) => {
          return (
            // eslint-disable-next-line react/jsx-key
            <li>
              <button className={[' text-lg md:text-xl capitalize font-bold ',
                className]}
              style={{color: activeTab==index ? colors.primary :
                colors.grayDark}}
              onClick={() => {
                activeTab!=index && setActiveTab(index);
                onClick && onClick(index);
              }}>a
                {tab}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TabBar;
