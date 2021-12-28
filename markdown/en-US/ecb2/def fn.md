**DEF FN <span style="color:#00FFFF;">*name*</span>(<span style="color:#FFFF00;">*variables*</span>)=<span style="color:#AAFF00;">*formula*</span>**

Defines a numeric function

- <span style="color:#00FFFF;">name</span>      - Name of funcion.  Must be a valid variable name
- <span style="color:#FFFF00;">variables</span> - List of dummy variables used in <span style="color:#AAFF00;">formula</span>
- <span style="color:#AAFF00;">formula</span>  - Defines the operation

```ecb2
10 DEF FNA(B)=B*(B+(1/B))
```
