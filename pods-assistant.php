<?php
/*
 * Plugin Name: Pods for Assistant
 * Author: Brent Jett
 * Author URI: https://brentjett.design
 * Version: 0.0.1
 * Description: Exploring a Pods app for the Assistant WordPress plugin.
 * License: GNU General Public License v2.0
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: pods-assistant
*/

defined( 'ABSPATH' ) || die();

define( 'PODS_FLASST_VERSION', '0.0.1' );
define( 'PODS_FLASST_FILE', trailingslashit( __FILE__ ) );
define( 'PODS_FLASST_DIR', plugin_dir_path( PODS_FLASST_FILE ) );
define( 'PODS_FLASST_URL', plugins_url( '/', PODS_FLASST_FILE ) );

require_once PODS_FLASST_DIR . 'backend/class-pods-flasst-loader.php';

PodsFLAsstLoader::init();