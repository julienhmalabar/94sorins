<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'malabar');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', 'root');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '_I?M<$g)>u6`H4[~}ntCcmt=E[}s*-R!GDx^}`xq+NfiR-I2?_cJ.q&SAU^C|jEd');
define('SECURE_AUTH_KEY',  'Y#|:RD|itt|<8VUHf%nPr ICK{]7-a8Fu-}KGD9&T+:r~U4,wq}|+A3l7-R-qW-}');
define('LOGGED_IN_KEY',    '<C(=XR}xZ=+|%{(K=_c/)/K=!-p>ADO(%~Pq>`&Z?9L&xZrb+h*+w)DimAZ+^EJg');
define('NONCE_KEY',        '?@{>8e+6j svIKP/V{Ezp]+}Lv]V6xrZWLc5)b)20 )(&1P#%6]WP>W2Y5=ZfFc<');
define('AUTH_SALT',        '|rlThbL}Ivxp-eC|S~p!a{AIfDa5mT2r|8zKHJi72)0n9Oub{t|ti-CJFm)KH`w>');
define('SECURE_AUTH_SALT', '|SAx+fduH[;$BY,FQk-KNgaLs]W|t|c{XJt*wK-`S)YoSV,3HIlCD@]}qb8<R`Z-');
define('LOGGED_IN_SALT',   ':t<}X/2[Ky@UM<efr?G=H(R1 5IPnWO|G2E%|9(7z0O`h6!*#g/ZjBPgU%8[jj+N');
define('NONCE_SALT',       'J&3%W;>Q`ioyWVc|L5DGn,2iN5_Kc%=G6Y2jjfzF$,aAfa/KkCjz[/4z<65SU(7o');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'ml_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
