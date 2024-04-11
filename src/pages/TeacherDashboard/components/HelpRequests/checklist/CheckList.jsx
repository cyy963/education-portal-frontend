import React, { useState } from 'react';
import styles from "./CheckList.module.css"

function Checklist() {
  // State to keep track of checked items
  const [checkedItems, setCheckedItems] = useState([]);

  // Handler function to toggle item's checked state
  const handleToggle = (item) => {
    if (checkedItems.includes(item)) {
      setCheckedItems(checkedItems.filter((checkedItem) => checkedItem !== item));
    } else {
      setCheckedItems([...checkedItems, item]);
    }
  };

  return (
    <div>
      <ul>
        <li className={styles.list}>
          <label className={styles.label}>
            <input className={styles.input} 
              type="checkbox" 
              checked={checkedItems.includes('item1')} 
              onChange={() => handleToggle('item1')} 
            />
          </label>
          
        </li>
        <li className={styles.list}>
          <label className={styles.label}>
            <input className={styles.input} 
              type="checkbox" 
              checked={checkedItems.includes('item2')} 
              onChange={() => handleToggle('item2')} 
            />
          </label>

        </li>
        <li className={styles.list}>
          <label className={styles.label}>
            <input className={styles.input}  
              type="checkbox" 
              checked={checkedItems.includes('item2')} 
              onChange={() => handleToggle('item2')} 
            />
          </label>

        </li>
        <li className={styles.list}>
          <label className={styles.label}>
            <input className={styles.input}  
              type="checkbox" 
              checked={checkedItems.includes('item2')} 
              onChange={() => handleToggle('item2')} 
            />
          </label>

        </li>
        <li className={styles.list}>
          <label className={styles.label}>
            <input className={styles.input}  
              type="checkbox" 
              checked={checkedItems.includes('item2')} 
              onChange={() => handleToggle('item2')} 
            />
          </label>
        </li>
      </ul>
    </div>
  );
}

export default Checklist;