# Breakpoint

| Breakpoint | 識別子 | 幅 |
----|----|---- 
| Default | none | 0 < 576px |
| Small | s | 576px < 768px |
| Medium | m |  768px < 992px |
| Large | l |  992px < 1200px  |
| Extra large (print) | xl | 1200px < 1400px |
| Extra extra large | xxl | 1400px < |


```css
.sample {}

@media (min-width: 576px) {
    .sample {}
}

@media (min-width: 768px) {
    .sample {}
}

@media (min-width: 992px) {
    .sample {}
}

@media print and (min-width: 1200px) {
  .sample {}
}

@media (min-width: 1400px) {
  .sample {}
}
```