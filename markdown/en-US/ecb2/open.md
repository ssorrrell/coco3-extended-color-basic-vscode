**OPEN <span style="color:#FFFF00;">*m*</span>,<span style="color:#AAFFAA;">*#dev*</span>,<span style="color:#FFAA00;">*f*</span>**

Opens specified file for data transmission

- <span style="color:#FFFF00;">m</span> - Transmission mode
  - I - Input
  - O - Output
- <span style="color:#AAFFAA;">#dev</span> - Device
  - #-2 - Printer
  - #-1 - Cassette
  - #0  - Keyboard or screen
- <span style="color:#FFAA00;">*f*</span> - Filename

```ecb2
10 OPEN "O",#-1,"DATA"
```
