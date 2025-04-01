<?php
$composer_autoload = get_template_directory() . '/vendor/autoload.php';
if (file_exists($composer_autoload)) {
  require_once $composer_autoload;
}
// Only initialize if the class exists
if (class_exists('Honeybadger\Honeybadger')) {
  try {
    // Ensure $_SERVER variables are properly formatted
    // This prevents the "Cannot access offset of type string on string" error
    if (!isset($_SERVER['HTTP_HOST'])) {
      $_SERVER['HTTP_HOST'] = $_SERVER['SERVER_NAME'] ?? 'localhost';
    }

    // Initialize with safer settings
    $honeybadger = Honeybadger\Honeybadger::new([
      'api_key' => defined('HONEYBADGER_API_KEY') ? HONEYBADGER_API_KEY : '',
      'environment' => wp_get_environment_type(),
      'project_root' => get_template_directory(),
      'hostname' => $_SERVER['HTTP_HOST'],
      // Disable features that might cause issues
      'report_data' => false, // Don't send request data which can cause errors
      'handlers' => [
        'exception' => false, // Don't automatically handle exceptions
        'error' => false      // Don't automatically handle PHP errors
      ]
    ]);

    // Add WordPress context
    $honeybadger->context([
      'wordpress_version' => get_bloginfo('version'),
      'theme' => wp_get_theme()->get('Name'),
    ]);

    // Define a custom function for logging specific errors
    function honeybadger_log_exception($exception)
    {
      global $honeybadger;
      if ($honeybadger) {
        try {
          $honeybadger->notify($exception);
        } catch (Exception $e) {
          error_log('Failed to send exception to Honeybadger: ' . $e->getMessage());
        }
      }
    }
  } catch (Exception $e) {
    // Log any initialization errors
    error_log('Honeybadger initialization failed: ' . $e->getMessage());
  }
} else {
  // Log that Honeybadger isn't available
  error_log('Honeybadger PHP library not found. Please install using Composer.');
}
