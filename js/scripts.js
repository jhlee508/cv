/*
* Start Bootstrap - Resume v7.0.3 (https://startbootstrap.com/theme/resume)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-resume/blob/master/LICENSE)
*/

$(document).ready(function () {
    $("#p_bio").load("./pages/bio.html")
    $("#p_publication").load("./pages/publication.html")
    // $("#p_patent").load("./pages/patent.html")
    $("#p_experience").load("./pages/experience.html")
});

window.addEventListener('DOMContentLoaded', event => {
    const THEME_KEY = 'theme';
    const root = document.documentElement;
    const themeToggle = document.getElementById('theme-toggle');
    const themeToggleIcon = themeToggle ? themeToggle.querySelector('i') : null;
    const themeToggleLabel = themeToggle ? themeToggle.querySelector('.theme-toggle-label') : null;

    const getStoredTheme = () => {
        try {
            return localStorage.getItem(THEME_KEY);
        } catch (error) {
            return null;
        }
    };

    const storeTheme = theme => {
        try {
            localStorage.setItem(THEME_KEY, theme);
        } catch (error) {
            return;
        }
    };

    const updateThemeToggle = theme => {
        if (!themeToggle || !themeToggleIcon || !themeToggleLabel) {
            return;
        }

        const isDark = theme === 'dark';
        themeToggle.setAttribute('aria-pressed', String(isDark));
        themeToggleIcon.className = isDark ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
        themeToggleLabel.textContent = isDark ? 'Light' : 'Dark';
    };

    const applyTheme = theme => {
        root.setAttribute('data-theme', theme);
        updateThemeToggle(theme);
    };

    applyTheme(getStoredTheme() || root.getAttribute('data-theme') || 'light');

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            offset: 74,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
            applyTheme(nextTheme);
            storeTheme(nextTheme);
        });
    }

});
