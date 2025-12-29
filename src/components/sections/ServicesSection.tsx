'use client';
import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { RocketOutlined, AppstoreOutlined, ToolOutlined, BuildOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const services = [
    {
        icon: <RocketOutlined style={{ fontSize: 32, color: '#000' }} />,
        title: 'Rapid Prototyping', // [cite: 26]
        desc: 'Fast turnaround for functional testing and iterative development.', // [cite: 27]
    },
    {
        icon: <AppstoreOutlined style={{ fontSize: 32, color: '#000' }} />,
        title: 'Small Batch Manufacturing', // [cite: 28]
        desc: 'Scaled production with repeatable quality across PLA, ABS, ASA, Nylon, PC, and more.', // [cite: 29]
    },
    {
        icon: <ToolOutlined style={{ fontSize: 32, color: '#000' }} />,
        title: 'Insert Installation and Finishing', // [cite: 32]
        desc: 'Heat set inserts and preparation for assembly.', // [cite: 33]
    },
    {
        icon: <BuildOutlined style={{ fontSize: 32, color: '#000' }} />,
        title: 'Design Support', // [cite: 34]
        desc: 'Light design services for manufacturability and part readiness.', // [cite: 35]
    },
];

const ServicesSection: React.FC = () => {
    return (
        <section style={{ padding: '80px 24px', maxWidth: 1280, margin: '0 auto' }}>
            <div style={{ marginBottom: 60 }}>
                <Title level={2} style={{ fontSize: '2.5rem' }}>Manufacturing Built for Real World Use</Title> {/*  */}
                <Paragraph style={{ fontSize: '1.1rem', color: '#595959', maxWidth: 700 }}>
                    Efficient, accurate, and consistent production supported by materials that perform in demanding applications. {/* [cite: 24] */}
                </Paragraph>
            </div>

            <Row gutter={[32, 32]}>
                {services.map((item, index) => (
                    <Col xs={24} md={12} key={index}>
                        <Card variant="borderless" style={{ height: '100%', background: '#fafafa' }}>
                            <div style={{ marginBottom: 16 }}>{item.icon}</div>
                            <Title level={4}>{item.title}</Title>
                            <Paragraph type="secondary">{item.desc}</Paragraph>
                        </Card>
                    </Col>
                ))}
            </Row>
        </section>
    );
};

export default ServicesSection;