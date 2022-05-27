import React from 'react';

const Faq = () => {
    return (
        <div className='my-5'>
            <div className='text-center'>
                <h1>FAQ</h1>
            </div>
            <div className='my-5'>
                <Accordion>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>What is your return policy?</Accordion.Header>
                        <Accordion.Body>
                            We allows return within 15 days. But if you ruin the product then we can not allow ant return.
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Is your product harmful to the environment?</Accordion.Header>
                        <Accordion.Body>
                            Our products are not harmful to the environment. Our products are also any kind of cruelty free.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default Faq;