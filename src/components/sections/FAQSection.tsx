'use client';
import React from 'react';
import { Collapse, Typography, ConfigProvider } from 'antd';
import MotionModal from '@/components/common/MotionModal';
import type { CollapseProps } from 'antd';

const { Title } = Typography;

// Dữ liệu từ PDF trang 4
const faqItems: CollapseProps['items'] = [
    {
        key: '1',
        label: 'What types of projects do you take on?',
        children: 'Prototypes, functional parts, brackets, fixtures, and small batch manufacturing.',
    },
    {
        key: '2',
        label: 'How fast is the turnaround?',
        children: 'Same day to three days depending on volume and materials.',
    },
    {
        key: '3',
        label: 'Do you offer design help?',
        children: 'Light design adjustments are available, but the main focus is manufacturing.',
    },
    {
        key: '4',
        label: 'What materials can you print?',
        children: 'PLA, ABS, ASA, Nylon, PC, and more.',
    },
    {
        key: '5',
        label: 'Do you work with students and hobbyists?',
        children: 'Yes, absolutely.',
    },
    {
        key: '6',
        label: 'How do we get started?',
        children: 'Reach out to us with a file, and we will review material, quantity and production requirements.',
    },
];

interface FAQModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const FAQModal: React.FC<FAQModalProps> = ({ isOpen, onClose }) => {
    return (
        <MotionModal
            isOpen={isOpen}
            onClose={onClose}
            width={800}
        >
            <div style={{ padding: '24px 0' }}>
                <Title level={2} style={{ textAlign: 'center', marginBottom: 32 }}>
                    Frequently Asked Questions
                </Title>

                <ConfigProvider theme={{ components: { Collapse: { headerBg: '#fff' } } }}>
                    <Collapse
                        items={faqItems}
                        defaultActiveKey={['1']}
                        bordered={false}
                        size="large"
                        style={{ backgroundColor: 'transparent' }}
                    />
                </ConfigProvider>
            </div>
        </MotionModal>
    );
};

export default FAQModal;