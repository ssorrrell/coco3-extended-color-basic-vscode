**HPOINT (<span style="color:#00FFFF;">*x*,*y*</span>)**

Returns information on point <span style="color:#00FFFF;">*x*,*y*</span> from the high-resolution graphics screen.

- <span style="color:#00FFFF;">x1,y1</span> - point coordinates
- <span style="color:#FF00FF;">returns</span> - number representing the data at the coordinates
  - 0     - point is reset
  - Code  - point is set

```ecb2
10 IF HPOINT(22,33)=0 THEN 200
```
