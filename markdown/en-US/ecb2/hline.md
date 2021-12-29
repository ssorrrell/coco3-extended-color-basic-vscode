**HLINE (<span style="color:#00FFFF;">*x1*,*y1*</span>)-(<span style="color:#FFFF55;">*x2*,*y2*</span>),<span style="color:#FFFF00;">*c*</span>,<span style="color:#AAFF00;">*a*</span>**

Draws a line on the high-resolution graphics screen.

- <span style="color:#00FFFF;">x1,y1</span> - Starting point of line.  If omitted the line starts at the last ending point, or the center of the scree.
- <span style="color:#FFFF55;">x2,y2</span> - Ending point of HLINE
- <span style="color:#FFFF00;">c</span> - Defines color (Required). PSET selects current foreground color.  PRESET selects current background color.
- <span style="color:#AAFF00;">a</span> - Box action (Optional).  If omitted BASIC draws a line. If B is used, BASIC draws a box, using the starting and ending points as the opposite corners of the box.  If BF is used, BASIC draws a solid box.

```ecb2
10 HLINE (22,32)-(100,90),3,BF
```
