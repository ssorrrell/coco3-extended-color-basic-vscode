**LPEEK(<span style="color:#AAFFAA;">*memory location*</span>)**

Returns the contents of the virtual memory location (0-524287 decimal or 0-$7FFFF hexadecimal).

- <span style="color:#AAFFAA;">memory location</span> - memory location to retrieve from
- <span style="color:#FF00FF;">returns</span> - data at <span style="color:#AAFFAA;">*memory location*</span>

```ecb2
10 A=LPEEK(&H7FFF0)
```
