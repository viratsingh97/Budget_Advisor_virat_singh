import React, { useState } from 'react';

function Header({ currentPage, onPageChange }) {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    return (
        <>
            {/* HEADER SECTION */}
            <header className="main-header">
                <div className="header-nav-container">
                    <h1 className="header-title">BudgetWise</h1>

                    {/* Hamburger Button */}
                    <button className="menu-btn" onClick={() => setSidebarOpen(true)}>
                        ☰
                    </button>
                </div>
            </header>

            {/* SIDEBAR SECTION */}
            <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
                
                {/* Close Button */}
                <button className="close-btn" onClick={() => setSidebarOpen(false)}>
                    ×
                </button>

                <ul className="sidebar-menu">

                    <li 
                        className={currentPage === 'Dashboard' ? 'active' : ''} 
                        onClick={() => { onPageChange('Dashboard'); setSidebarOpen(false); }}
                    >
                        Dashboard
                    </li>

                    <li 
                        className={currentPage === 'Transaction' ? 'active' : ''} 
                        onClick={() => { onPageChange('Transaction'); setSidebarOpen(false); }}
                    >
                        Transactions
                    </li>

                    <li 
                        className={currentPage === 'Budget' ? 'active' : ''} 
                        onClick={() => { onPageChange('Budget'); setSidebarOpen(false); }}
                    >
                        Budget
                    </li>

                    <li 
                        className={currentPage === 'Profile' ? 'active' : ''} 
                        onClick={() => { onPageChange('Profile'); setSidebarOpen(false); }}
                    >
                        Profile
                    </li>

                </ul>
            </div>
        </>
    );
}

export default Header;
