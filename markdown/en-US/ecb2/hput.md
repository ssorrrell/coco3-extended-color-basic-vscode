**HPUT (*sx*,*sy*)-(*ex*,*ey*),*b*,*a***

Copies graphics from a buffer to a rectangle on the high-resolution graphics screen.

- sx,sy   - First corner of rectangle
- ex,ey   - Opposite corner of rectangle
- b       - Buffer number
- a       - Action used.  Actions include PSET, PRESET, AND, OR, NOT

```ecb2
10 HPUT (22,33)-(28,37),1,PSET
```
