'use client';

import React from 'react';
import { Col, Row, Typography } from 'antd';

const { Title, Paragraph } = Typography;

// Style cho ô logo giả lập
const logoBoxStyle: React.CSSProperties = {
    backgroundColor: '#e0e0e0',
    height: 140,
    width: '100%',
    borderRadius: 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#888'
};

const TrustSection: React.FC = () => {
    return (
        <section style={{ backgroundColor: '#f9f9f9', padding: '100px 24px' }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', textAlign: 'center' }}>

                <Title level={2} style={{ fontSize: '2.2rem', marginBottom: 16 }}>
                    Trusted by builders, <br className="mobile-break" /> engineers, & creators
                </Title>

                <Paragraph type="secondary" style={{ fontSize: '1rem', marginBottom: 60, maxWidth: 600, marginInline: 'auto' }}>
                    We support hardware startups, R&D teams, small manufacturers, students,
                    and everyday problem solvers who need reliable manufacturing partners.
                </Paragraph>

                {/* LOGO GRID */}
                <Row gutter={[24, 24]} justify="center">
                    {[1, 2, 3, 4].map((item) => (
                        <Col xs={12} sm={12} md={6} key={item}>
                            <div style={logoBoxStyle}>
                                Logo {item}
                            </div>
                        </Col>
                    ))}
                </Row>

            </div>
        </section>
    );
};

export default TrustSection;