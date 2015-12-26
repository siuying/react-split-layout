# React Split View

A split view component for React, shows two or more subviews, divided by a draggable divider.

Heavily inspired by [react-split-pane](https://github.com/tomkp/react-split-pane) by [tomkp](https://github.com/tomkp).

## How to Use

For the simplest case, just add two elements under a ``SplitView``:

```html
<SplitView direction="vertical">
   <div></div>
   <div></div>
</SplitView>
```

You can have ``SplitView`` with either ``vertical`` or ``horizontal`` direction,
with multiple children, possibly nesting another ``SplitView``, with constraints
on minimum/maximum sizes:

```html
<SplitView
  direction="vertical"
  onChange={this.onChange}
  initialSizes={[100, 300, 100, null]}
  minimumSizes={[100, 100, 100, 100]}
  maximumSizes={[null, null, 600, null]}>
  <div><h1>Hello</h1></div>
  <div><h1>World</h1></div>
  <div><h1>Foo</h1></div>
  <SplitView
    direction="horizontal"
    initialSizes={[50,null]}
    onChange={this.onChange}>
    <div><h1>Vertical 1</h1></div>
    <div><h1>Vertical 2</h1></div>
  </SplitView>
</SplitView>
```

### Persisting Positions

``SplitView`` accepts an onChange function prop. You may use it to persists the
changes of sizes and then use them in ``initialSizes`` to restore the state.

## License

MIT License
