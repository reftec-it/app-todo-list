import React, { useState } from 'react'
import Active from './tabs/Active';
import Completed from './tabs/Completed';

const tabs = {
  active: Active,
  completed: Completed,
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
            className={
              `px-4 py-2 capitalize transition-colors
              ${activeTab === tab ? "border-b-2 border-white text-white font-medium" : "text-white/50"}`
            }>
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
