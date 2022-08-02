/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {

            textColor: {
                'content-main': 'var(--content-main-text)',
                'content-secondary': 'var(--content-secondary-text)',
                'content-tertiary': 'var(--content-tertiary-text)',
                'content-category': 'var(--content-category-text)',
                'header-main': 'var(--header-main-text)',
                'header-secondary': 'var(--header-secondary-text)',
                'header-button': 'var(--header-button-text)',
                'sidebar-main': 'var(--sidebar-main-text)',
                'sidebar-secondary': 'var(--sidebar-secondary-text)',
                'sidebar-tertiary': 'var(--sidebar-tertiary-text)',
                'sidebar-muted': 'var(--sidebar-muted-text)',
                'sidebar-button': 'var(--sidebar-button-text)',
                'sidebar-button-hover': 'var(--sidebar-button-text-hover)'
            },

            borderColor: {
                'content-list': 'var(--content-list-border)',
                'header-button': 'var(--header-button-bg)',
                'header-button-hover': 'var(--header-button-hover)',
                'sidebar-button': 'var(--sidebar-button-border)',
                'sidebar-button-hover': 'var(--sidebar-button-border-hover)'
            },

            backgroundColor: {
                'content': 'var(--content-bg)',
                'content-hover': 'var(--content-bg-hover)',
                'content-category': 'var(--content-category-bg)',
                'header': 'var(--header-bg)',
                'header-button': 'var(--header-button-bg)',
                'header-button-hover': 'var(--header-button-hover)',
                'sidebar': 'var(--sidebar-bg)',
                'sidebar-hover': 'var(--sidebar-bg-hover)',
                'sidebar-button': 'var(--sidebar-button-bg)'
            },

            scrollbarColor: {
              'main':  'var(--content-main-text) var(--content-bg)',
            },

        },
    },
}

