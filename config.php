<?php

/**
 * HKU Base Theme
 * 
 * Developed by Darcy W. Christ
 */

$THEME->name = 'hku';
 
$THEME->parents = array('base');


$THEME->sheets = array(
    'core',     /** Must come first**/
    'admin',
    'blocks',
    'calendar',
    'course',
    'user',
    'dock',
    'grade',
    'message',
    'modules',
    'question',
    'css3'      /** Sets up CSS 3 + browser specific styles **/
);
$THEME->enable_dock = true;

$THEME->javascripts = array(
    'custom',
);