**OPEN *m*,*#dev*,*f***

Opens specified file for data transmission

- m   - Transmission mode
  - I - Input
  - O - Output
- #dev - Device
  - #-2 - Printer
  - #-1 - Cassette
  - #0  - Keyboard or screen
- f     - Filename

```ecb2
10 OPEN "O",#-1,"DATA"
```
