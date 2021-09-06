GET (sx,sy)-(ex,ey),array,G

Stores a rectangle that is on the low-resolution graphics screen in an array, for future use by the PUT command
  sx,sy   First corner of rectangle
  ex,ey   Opposite corner of rectangle
  array   Two-dimensional array
  G       Selects full graphic detail storage.  Requires use of PSET, PRESET,
          AND, OR, or NOT when using PUT.

Example
GET (22,34)-(47,38),M,G
