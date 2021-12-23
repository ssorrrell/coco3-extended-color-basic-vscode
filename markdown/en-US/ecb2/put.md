**PUT (*sx*,*sy*)-(*ex*,*ey*),*v*,*a***

Copies graphics from an array to a rectangle on the low-resolution graphics screen.

- sx,sy - First corner of rectangle
- ex,ey - Opposite corner of rectangle
- v     - Two dimensional array
- a     - Action used.  Actions include PSET, PRESET, AND, OR, NOT

```ecb2
10 PUT (22,33)-(27,39),A,PSET
```
