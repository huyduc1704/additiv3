'use client';

import React, { useState } from 'react';
import { Button, Flex, Space, Typography, Grid, Drawer } from 'antd';
import { MenuOutlined } from '@ant-design/icons';

const { useBreakpoint } = Grid;

interface MainHeaderProps {
    onFAQClick?: () => void;
    onContactClick?: () => void;
    onStartProjectClick?: () => void;
}

const MainHeader: React.FC<MainHeaderProps> = ({ onFAQClick, onContactClick, onStartProjectClick }) => {
    const screens = useBreakpoint();
    const isMobile = !screens.md;
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const showDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    const handleMenuClick = (action?: () => void) => {
        closeDrawer();
        if (action) action();
    };

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
                    {isMobile ? (
                        <Button type="text" icon={<MenuOutlined />} onClick={showDrawer} />
                    ) : (
                        <Space size="middle">
                            <Button type="text" onClick={onFAQClick}>FAQ</Button>
                            <Button type="text" onClick={onContactClick}>Contact us</Button>
                            <Button type="primary" style={{ fontWeight: 500 }} onClick={onStartProjectClick}>
                                Start your Project
                            </Button>
                        </Space>
                    )}

                </Flex>
            </div>

            {/* MOBILE DRAWER */}
            <Drawer
                title="Menu"
                placement="right"
                onClose={closeDrawer}
                open={isDrawerOpen}
                styles={{ wrapper: { width: '80%' } }}
            >
                <Flex vertical gap="large">
                    <Button type="text" block style={{ textAlign: 'left', fontSize: '1.1rem' }} onClick={() => handleMenuClick(onFAQClick)}>
                        FAQ
                    </Button>
                    <Button type="text" block style={{ textAlign: 'left', fontSize: '1.1rem' }} onClick={() => handleMenuClick(onContactClick)}>
                        Contact us
                    </Button>
                    <Button type="primary" size="large" block onClick={() => handleMenuClick(onStartProjectClick)}>
                        Start your Project
                    </Button>
                </Flex>
            </Drawer>
        </header>
    );
};

export default MainHeader;