'use client';
import React from 'react';
import { Button, Typography, Flex } from 'antd';

const { Title, Paragraph } = Typography;

interface FinalCTASectionProps {
    onContactClick?: () => void;
}

const FinalCTASection: React.FC<FinalCTASectionProps> = ({ onContactClick }) => {
    return (
        <section style={{ padding: '100px 24px', backgroundColor: '#fff', textAlign: 'center' }}>
            <div style={{ maxWidth: 800, margin: '0 auto' }}>
                <Title level={2} style={{ fontSize: '3rem', marginBottom: 16 }}>
                    Ready to Manufacture Your Next Part?
                </Title>

                <Paragraph style={{ fontSize: '1.2rem', color: '#595959', marginBottom: 40 }}>
                    From prototypes to production, Additiv3 is your partner for fast and dependable manufacturing.
                </Paragraph>

                <Flex justify="center" gap="middle">
                    <Button
                        type="primary"
                        size="large"
                        style={{ height: 50, padding: '0 40px', fontSize: 16 }}
                        onClick={onContactClick}
                    >
                        Contact Us
                    </Button>
                </Flex>
            </div>
        </section>
    );
};

export default FinalCTASection;