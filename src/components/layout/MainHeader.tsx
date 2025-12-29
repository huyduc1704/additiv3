'use client';

import React from 'react';
import { Button, Flex, Space, Typography } from 'antd';
import { MenuOutlined } from '@ant-design/icons'; // Icon menu cho mobile nếu cần sau này

interface MainHeaderProps {
    onFAQClick?: () => void;
    onContactClick?: () => void;
    onStartProjectClick?: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ onFAQClick, onContactClick, onStartProjectClick }) => {
    return (
        <header style={{ borderBottom: '1px solid #f0f0f0', backgroundColor: '#fff', position: 'sticky', top: 0, zIndex: 1000 }}>
            <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px' }}>
                <Flex justify="space-between" align="center" style={{ height: 80 }}>

                    {/* LOGO */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }}>
                        <div style={{ width: 32, height: 32, backgroundColor: '#d9d9d9' }} /> {/* Logo Placeholder */}
                        <Typography.Text strong style={{ fontSize: 'clamp(14px, 4vw, 18px)', whiteSpace: 'nowrap' }}>ADDITIV3</Typography.Text>
                    </div>

                    {/* MENU BUTTONS */}
                    <Space size="middle">
                        <Button type="text" className="hidden-mobile" onClick={onFAQClick}>FAQ</Button>
                        <Button type="text" className="hidden-mobile" onClick={onContactClick}>Contact us</Button>
                        <Button type="primary" style={{ fontWeight: 500 }} onClick={onStartProjectClick}>
                            Start your Project
                        </Button>
                    </Space>

                </Flex>
            </div>
        </header>
    );
};

export default MainHeader;