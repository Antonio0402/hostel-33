<?php
require_once(str_replace("tabs", "inc", dirname(__FILE__)) . '/helper_get.php');

define('OPTIONS_PREFIX', 'ht33_');
define('OPTIONS_TEXTDOMAIN', 'hostel-33');

$arr_section = array();
//Add new option tab
//require_once ( dirname(__FILE__) .'/tab_name.php' );

require_once(dirname(__FILE__) . '/tab_company_info.php');
require_once(dirname(__FILE__) . '/tab_social_account.php');
require_once(dirname(__FILE__) . '/tab_homepage_section.php');
require_once(dirname(__FILE__) . '/tab_extra_services.php');
