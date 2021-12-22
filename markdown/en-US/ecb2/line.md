LINE (*x1*,*y*)-(*x2*,*y2*),*c*,*a*

Draws a line on the current low-resolution graphics screen.
  x1,y1   - Starting point of line.  If omitted the line starts at the last
            ending point, or the center of the screen.
  x2,y2   - Ending point of line.
  c       - Defines color (Required).  PSET selects current foreground
            color.  PRESET selects current background color.
  a       - Box action (Optional).  If omitted, BASIC draws a line.  If B is
            used, BASIC draws a box using the starting and ending points as opposite corners of the box.  If BF is used, BASIC draws a solid box.

```ecb2
LINE (22,33)-(27,39),PSET,BF
```
