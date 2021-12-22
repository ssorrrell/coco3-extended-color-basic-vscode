**CLOADM *"filename"*,*o***

Loads machine-language program *filename* from cassette.  If *filename* is not specified, BASIC loads the first machine-language program found.
  filename  - Name of desired machine-language program.  Name can have as many
              as 8 characters.
  o         - Memory addressoffset.  If specified BASIC loads the
              machine-language program *o* bytes higher in memory than normal.

```ecb2
CLOADM "GRAPHICS",2730
```
