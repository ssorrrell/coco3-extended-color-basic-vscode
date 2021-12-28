**CSAVEM <span style="color:#FFFF00;">*"filename"*</span>,<span style="color:#AAFF55;">*l*</span>,<span style="color:#AAFF00;">*h*</span>,<span style="color:#AAFFAA;">*e*</span>**

Saves machine-language program <span style="color:#FFFF00;">*filename*</span> on cassette

- <span style="color:#FFFF00;">*filename*</span> - Name of machine-language program being saves. Name can have as many as 8 characters.
- <span style="color:#AAFF55;">l</span> - Lowest address of machine-language program
- <span style="color:#AAFF00;">h</span> - Highest address of machine-language program
- <span style="color:#AAFFAA;">e</span> - Exec address of machine-language program

```ecb2
10 CSAVEM "NEWFILE",A
```
