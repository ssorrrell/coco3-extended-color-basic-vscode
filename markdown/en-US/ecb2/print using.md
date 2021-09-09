PRINT USING"format";data

Prints numbers in the specified format on the text screen.  The <i>format</i> commands are:
  #         - Formats numbers
  .         - Decimal point
  ,         - Prints comma to the left of every third character
  **        - Fills leading spaces with asterisks
  $         - Prints leading dollar sign
  $$        - Floating dollar sign
  +         - Leading or trailing sign 
  ^^^^      - Exponential format
  -         - Minus sign after negative numbers
  !         - Prints first string character
  %spaces%  - String field.  Length of field is number of spaces plus 2.

Example
PRINT USING"##.###";1/3
