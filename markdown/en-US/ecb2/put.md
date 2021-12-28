**PUT (<span style="color:#00FFFF;"*>*sx*,*sy*</span>)-(<span style="color:#FFAAFF;">*ex*,*ey*</span>),<span style="color:#AAFFFF;">*v*</span>,<span style="color:#AAFFAA;">*a*</span>**

Copies graphics from an array to a rectangle on the low-resolution graphics screen.

- <span style="color:#00FFFF;">*sx*,*sy*</span> - First corner of rectangle
- <span style="color:#FFAAFF;">*ex*,*ey*</span> - Opposite corner of rectangle
- <span style="color:#AAFFFF;">*v*</span> - Two dimensional array
- <span style="color:#AAFFAA;">*a*</span> - Action used.  Actions include PSET, PRESET, AND, OR, NOT

```ecb2
10 PUT (22,33)-(27,39),A,PSET
```
