'use client';

import React, { useRef } from 'react';
import { Button, Col, Row, Typography, Space, Grid } from 'antd';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText, ScrollTrigger } from 'gsap/all'; // Nhớ import ScrollTrigger

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

// Đăng ký cả 2 plugin
gsap.registerPlugin(SplitText, ScrollTrigger);

interface HeroSectionProps {
    onStartProjectClick?: () => void;
    onViewCapabilitiesClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartProjectClick, onViewCapabilitiesClick }) => {
    const screens = useBreakpoint();
    const containerRef = useRef<HTMLElement>(null);
    const contentRef = useRef<HTMLDivElement>(null); // Ref bao quanh nội dung để Fade

    useGSAP(() => {
        const childSplitChars = new SplitText(".anim-chars", { type: "chars" });
        const childSplitLines = new SplitText(".anim-lines", { type: "lines" });

        // --- 1. INTRO ANIMATION (Chạy 1 lần khi load trang) ---
        const tl = gsap.timeline();

        tl.from(childSplitChars.chars, {
            x: 100, // Giảm xuống 1 chút cho đỡ giật
            opacity: 0,
            duration: 1, // Tăng thời gian lên xíu cho mượt
            ease: "power4.out",
            stagger: 0.03
        });

        tl.from(".anim-dash", {
            opacity: 0,
            duration: 0.5
        }, "-=0.8");

        tl.from(childSplitLines.lines, {
            rotationX: -90,
            opacity: 0,
            transformOrigin: "50% 50% -50px", // Chỉnh lại tâm xoay cho chuẩn 3D
            duration: 1,
            ease: "power3.out",
            stagger: 0.15
        }, "-=0.6");

        tl.from(".hero-content-fade", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1
        }, "-=0.8");

        // --- 2. SCROLL EXIT ANIMATION (Hiệu ứng khi cuộn) ---
        // Logic: Khi cuộn xuống -> Hero mờ đi & trượt lên. Cuộn lên -> Hiện lại.
        gsap.to(contentRef.current, {
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top", // Bắt đầu khi Hero ở đỉnh màn hình
                end: "bottom center", // Kết thúc khi đáy Hero chạm giữa màn hình
                scrub: true, // Quan trọng: Animation chạy theo thanh cuộn (Mượt mà)
            },
            y: -100, // Trượt lên trên 1 đoạn
            opacity: 0, // Mờ dần về 0
            scale: 0.95, // Thu nhỏ nhẹ tạo chiều sâu
            filter: "blur(10px)", // Làm mờ (blur) kiểu kính mờ rất sang
            ease: "none"
        });

    }, { scope: containerRef });

    return (
        <section ref={containerRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px', position: 'relative' }}>
            {/* Bao bọc toàn bộ nội dung trong div này để áp dụng hiệu ứng Fade khi scroll */}
            <div ref={contentRef}>
                <Row gutter={[64, 48]} align="middle">

                    {/* TEXT COLUMN */}
                    <Col xs={24} md={12} style={{ textAlign: 'left' }}>

                        {/* H1 Semantic SEO */}
                        <h1 style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clip: 'rect(0, 0, 0, 0)', whiteSpace: 'nowrap', border: 0 }}>
                            Additiv3 — Where Ideas Become Real Things.
                        </h1>

                        {/* VISUAL TITLE */}
                        <div
                            style={{
                                margin: 0,
                                lineHeight: 1.1,
                                fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
                                fontWeight: 600,
                                color: '#000000',
                                fontFamily: 'var(--font-inter)',
                                marginBottom: 24
                            }}
                            aria-hidden="true"
                        >
                            <span style={{ fontSize: '1.3em', display: 'block', marginBottom: 8 }}>
                                <span className="anim-chars" style={{ display: 'inline-block' }}>
                                    Additiv3
                                </span>
                                <span className="anim-dash" style={{ display: 'inline-block', marginLeft: 15 }}>
                                    —
                                </span>
                            </span>
                            <div style={{ perspective: '500px' }}>
                                <div className="anim-lines">
                                    Where Ideas Become <br /> Real Things.
                                </div>
                            </div>
                        </div>

                        <div className="hero-content-fade">
                            <Paragraph style={{ fontSize: '1.1rem', color: '#4a4a4a', marginTop: 24, maxWidth: 480, marginInline: '0' }}>
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
                        </div>
                    </Col>

                    {/* IMAGE COLUMN */}
                    <Col xs={24} md={12}>
                        <div className="hero-content-fade" style={{
                            backgroundColor: '#d9d9d9',
                            width: '100%',
                            aspectRatio: '1/1',
                            borderRadius: 4,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#8c8c8c'
                        }}>
                            Image Placeholder (500x500)
                        </div>
                    </Col>

                </Row>
            </div>
        </section>
    );
};

export default HeroSection;