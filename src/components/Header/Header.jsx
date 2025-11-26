import React, { useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('All');

    const filterOptions = ['All', 'Recent', 'Popular', 'Trending', 'Archived'];

    const handleFilterSelect = (option) => {
        setSelectedFilter(option);
        setIsDropdownOpen(false);
    };

    return (
        <div className={styles.main}>
            

        </div>
       
    );
}