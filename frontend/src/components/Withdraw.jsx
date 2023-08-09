import React, { useState } from 'react';
import '../styles/withdraw.css';

const WithdrawForm = () => {
    const [tokenAddress, setTokenAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [responseMessage, setResponseMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const response = await fetch('http://localhost:8086/api/ethers/withdraw-token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ tokenAddress, amount }),
            });

            const data = await response.json();
            console.log("response data =>", data);
            setIsLoading(false);

            if (response.status === 200) {
                setResponseMessage(data.txHash);
            }
            //  else {
            //     setResponseMessage('Error: ' + data.message);
            // }
        } catch (error) {
            setIsLoading(false);
            setResponseMessage('Error: Something went wrong.');
            console.error('Error executing API request:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="tokenAddress">Token Address:</label>
                <input
                    type="text"
                    id="tokenAddress"
                    value={tokenAddress}
                    onChange={(e) => setTokenAddress(e.target.value)}
                    required
                />
            </div>
            <div>
                <label htmlFor="amount">Amount:</label>
                <input
                    type="number"
                    id="amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                    required
                />
            </div>
            <button type="submit" disabled={isLoading}>
                {isLoading ? 'Loading...' : 'Withdraw Token'}
            </button>
            {responseMessage && <div className="response-message">{responseMessage}</div>}
        </form>
    );
};

export default WithdrawForm;
