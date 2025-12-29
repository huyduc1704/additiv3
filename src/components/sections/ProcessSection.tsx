'use client';
import React from 'react';
import { Card, Col, Row, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

interface Step {
    step: string;
    title: string;
    desc: string;
}

const steps: Step[] = [
    {
        step: '01',
        title: 'Discover',
        desc: 'We learn your requirements, materials, quantities, and performance needs.',
    },
    {
        step: '02',
        title: 'Prepare',
        desc: 'We optimize orientation, tolerances, and print conditions for the best outcome.',
    },
    {
        step: '03',
        title: 'Manufacture',
        desc: 'Parts are produced using controlled and repeatable processes.',
    },
    {
        step: '04',
        title: 'Deliver',
        desc: 'Parts are shipped quickly with ongoing support for future iterations or production runs.',
    },
];

const ProcessSection: React.FC = () => {
    return (
        <section style={{ padding: '100px 24px', backgroundColor: '#fff' }}>
            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                <div style={{ textAlign: 'center', marginBottom: 60 }}>
                    <Title level={2} style={{ fontSize: '2.5rem' }}>How We Work</Title>
                    <Paragraph style={{ fontSize: '1.1rem', color: '#595959', maxWidth: 600, margin: '0 auto' }}>
                        A simple and efficient process designed to move projects from concept to delivered parts with clarity and speed.
                    </Paragraph>
                </div>

                <Row gutter={[32, 32]}>
                    {steps.map((item, index) => (
                        <Col xs={24} sm={12} md={6} key={index}>
                            <Card variant="borderless" style={{ height: '100%', boxShadow: 'none' }}>
                                <Text strong style={{ fontSize: '3rem', color: '#e6e6e6', display: 'block', lineHeight: 1, marginBottom: 16 }}>
                                    {item.step}
                                </Text>
                                <Title level={4} style={{ marginTop: 0 }}>{item.title}</Title>
                                <Paragraph type="secondary">{item.desc}</Paragraph>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </div>
        </section>
    );
};

export default ProcessSection;