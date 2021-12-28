**POINT(<span style="color:#00FFFF;">*x*,*y*</span>)**

Returns information on point <span style="color:#00FFFF;">*x*,*y*</span> from the low-resolution text screen:

- -1    - Point is part of an alphanumeric character
- 0     - Point is reset
- Code  - Point is set

```ecb2
10 A=POINT(22,33)
```
