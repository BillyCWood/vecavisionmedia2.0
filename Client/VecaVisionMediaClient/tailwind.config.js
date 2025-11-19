module.exports = {
    theme: {
        extend: {
            animation: {
                'infinite-scroll-left':     'infinite-scroll-left 18s linear infinite',
                'infinite-scroll-right':    'infinite-scroll-right 21s linear infinite'
            },
            keyframes: {
                'infinite-scroll-left': {
                    from:   { transform:    'translateX(0)' },
                    to:     { transform:    'translateX(-100%)' },
                },
                'infinite-scroll-right': {
                    from:   { transform:    'translateX(-100%)' },
                    to:     { transform:    'translateX(0)' },
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
};
