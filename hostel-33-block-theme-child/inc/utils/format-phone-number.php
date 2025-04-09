<?php
function format_phone_number_by_region($phone_number)
{
  $phone_number = $phone_number ?? ht33_get_option('ht33_company_phone');
  $region_code = '+84'; // Vietnam region code
  if (empty($phone_number)) {
    return '';
  }
  $formatted_number = preg_replace('/[^0-9]/', '', $phone_number); // Remove non-numeric characters
  if (strlen($formatted_number) >= 10) {
    $formatted_number = $region_code . substr($formatted_number, 1, 3) . ' - ' . substr($formatted_number, 4);
  }
  return $formatted_number;
}
