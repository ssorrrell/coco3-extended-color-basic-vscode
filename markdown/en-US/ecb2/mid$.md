**MID$(<span style="color:#00FFFF;">*s*</span>,<span style="color:#FFAAAA;">*p*</span>,<span style="color:#FFFFAA;">*l*</span>)**

Returns or replaces a portion of the contents of string variable *s* with another string.

- <span style="color:#00FFFF;">*s*</span>   - String being modified
- <span style="color:#FFAAAA;">*p*</span>   - Starting position in string
- <span style="color:#FFFFAA;">*l*</span>   - Length of section being modified

```ecb2
10 MID$(A$,4,3)="CAT"
```

```ecb2
10 A$=MID$(B$,Z,2)
```
