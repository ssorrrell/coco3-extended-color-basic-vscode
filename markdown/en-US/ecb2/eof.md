EOF(d)

Returns FALSE(0) if there is more data; TRUE(-1) if end of file has been read.
  d - Device number:
      -1 Cassette

Example
IF EOF(-1)=-1 THEN 220
