# MockDown

> `MockDown`编辑器`Typora`的使用

- 序号前缀

```css
body {
  counter-reset: h1;
}

h1 {
  counter-reset: h1;
}

h2 {
  counter-reset: h2;
}

h3 {
  counter-reset: h3;
}

h2:before {
  counter-increment: h1;
  content: counter(h1) ".";
}

h3:before {
  counter-increment: h2;
  content: counter(h1) "." counter(h2) ". ";
}

h4:before {
  counter-increment: h3;
  content: counter(h1) "." counter(h2) "." counter(h3) ". ";
  /* content: counter(h1) "." counter(h2) "." counter(h3) "." counter(h4) ". "; */
}
```
