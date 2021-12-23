**HGET (*sx*,*sy*)-(*ex*,*ey*),*buffer***

Stores a rectangle that is on the high-resolution graphics screen into a buffer previously set up by the HBUFF command for future use by the HPUT command.

- sx,sy   - First corner of rectangle
- ex,ey   - Opposite corner of rectangle
- buffer  - Number of buffer

```ecb2
10 HGET (21,32)-(28,37),1
```
