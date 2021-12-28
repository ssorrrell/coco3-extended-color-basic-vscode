**EOF(<span style="color:#AAFFAA;">*d*</span>)**

Returns FALSE(0) if there is more data; TRUE(-1) if end of file has been read.

- <span style="color:#AAFFAA;">*d*</span> - Device number:
  - -1 Cassette

```ecb2
10 IF EOF(-1)=-1 THEN 220
```
