**HGET (<span style="color:#00FFFF;">*sx*,*sy*</span>)-(<span style="color:#FFAAFF;">*ex*,*ey*</span>),<span style="color:#AAFFAA;">*buffer*</span>**

Stores a rectangle that is on the high-resolution graphics screen into a buffer previously set up by the HBUFF command for future use by the HPUT command.

- <span style="color:#00FFFF;">*sx*,*sy*</span> - First corner of rectangle
- <span style="color:#FFAAFF;">*ex*,*ey*</span> - Opposite corner of rectangle
- <span style="color:#AAFFAA;">*buffer*</span>  - Number of buffer

```ecb2
10 HGET (21,32)-(28,37),1
```
