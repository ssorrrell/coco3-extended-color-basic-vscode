**GET (<span style="color:#00FFFF;">*sx*,*sy*</span>)-(<span style="color:#FFAAFF;">*ex*,*ey*</span>),<span style="color:#AAFFAA;">*array*</span>,<span style="color:#AAFFFF;">*G*</span>**

Stores a rectangle that is on the low-resolution graphics screen in an array, for future use by the PUT command

- <span style="color:#00FFFF;">*sx*,*sy*</span> First corner of rectangle
- <span style="color:#FFAAFF;">*ex*,*ey*</span>   Opposite corner of rectangle
- <span style="color:#AAFFAA;">*array*</span> Two-dimensional array
- <span style="color:#AAFFFF;">*G*</span> Selects full graphic detail storage.  Requires use of PSET, PRESET,
          AND, OR, or NOT when using PUT.

```ecb2
10 GET (22,34)-(47,38),M,G
```
