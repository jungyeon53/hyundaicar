import { Container, Button, Row, Col } from 'react-bootstrap';

function Inner() {
    return (
        <div className="bigimg">
        <Container>
            <Row>
                <Col sm={12} md={6}>
                    <div class="title">
                        <span className='shop'>#</span>
                        <span className='keyword'>현대자동차가 제안하는 <br /> 추천키워드를 확인하세요.</span>
                    </div>
                </Col>
                <Col sm={12} md={6} className='d-flex flex-wrap gap-2'>
                <Button variant="outline-secondary" size="lg" className='btn01 rounded-pill'>#실시간인기</Button>
                <Button variant="outline-secondary" size="lg" className='btn01 rounded-pill'>#현대추천</Button>
                <Button variant="outline-secondary" size="lg" className='btn01 rounded-pill'>#3년미만</Button>
                <Button variant="outline-secondary" size="lg" className='btn01 rounded-pill'>#많이 본</Button>
                <Button variant="outline-secondary" size="lg" className='btn01 rounded-pill'>#3만km미만</Button>
                <Button variant="outline-secondary" size="lg" className='btn01 rounded-pill'>#1년미만</Button>
                </Col>
            </Row>
        </Container>
        </div>
    )
}

export default Inner;