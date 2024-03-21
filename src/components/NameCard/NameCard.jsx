import React, { useState } from 'react';
import './NameCard.css';

const NameCard = ({ suggestedName }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedProvider, setSelectedProvider] = useState('Namecheap');

    const handleCardClick = () => {
        setIsOpen(!isOpen);
    };

    const handleProviderChange = (event) => {
        setSelectedProvider(event.target.value);
    };

    const providers = [
        { name: 'Namecheap', url: 'https://www.namecheap.com/domains/registration/results/?domain=' },
        { name: 'GoDaddy', url: 'https://www.godaddy.com/domainsearch/find?checkAvail=1&tmskey=&domainToCheck=' }
    ];

    const providerOptions = providers.map((provider, index) => (
        <option key={index} value={provider.name}>
            {provider.name}
        </option>
    ));

    const handleProceed = () => {
        const selectedUrl = providers.find(provider => provider.name === selectedProvider).url;
        window.open(`${selectedUrl}${suggestedName}`, '_blank');
    };

    return (
        <div className="result-name-card">
            <div className="name-header" onClick={handleCardClick}>
                <p className="result-name">{suggestedName}</p>
            </div>
            {isOpen && (
                <div className="name-footer">
                    <div className="provider-dropdown">
                        <select value={selectedProvider} onChange={handleProviderChange}>
                            {providerOptions}
                        </select>
                    </div>
                    <button onClick={handleProceed}>Proceed</button>
                </div>
            )}
        </div>
    );
};

export default NameCard;
