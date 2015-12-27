# React Split Layout

A React component that separate two or more views with a draggable divider.

Heavily inspired by [react-split-pane](https://github.com/tomkp/react-split-pane) by [tomkp](https://github.com/tomkp).

## How to Use

For the simplest case, just add two elements under a ``SplitLayout``:

```html
<SplitLayout direction="vertical">
   <div></div>
   <div></div>
</SplitLayout>
```

You can have ``SplitLayout`` with either ``vertical`` or ``horizontal`` direction,
with multiple children, possibly nesting another ``SplitLayout``, with constraints
on minimum/maximum sizes:

```html
<SplitLayout
  direction="vertical"
  onChange={this.onChange}
  initialSizes={[100, 300, 100, null]}
  minSizes={[100, 100, 100, 100]}
  maxSizes={[null, null, 600, null]}>
  <div><h1>Hello</h1></div>
  <div><h1>World</h1></div>
  <div><h1>Foo</h1></div>
  <SplitLayout
    direction="horizontal"
    initialSizes={[50,null]}
    onChange={this.onChange}>
    <div><h1>Vertical 1</h1></div>
    <div><h1>Vertical 2</h1></div>
  </SplitLayout>
</SplitLayout>
```

### Persisting Positions

``SplitLayout`` accepts an onChange function prop. You may use it to persists the
changes of sizes and then use them in ``initialSizes`` to restore the state.

## License

MIT License
