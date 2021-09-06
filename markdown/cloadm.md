CLOADM "filename",o

Loads machine-language program <i>filename</i> from cassette.  If <i>filename</i> is not specified, BASIC loads the first machine-language program found.
  filename  - Name of desired machine-language program.  Name can have as many
              as 8 characters.
  o         - Memory addressoffset.  If specified BASIC loads the
              machine-language program <i>o</i> bytes higher in memory than normal.

Example:
CLOADM "GRAPHICS",2730