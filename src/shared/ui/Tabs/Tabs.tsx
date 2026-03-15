import React, { useState, useId, useRef } from 'react';
import './Tabs.css';

export interface TabItem {
  key: string;
  label: React.ReactNode;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: TabItem[];
  defaultKey?: string;
  className?: string;
}

export function Tabs({ tabs, defaultKey, className = '' }: TabsProps) {
  const [activeKey, setActiveKey] = useState(defaultKey ?? tabs[0]?.key ?? '');
  const instanceId = useId().replace(/:/g, '');
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const activeTab = tabs.find((tab) => tab.key === activeKey);

  const handleKeyDown = (e: React.KeyboardEvent, index: number) => {
    let nextIndex: number | null = null;

    if (e.key === 'ArrowRight') {
      nextIndex = (index + 1) % tabs.length;
    } else if (e.key === 'ArrowLeft') {
      nextIndex = (index - 1 + tabs.length) % tabs.length;
    } else if (e.key === 'Home') {
      nextIndex = 0;
    } else if (e.key === 'End') {
      nextIndex = tabs.length - 1;
    }

    if (nextIndex !== null) {
      e.preventDefault();
      setActiveKey(tabs[nextIndex].key);
      tabRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <div className={`tabs ${className}`.trim()}>
      <div className="tabs__list" role="tablist">
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            ref={(el) => { tabRefs.current[index] = el; }}
            role="tab"
            aria-selected={tab.key === activeKey}
            aria-controls={`tabpanel-${instanceId}-${tab.key}`}
            id={`tab-${instanceId}-${tab.key}`}
            tabIndex={tab.key === activeKey ? 0 : -1}
            className={`tabs__tab ${tab.key === activeKey ? 'tabs__tab--active' : ''}`}
            onClick={() => setActiveKey(tab.key)}
            onKeyDown={(e) => handleKeyDown(e, index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div
        className="tabs__panel"
        role="tabpanel"
        id={`tabpanel-${instanceId}-${activeKey}`}
        aria-labelledby={`tab-${instanceId}-${activeKey}`}
      >
        {activeTab?.content}
      </div>
    </div>
  );
}
