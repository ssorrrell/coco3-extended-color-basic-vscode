**EXEC(<span style="color:#AAFFAA;">*address*</span>)**

Transfers control to a machine-language program at <span style="color:#AAFFAA;">*address*</span>.  If <span style="color:#AAFFAA;">*address*</span> is omitted, control is transferred to address set in the last CLOADM.

- <span style="color:#AAFFAA;">*address*</span> - memory address to transfer control to

```ecb2
10 EXEC 28032
```
