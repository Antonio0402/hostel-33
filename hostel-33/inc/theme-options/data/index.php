<?php

/**
 * Automatically import all PHP files in the data directory
 */

// Get the directory of the current file
$data_dir = __DIR__;

// Get all PHP files in this directory
$files = glob($data_dir . '/*.php');

// Loop through each file
foreach ($files as $file) {
  // Skip the index.php file itself to avoid recursive inclusion
  if (basename($file) === 'index.php') {
    continue;
  }

  // Require the file
  require_once $file;
}
