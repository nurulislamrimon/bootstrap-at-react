import React from 'react';
import { Button } from 'react-bootstrap';

const Trail = () => {
    return (
        <div>
            <Button variant="danger">Danger</Button> <Button variant="info">Info</Button>
            <Button variant="light">Light</Button> <Button variant="dark">Dark</Button>
            <Button variant="link">Link</Button>

        </div>
    );
};

export default Trail;