**DEL <span style="color:#AAFFAA;">*l1*</span>-<span style="color:#AAFFFF;">*l2*</span>**

Deletes the program lines

- l1  - Lowest line number to delete
- l2  - Highest line number to delete
  - l1    Delete 1 line
  - \-l2   Deletes from beginning of program up to and including l2
  - l1    Deletes from and including l1 to the end of the program
  - l1-l2 Deletes from and including l1 to and including l2

```ecb2
DEL 40-75
```
