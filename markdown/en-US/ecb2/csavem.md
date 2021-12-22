**CSAVEM *"filename"*,*l*,*h*,*e***

Saves machine-language program *filename* on cassette
  filename  - Name of machine-language program being saves.  Name can have as
              many as 8 characters.
  l         - Lowest address of machine-language program
  h         - Highest address of machine-language program
  e         - Exec address of machine-language program

```ecb2
CSAVEM "NEWFILE",A
```
