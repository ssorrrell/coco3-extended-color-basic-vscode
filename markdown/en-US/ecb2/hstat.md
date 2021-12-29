**HSTAT <span style="color:#AAFFAA;">*v1*</span>,<span style="color:#AAFF00;">*v2*</span>,<span style="color:#AAFF55;">*v3*</span>,<span style="color:#AAFFFF;">*v4*</span>**

Returns information regarding the high-resolution text screen cursor to variables <span style="color:#AAFFAA;">*v1*</span>, <span style="color:#AAFF00;">*v2*</span>, <span style="color:#AAFF55;">*v3*</span>, and <span style="color:#AAFFFF;">*v4*</span>.

- <span style="color:#AAFFAA;">*v1*</span> - Character code
- <span style="color:#AAFF00;">*v2*</span> - Character attribute
- <span style="color:#AAFF55;">*v3*</span> - Cursor X coordinate
- <span style="color:#AAFFFF;">*v4*</span> - Cursor Y coordinate

```ecb2
10 DIM X,Y,A,C
20 HSTAT C, A, X, Y
```
