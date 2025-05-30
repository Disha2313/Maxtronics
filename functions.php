<?php
function my_maxtronics_enqueue_assets() {
    $theme_dir = get_stylesheet_directory_uri();

    // React CSS
    wp_enqueue_style(
        'my-maxtronics-style',
        $theme_dir . '/build/static/css/main.badf2fc7.css',
        array(),
        null
    );

    // React JS
    wp_enqueue_script(
        'my-maxtronics-script',
        $theme_dir . '/build/static/js/main.eeff01c5.js',
        array(),
        null,
        true
    );
}
add_action('wp_enqueue_scripts', 'my_maxtronics_enqueue_assets');
