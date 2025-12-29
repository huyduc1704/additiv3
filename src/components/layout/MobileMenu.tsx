'use client';

import React, { useEffect, useRef } from 'react';
import { Button, Flex, Typography } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import gsap from 'gsap';

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
    menuItems: {
        label: string;
        onClick?: () => void;
        primary?: boolean;
    }[];
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, menuItems }) => {
    const menuRef = useRef<HTMLDivElement>(null);
    const overlayRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const tlRef = useRef<gsap.core.Timeline | null>(null);

    useEffect(() => {
        const menu = menuRef.current;
        const overlay = overlayRef.current;
        const content = contentRef.current;

        if (!menu || !overlay || !content) return;

        // Kill any ongoing animation to prevent conflicts (e.g. quick open/close toggles)
        if (tlRef.current) {
            tlRef.current.kill();
        }

        if (isOpen) {
            // Reset state before animating in
            gsap.set(menu, { display: 'block' });
            gsap.set(overlay, { opacity: 0 });
            gsap.set(content, {
                scale: 0.8,
                opacity: 0,
                y: 20
            });

            // Animate In
            // Animate In
            const tl = gsap.timeline();
            tlRef.current = tl;

            tl.to(overlay, {
                opacity: 1,
                duration: 0.3,
                ease: 'power2.out'
            })
                .to(content, {
                    scale: 1,
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: 'elastic.out(1, 0.5)'
                }, '-=0.2');

        } else {
            // Animate Out
            // Animate Out
            const tl = gsap.timeline({
                onComplete: () => {
                    gsap.set(menu, { display: 'none' });
                }
            });
            tlRef.current = tl;

            tl.to(content, {
                scale: 0.9,
                opacity: 0,
                duration: 0.2,
                ease: 'power2.in'
            })
                .to(overlay, {
                    opacity: 0,
                    duration: 0.2
                }, '-=0.1');
        }
    }, [isOpen]);

    return (
        <div
            ref={menuRef}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: 2000,
                display: 'none',
                boxSizing: 'border-box'
            }}
        >
            {/* Overlay Background */}
            <div
                ref={overlayRef}
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(8px)',
                }}
            />

            {/* Menu Content Container */}
            <div
                ref={contentRef}
                style={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 24,
                    boxSizing: 'border-box',
                }}
            >
                {/* Close Button */}
                <Button
                    type="text"
                    icon={<CloseOutlined style={{ fontSize: 24 }} />}
                    onClick={onClose}
                    style={{
                        position: 'absolute',
                        top: 24,
                        right: 24
                    }}
                />

                <Typography.Title level={2} style={{ marginBottom: 40, marginTop: 0 }}>
                    Additiv3
                </Typography.Title>

                <Flex vertical gap="large" style={{ width: '100%', maxWidth: 300 }}>
                    {menuItems.map((item, index) => (
                        <Button
                            key={index}
                            type={item.primary ? 'primary' : 'text'}
                            size="large"
                            block
                            onClick={item.onClick}
                            style={{
                                fontSize: '1.2rem',
                                height: 50,
                                fontWeight: item.primary ? 600 : 400
                            }}
                        >
                            {item.label}
                        </Button>
                    ))}
                </Flex>
            </div>
        </div>
    );
};

export default MobileMenu;
