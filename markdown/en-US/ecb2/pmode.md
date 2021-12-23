**PMODE *mode*,*page***

Selects resolution and first memory page of a low-resolution graphics screen.

- mode If omitted, BASIC uses the last value set.  At power on, BASIC uses 2.
  - 0 - 128 x 96, 2-color
  - 1 - 128 x 96, 4-color
  - 2 - 128 x 192, 2-color
  - 3 - 128 x 192, 4-color
  - 4 - 256 x 192, 2-color
- page  Start page.  If omitted, BASIC uses the previously set page.  At
        power on, BASIC uses 1.

```ecb2
10 PMODE 4,1
```
