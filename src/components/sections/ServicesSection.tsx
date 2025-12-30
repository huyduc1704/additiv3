'use client';

import React, { useRef } from 'react';
import { Card, Typography } from 'antd';
import { RocketOutlined, AppstoreOutlined, ToolOutlined, BuildOutlined } from '@ant-design/icons';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const { Title, Paragraph } = Typography;

const services = [
    {
        icon: <RocketOutlined style={{ fontSize: 32, color: '#000' }} />,
        title: 'Rapid Prototyping',
        desc: 'Fast turnaround for functional testing and iterative development.',
    },
    {
        icon: <AppstoreOutlined style={{ fontSize: 32, color: '#000' }} />,
        title: 'Small Batch Manufacturing',
        desc: 'Scaled production with repeatable quality across PLA, ABS, ASA, Nylon, PC, and more.',
    },
    {
        icon: <ToolOutlined style={{ fontSize: 32, color: '#000' }} />,
        title: 'Insert Installation and Finishing',
        desc: 'Heat set inserts and preparation for assembly.',
    },
    {
        icon: <BuildOutlined style={{ fontSize: 32, color: '#000' }} />,
        title: 'Design Support',
        desc: 'Light design services for manufacturability and part readiness.',
    },
    {
        icon: <BuildOutlined style={{ fontSize: 32, color: '#000' }} />,
        title: 'Quality Control',
        desc: 'Comprehensive inspection and testing to ensure part reliability.',
    },
];

const ServicesSection: React.FC = () => {
    const sectionRef = useRef<HTMLElement>(null);
    const headerRef = useRef<HTMLDivElement>(null);
    const sliderContainerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // --- 1. ANIMATION HEADER (FIX LỖI MOBILE) ---
        // Đổi sang .fromTo để chắc chắn animation chạy đúng từ A đến B
        gsap.fromTo('.service-header-anim',
            {
                y: 50,          // Trạng thái bắt đầu
                opacity: 0      // Ẩn tuyệt đối
            },
            {
                scrollTrigger: {
                    trigger: headerRef.current,
                    start: 'top 80%',
                    toggleActions: 'play none none reverse',
                },
                y: 0,           // Trạng thái kết thúc (về vị trí cũ)
                opacity: 1,     // Hiện rõ
                duration: 0.8,
                stagger: 0.2,   // Title chạy trước, Paragraph chạy sau
                ease: 'power3.out'
            }
        );

        // --- 2. ANIMATION HEADER EXIT ---
        gsap.to(headerRef.current, {
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top top",
                scrub: true,
                end: "+=200",
            },
            opacity: 0,
            y: -100,
            scale: 0.9
        });

        // --- 3. HORIZONTAL SCROLL CARDS ---
        const slider = sliderContainerRef.current;
        if (slider) {
            const scrollAmount = slider.scrollWidth - window.innerWidth + 48;
            gsap.to(slider, {
                x: -scrollAmount,
                ease: "none",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    pin: true,
                    scrub: 1,
                    start: "top top",
                    end: () => `+=${scrollAmount}`,
                }
            });
        }
    }, { scope: sectionRef });

    return (
        <section ref={sectionRef} style={{ padding: '80px 0', overflow: 'hidden', position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            {/* CONTAINER HEADER */}
            <div ref={headerRef} style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', width: '100%', marginBottom: 60 }}>
                {/* Đã thêm alignItems: 'center' để Paragraph nằm giữa theo trục dọc */}
                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 40 }}>

                    {/* TITLE */}
                    {/* Thêm opacity: 0 vào style để ẩn ngay từ đầu (Fix lỗi FOUC) */}
                    <div style={{ flex: '2 1 600px', opacity: 0 }} className="service-header-anim">
                        <Title level={2} style={{
                            fontSize: 'clamp(2.5rem, 4vw, 4rem)',
                            margin: 0,
                            lineHeight: 1.1,
                            fontWeight: 600,
                            textTransform: 'uppercase'
                        }}>
                            Manufacturing <br /> Built for <br /> Real World Use
                        </Title>
                    </div>

                    {/* PARAGRAPH */}
                    {/* Thêm opacity: 0 vào style để ẩn ngay từ đầu */}
                    <div style={{ flex: '1 1 300px', opacity: 0 }} className="service-header-anim">
                        <Paragraph style={{
                            fontSize: '1.1rem',
                            color: '#595959',
                            margin: 0,
                            paddingBottom: 0 // Xóa padding đáy
                        }}>
                            Efficient, accurate, and consistent production supported by materials that perform in demanding applications.
                        </Paragraph>
                    </div>
                </div>
            </div>

            {/* CONTAINER CARDS */}
            <div
                ref={sliderContainerRef}
                style={{
                    display: 'flex',
                    gap: 32,
                    paddingLeft: 'max(24px, (100vw - 1280px) / 2)',
                    paddingRight: 48,
                    width: 'max-content',
                }}
            >
                {services.map((item, index) => (
                    <div key={index} style={{ width: '400px', flexShrink: 0 }}>
                        <Card
                            variant="borderless"
                            style={{
                                height: '100%',
                                background: '#fafafa',
                                borderRadius: 16,
                                padding: '24px',
                                minHeight: '320px',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}
                        >
                            <div>
                                <div style={{ marginBottom: 32 }}>{item.icon}</div>
                                <Title level={4} style={{ marginBottom: 16, fontSize: '1.5rem' }}>{item.title}</Title>
                                <Paragraph type="secondary" style={{ fontSize: '1.1rem' }}>
                                    {item.desc}
                                </Paragraph>
                            </div>
                        </Card>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServicesSection;