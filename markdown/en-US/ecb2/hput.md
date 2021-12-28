**HPUT (<span style="color:#00FFFF;">*sx*,*sy*</span>)-(<span style="color:#FFAAFF;">*ex*,*ey*</span>),<span style="color:#AAFFFF;">*b*</span>,<span style="color:#AAFFAA;">*a*</span>**

Copies graphics from a buffer to a rectangle on the high-resolution graphics screen.

- <span style="color:#00FFFF;">*sx*,*sy*</span> - First corner of rectangle
- <span style="color:#FFAAFF;">*ex*,*ey*</span> - Opposite corner of rectangle
- <span style="color:#AAFFFF;">*b*</span> - Buffer number
- <span style="color:#AAFFAA;">*a*</span> - Action used.  Actions include PSET, PRESET, AND, OR, NOT

```ecb2
10 HPUT (22,33)-(28,37),1,PSET
```
