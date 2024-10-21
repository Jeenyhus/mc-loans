"use client";

import React, { useState } from 'react';
import styles from '../styles/LoanForm.module.css';

const LoanForm: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        amount: '',
        term: '',
        email: ''
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        const response = await fetch('/api/loans', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
    
        const data = await response.json();
        console.log(data.message);
    };
    

    return (
        <form onSubmit={handleSubmit} className={styles['loan-form']}>
            <div>
                <label htmlFor="name">Full Name</label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="amount">Loan Amount</label>
                <input
                    type="number"
                    id="amount"
                    name="amount"
                    value={formData.amount}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="term">Loan Term (months)</label>
                <input
                    type="number"
                    id="term"
                    name="term"
                    value={formData.term}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <div>
                <label htmlFor="email">Email Address</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                />
            </div>

            <button type="submit">Apply for Loan</button>
        </form>
    );
};

export default LoanForm;
