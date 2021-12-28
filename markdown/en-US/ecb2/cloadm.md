**CLOADM <span style="color:#FFFF00;">*"filename"*</span>,<span style="color:#AAFFAA;">*o*</span>**

Loads machine-language program <span style="color:#FFFF00;">*filename*</span> from cassette.  If <span style="color:#FFFF00;">*filename*</span> is not specified, BASIC loads the first machine-language program found.

- <span style="color:#FFFF00;">*filename*</span> - Name of desired machine-language program.  Name can have as many as 8 characters.
- <span style="color:#AAFFAA;">o</span> - Memory address offset.  If specified BASIC loads the machine-language program <span style="color:#AAFFAA;">*o*</span> bytes higher in memory than normal.

```ecb2
10 CLOADM "GRAPHICS",2730
```
