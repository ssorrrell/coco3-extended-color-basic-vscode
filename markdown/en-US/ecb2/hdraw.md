**HDRAW <span style="color:#AAFFAA;">*string*</span>**

Draws a line on the high-resolution graphics screen as specified by *string*.  The <span style="color:#AAFFAA;">*string*</span> commands are:

- <span style="color:#AAFFAA;">*string*</span> - set of commands for the drawing pen
  - A   Angle
  - BM  Blank move
  - C   Color
  - D   Down
  - E   45 degree angle
  - F   135 degree angle
  - G   225 degree angle
  - H   315 degree angle
  - L   Left
  - M   Move draw position
  - N   No update
  - R   Right
  - S   Scale
  - U   Up
  - X   Execute substring  

```ecb2
10 HDRAW "BM128,96;U25;R25;D25;L25"
```
