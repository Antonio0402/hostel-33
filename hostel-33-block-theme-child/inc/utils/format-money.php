<?php
function format_money($money, $currency = 'đ')
{
  // if $money is not a number, return it as is
  if (!is_numeric($money)) {
    return $money;
  }
  return number_format($money, 0, '.', ',') . $currency;
}
