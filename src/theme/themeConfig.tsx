import type { ThemeConfig } from 'antd';

const theme: ThemeConfig = {
    token: {
        fontSize: 16,
        colorPrimary: '#000000',
        fontFamily: 'var(--font-inter)',
        borderRadius: 8,
    },
    components: {
        Button: {
            controlHeight: 44,
            paddingContentHorizontal: 24,
        },
        Typography: {
            fontFamilyCode: 'monospace',
        }
    }
};

export default theme;