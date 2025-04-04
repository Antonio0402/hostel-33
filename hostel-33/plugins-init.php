<?php

/**
 * Include the TGM_Plugin_Activation class.
 *
 * Depending on your implementation, you may want to change the include call:
 *
 * Parent Theme:
 * require_once get_template_directory() . '/path/to/class-tgm-plugin-activation.php';
 *
 * Child Theme:
 * require_once get_stylesheet_directory() . '/path/to/class-tgm-plugin-activation.php';
 *
 * Plugin:
 * require_once dirname( __FILE__ ) . '/path/to/class-tgm-plugin-activation.php';
 */
require_once get_template_directory() . '/inc/class-tgm-plugin-activation.php';

add_action('tgmpa_register', 'hostel_33_register_required_plugins');

function hostel_33_register_required_plugins()
{
  /*
	 * Array of plugin arrays. Required keys are name and slug.
	 * If the source is NOT from the .org repo, then source is also required.
	 */
  $plugins = array(

    // This is an example of how to include a plugin bundled with a theme.
    array(
      'name'               => 'Display view count - hostel-33', // The plugin name.
      'slug'               => 'view-count', // The plugin slug (typically the folder name).
      'source'             => get_template_directory() . '/plugins/view-count.zip', // The plugin source.
      'required'           => true, // If false, the plugin is only 'recommended' instead of required.
      'version'            => '', // E.g. 1.0.0. If set, the active plugin must be this version or higher. If the plugin version is higher than the plugin version installed, the user will be notified to update the plugin.
      'force_activation'   => false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
      'force_deactivation' => false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
      'external_url'       => '', // If set, overrides default API URL and points to an external URL.
      'is_callable'        => '', // If set, this callable will be be checked for availability to determine if a plugin is active.
    ),

    array(
      'name'               => 'Contact buttons Pro - WPSHARE247', // The plugin name.
      'slug'               => 'all-in-one-contact-buttons-wpshare247-pro', // The plugin slug (typically the folder name).
      'source'             => get_template_directory() . '/plugins/wp-content/plugins/all-in-one-contact-buttons-wpshare247-pro.zip', // The plugin source.
      'required'           => true, // If false, the plugin is only 'recommended' instead of required.
      'version'            => '', // E.g. 1.0.0. If set, the active plugin must be this version or higher. If the plugin version is higher than the plugin version installed, the user will be notified to update the plugin.
      'force_activation'   => false, // If true, plugin is activated upon theme activation and cannot be deactivated until theme switch.
      'force_deactivation' => false, // If true, plugin is deactivated upon theme switch, useful for theme-specific plugins.
      'external_url'       => '', // If set, overrides default API URL and points to an external URL.
      'is_callable'        => '', // If set, this callable will be be checked for availability to determine if a plugin is active.
    ),

    array(
      'name'      => 'Redux Framework',
      'slug'      => 'redux-framework',
      'required'    => false,
    ),

    // This is an example of how to include a plugin from the WordPress Plugin Repository.
    array(
      'name'      => 'Members – Membership & User Role Editor Plugin',
      'slug'      => 'members',
      'required'  => true,
    ),
    array(
      'name'      => 'Advanced Custom Fields (ACF®)',
      'slug'      => 'advanced-custom-fields',
      'required'  => true,
    ),
    array(
      'name'      => 'Font Awesome',
      'slug'      => 'font-awesome',
      'required'  => true,
    ),
    array(
      'name'      => 'Crop-Thumbnails',
      'slug'      => 'crop-thumbnails',
      'required'  => true,
    ),
    array(
      'name'      => 'Forminator Forms – Contact Form, Payment Form & Custom Form Builder',
      'slug'      => 'crop-thumbnails',
      'required'  => true,
    ),
    array(
      'name'      => 'Popup Maker – Boost Sales, Conversions, Optins, Subscribers with the Ultimate WP Popups Builder',
      'slug'      => 'crop-thumbnails',
      'required'  => true,
    ),

    // This is an example of the use of 'is_callable' functionality. A user could - for instance -
    // have WPSEO installed *or* WPSEO Premium. The slug would in that last case be different, i.e.
    // 'wordpress-seo-premium'.
    // By setting 'is_callable' to either a function from that plugin or a class method
    // `array( 'class', 'method' )` similar to how you hook in to actions and filters, TGMPA can still
    // recognize the plugin as being installed.
    array(
      'name'        => 'WordPress SEO by Yoast',
      'slug'        => 'wordpress-seo',
      'is_callable' => 'wpseo_init',
    ),

  );

  /*
	 * Array of configuration settings. Amend each line as needed.
	 *
	 * TGMPA will start providing localized text strings soon. If you already have translations of our standard
	 * strings available, please help us make TGMPA even better by giving us access to these translations or by
	 * sending in a pull-request with .po file(s) with the translations.
	 *
	 * Only uncomment the strings in the config array if you want to customize the strings.
	 */
  $config = array(
    'id'           => 'hostel_33',                 // Unique ID for hashing notices for multiple instances of TGMPA.
    'default_path' => '',                      // Default absolute path to bundled plugins.
    'menu'         => 'tgmpa-install-plugins', // Menu slug.
    'has_notices'  => true,                    // Show admin notices or not.
    'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
    'dismiss_msg'  => '',                      // If 'dismissable' is false, this message will be output at top of nag.
    'is_automatic' => false,                   // Automatically activate plugins after installation or not.
    'message'      => '',                      // Message to output right before the plugins table.

    /*
		'strings'      => array(
			'page_title'                      => __( 'Install Required Plugins', 'hostel_33' ),
			'menu_title'                      => __( 'Install Plugins', 'hostel_33' ),
			/* translators: %s: plugin name. * /
			'installing'                      => __( 'Installing Plugin: %s', 'hostel_33' ),
			/* translators: %s: plugin name. * /
			'updating'                        => __( 'Updating Plugin: %s', 'hostel_33' ),
			'oops'                            => __( 'Something went wrong with the plugin API.', 'hostel_33' ),
			'notice_can_install_required'     => _n_noop(
				/* translators: 1: plugin name(s). * /
				'This theme requires the following plugin: %1$s.',
				'This theme requires the following plugins: %1$s.',
				'hostel_33'
			),
			'notice_can_install_recommended'  => _n_noop(
				/* translators: 1: plugin name(s). * /
				'This theme recommends the following plugin: %1$s.',
				'This theme recommends the following plugins: %1$s.',
				'hostel_33'
			),
			'notice_ask_to_update'            => _n_noop(
				/* translators: 1: plugin name(s). * /
				'The following plugin needs to be updated to its latest version to ensure maximum compatibility with this theme: %1$s.',
				'The following plugins need to be updated to their latest version to ensure maximum compatibility with this theme: %1$s.',
				'hostel_33'
			),
			'notice_ask_to_update_maybe'      => _n_noop(
				/* translators: 1: plugin name(s). * /
				'There is an update available for: %1$s.',
				'There are updates available for the following plugins: %1$s.',
				'hostel_33'
			),
			'notice_can_activate_required'    => _n_noop(
				/* translators: 1: plugin name(s). * /
				'The following required plugin is currently inactive: %1$s.',
				'The following required plugins are currently inactive: %1$s.',
				'hostel_33'
			),
			'notice_can_activate_recommended' => _n_noop(
				/* translators: 1: plugin name(s). * /
				'The following recommended plugin is currently inactive: %1$s.',
				'The following recommended plugins are currently inactive: %1$s.',
				'hostel_33'
			),
			'install_link'                    => _n_noop(
				'Begin installing plugin',
				'Begin installing plugins',
				'hostel_33'
			),
			'update_link' 					  => _n_noop(
				'Begin updating plugin',
				'Begin updating plugins',
				'hostel_33'
			),
			'activate_link'                   => _n_noop(
				'Begin activating plugin',
				'Begin activating plugins',
				'hostel_33'
			),
			'return'                          => __( 'Return to Required Plugins Installer', 'hostel_33' ),
			'plugin_activated'                => __( 'Plugin activated successfully.', 'hostel_33' ),
			'activated_successfully'          => __( 'The following plugin was activated successfully:', 'hostel_33' ),
			/* translators: 1: plugin name. * /
			'plugin_already_active'           => __( 'No action taken. Plugin %1$s was already active.', 'hostel_33' ),
			/* translators: 1: plugin name. * /
			'plugin_needs_higher_version'     => __( 'Plugin not activated. A higher version of %s is needed for this theme. Please update the plugin.', 'hostel_33' ),
			/* translators: 1: dashboard link. * /
			'complete'                        => __( 'All plugins installed and activated successfully. %1$s', 'hostel_33' ),
			'dismiss'                         => __( 'Dismiss this notice', 'hostel_33' ),
			'notice_cannot_install_activate'  => __( 'There are one or more required or recommended plugins to install, update or activate.', 'hostel_33' ),
			'contact_admin'                   => __( 'Please contact the administrator of this site for help.', 'hostel_33' ),

			'nag_type'                        => '', // Determines admin notice type - can only be one of the typical WP notice classes, such as 'updated', 'update-nag', 'notice-warning', 'notice-info' or 'error'. Some of which may not work as expected in older WP versions.
		),
		*/
  );

  tgmpa($plugins, $config);
}
