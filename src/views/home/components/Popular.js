import React from 'react';
import { Button, Row, ButtonGroup } from 'reactstrap';

const Popular = () => {
    return (
        <div>
            <Row>
                <h3>What's popular</h3>
                <ButtonGroup size="sm">
                    <Button>Streaming</Button>
                    <Button>On Tv</Button>
                </ButtonGroup>
            </Row>
        </div>
    )
}

export default Popular;