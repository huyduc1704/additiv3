'use client';

import React from 'react';
import { Row, Col, Typography, Flex } from 'antd'; // 1. Import Flex thay vì Space

const { Text, Link } = Typography;

const MainFooter: React.FC = () => {
    return (
        <footer style={{ backgroundColor: '#fff', borderTop: '1px solid #f0f0f0', padding: '60px 24px 24px' }}>
            <div style={{ maxWidth: 1280, margin: '0 auto' }}>
                <Row gutter={[32, 32]}>

                    {/* Cột 1: Thông tin công ty */}
                    <Col xs={24} md={8}>
                        <div style={{ marginBottom: 16, fontWeight: 'bold', fontSize: 20 }}>ADDITIV3</div>
                        <Text type="secondary">
                            Bringing your ideas to life with precision 3D manufacturing.
                        </Text>
                    </Col>

                    {/* Cột 2: Links */}
                    <Col xs={12} md={8}>
                        {/* 2. Dùng Flex vertical để xếp dọc */}
                        <Flex vertical gap="middle">
                            <Text strong>Company</Text>
                            <Link href="#" style={{ color: '#595959' }}>About Us</Link>
                            <Link href="#" style={{ color: '#595959' }}>Careers</Link>
                            <Link href="#" style={{ color: '#595959' }}>Privacy Policy</Link>
                        </Flex>
                    </Col>

                    {/* Cột 3: Contact */}
                    <Col xs={12} md={8}>
                        {/* 3. Dùng Flex vertical thay cho Space */}
                        <Flex vertical gap="middle">
                            <Text strong>Support</Text>
                            <Link href="#" style={{ color: '#595959' }}>Help Center</Link>
                            <Link href="#" style={{ color: '#595959' }}>Contact Support</Link>
                            <Link href="#" style={{ color: '#595959' }}>Get a Quote</Link>
                        </Flex>
                    </Col>
                </Row>

                <div style={{ marginTop: 60, textAlign: 'center', borderTop: '1px solid #f0f0f0', paddingTop: 24 }}>
                    <Text type="secondary" style={{ fontSize: 12 }}>
                        © {new Date().getFullYear()} Additiv3 Inc. All rights reserved.
                    </Text>
                </div>
            </div>
        </footer>
    );
};

export default MainFooter;