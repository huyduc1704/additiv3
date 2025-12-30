'use client'; // Quan trọng: Đánh dấu đây là Client Component

import { useEffect } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugin outside of useEffect
gsap.registerPlugin(ScrollTrigger);

export default function SmoothScrolling({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        // 1. Init Lenis
        const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing mượt mà
        });

        // 2. Đồng bộ Lenis với GSAP ScrollTrigger
        // Mỗi khi Lenis cuộn, báo cho ScrollTrigger cập nhật vị trí
        lenis.on('scroll', ScrollTrigger.update);

        // 3. Thêm Lenis vào vòng lặp ticker của GSAP
        // Giúp animation chạy đồng bộ với tốc độ cuộn của Lenis
        gsap.ticker.add((time) => {
            lenis.raf(time * 1000);
        });

        // 4. Tắt lag smoothing của GSAP để tránh xung đột với Lenis
        gsap.ticker.lagSmoothing(0);

        // Cleanup khi component bị hủy (chuyển trang...)
        return () => {
            gsap.ticker.remove(lenis.raf);
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}