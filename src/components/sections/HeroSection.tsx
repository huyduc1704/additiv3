'use client';

import React from 'react';
import { Button, Col, Row, Typography, Space, Grid } from 'antd';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

interface HeroSectionProps {
    onStartProjectClick?: () => void;
    onViewCapabilitiesClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartProjectClick, onViewCapabilitiesClick }) => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;

    return (
        <section style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }}>
            <Row gutter={[64, 48]} align="middle">

                {/* TEXT COLUMN */}
                <Col xs={24} md={12} style={{ textAlign: 'left' }}>
                    <Title level={1} style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginTop: 0, lineHeight: 1.1 }}>
                        Additiv3— Where <br /> Ideas Become <br /> Real Things.
                    </Title>

                    <Paragraph style={{ fontSize: '1.1rem', color: '#595959', marginTop: 24, maxWidth: 480, marginInline: '0' }}>
                        High quality 3D manufacturing for teams that need functional parts,
                        fast turnaround, and engineering grade materials with consistency they can trust.
                    </Paragraph>

                    <Space size="middle" wrap style={{ marginTop: 24, justifyContent: 'start', width: '100%' }}>
                        <Button type="primary" size="large" onClick={onStartProjectClick}>
                            Start your Project
                        </Button>
                        <Button size="large" onClick={onViewCapabilitiesClick}>
                            View Capabilities
                        </Button>
                    </Space>
                </Col>

                {/* IMAGE COLUMN */}
                <Col xs={24} md={12}>
                    <div style={{
                        backgroundColor: '#d9d9d9',
                        width: '100%',
                        aspectRatio: '1/1',
                        borderRadius: 4,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#8c8c8c'
                    }}>
                        {/* Vị trí đặt thẻ <Image /> của Next.js sau này */}
                        Image Placeholder (500x500)
                    </div>
                </Col>

            </Row>
        </section>
    );
};

export default HeroSection;