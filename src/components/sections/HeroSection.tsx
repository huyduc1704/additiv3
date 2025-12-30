'use client';

import React, { useRef } from 'react';
import { Button, Col, Row, Typography, Space, Grid } from 'antd';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';

const { Title, Paragraph } = Typography;
const { useBreakpoint } = Grid;

gsap.registerPlugin(SplitText);

interface HeroSectionProps {
    onStartProjectClick?: () => void;
    onViewCapabilitiesClick?: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onStartProjectClick, onViewCapabilitiesClick }) => {
    const screens = useBreakpoint();
    const containerRef = useRef<HTMLElement>(null);

    useGSAP(() => {
        const childSplitChars = new SplitText(".anim-chars", { type: "chars" });
        const childSplitLines = new SplitText(".anim-lines", { type: "lines" });

        const tl = gsap.timeline();

        tl.from(childSplitChars.chars, {
            x: 150,
            opacity: 0,
            duration: 0.7,
            ease: "power4.out",
            stagger: 0.04
        });

        tl.from(".anim-dash", {
            opacity: 0,
            duration: 0.5
        }, "-=0.5");

        tl.from(childSplitLines.lines, {
            rotationX: -100,
            opacity: 0,
            transformOrigin: "50% 50% -160px",
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.25
        }, "-=0.3");

        tl.from(".hero-content-fade", {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1
        }, "-=0.5");

    }, { scope: containerRef });

    return (
        <section ref={containerRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }}>
            <Row gutter={[64, 48]} align="middle">

                {/* TEXT COLUMN */}
                <Col xs={24} md={12} style={{ textAlign: 'left' }}>

                    <Title
                        level={1}
                        style={{
                            margin: 0,
                            lineHeight: 1.1,
                            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)'
                        }}
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
                    </Title>


                    <div className="hero-content-fade">
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
        </section>
    );
};

export default HeroSection;