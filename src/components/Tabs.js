import React, { useState } from 'react'
import active from './tabs/active';
import completed from './tabs/completed';

const tabs = {
  active: active,
  completed: completed,
};

export default function Tabs() {
  const [activeTab, setActiveTab] = useState('active');
  const ActiveComponent = tabs[activeTab];
  return (
    <>
      <section className='flex border-b'>
        {Object.keys(tabs).map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 capitalize ${activeTab === tab && "border-b-2 border-blue-500"}`}>
            {tab}
          </button>
        ))}
      </section>
      <section>
        <ActiveComponent />
      </section>
    </>
  )
}
