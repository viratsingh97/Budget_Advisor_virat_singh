import React, { useState } from 'react';

function Header({ currentPage, onPageChange }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="main-header">

            {/* Top bar with menu icon + BudgetWise text */}
            <div className="top-bar">
                <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
                    ☰
                </div>
                <h1 className="logo">BudgetWise</h1>
            </div>

            {/* Sliding Sidebar */}
            <nav className={`sidebar ${isOpen ? 'open' : ''}`}>
                <ul className="nav-menu">
                    <li className={currentPage === 'Dashboard' ? 'active' : ''}>
                        <a onClick={() => onPageChange('Dashboard')}>Dashboard</a>
                    </li>
                    <li className={currentPage === 'Transaction' ? 'active' : ''}>
                        <a onClick={() => onPageChange('Transaction')}>Transactions</a>
                    </li>
                    <li className={currentPage === 'Budget' ? 'active' : ''}>
                        <a onClick={() => onPageChange('Budget')}>Budget</a>
                    </li>
                    <li className={currentPage === 'Profile' ? 'active' : ''}>
                        <a onClick={() => onPageChange('Profile')}>Profile</a>
                    </li>
                </ul>
            </nav>

        </header>
    );
}

export default Header;
