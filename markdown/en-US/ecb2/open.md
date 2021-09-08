OPEN m,#dev,f

Opens specified file for data transmission
  m   - Transmission mode
        I - Input
        O - Output
  #dev  - #-2 - Printer
          #-1 - Cassette
          #0  - Keyboard or screen
  f     - Filename

Example
OPEN "O",#-1,"DATA"
