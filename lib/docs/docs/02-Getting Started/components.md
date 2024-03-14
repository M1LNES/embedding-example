---
title: Components
sidebar_position: 4
slug: /begin/components
---

Keep in mind that these components are resizable - if you don't specify width/height, the mounted component will use the given space. To do that, in the outer component, you need to specify `display=flex` and pass style prop to the Widget component `style={{"flex":1}}`.

## Widget

The most important component. This component allows to embed existing widgets from Omni-Studio. So far, it allows only vision widgets.

### Parameters

- `boardID` _(**number**)_: The ID of the board associated with the widget.
- `widgetID` _(**number**)_: The ID of the specific widget to embed.
- `style` _(**object**)_: JSON object defining the CSS styling for the component.
- `className` _(**string**)_: Name of the styling class to apply to the component (Will be used in future, now it's just prepared for future development).
- `params` _(**array**)_: An array of pre-JSON objects for expanding from Omni-Studio.
- `width` _(**number**)_: The width of the widget component.
- `height` _(**number**)_: The height of the widget component.

### Returns

A React element representing the embedded widget component.

### Example Usage

```jsx
import React from 'react'
import Widget from 'empliembed'

function App() {
	return (
		<div>
			<Widget
				boardID={1671}
				widgetID={25353}
				style={{ backgroundColor: 'white', border: '1px solid black' }}
				params={[
					{
						value: 'P30D/now[sD]',
						name: 'cas',
						type: 'daterange',
					},
					{
						value: 35,
						name: 'alertid',
						type: 'number',
					},
				]}
				width={300}
				height={200}
			/>
		</div>
	)
}

export default App
```

Mandatory parameters are only boardID and widgetID. If widget is depended on some Omni-Studio params, they must be specified as well.

## Widget Vision

This component renders a visualization based on fetched data and configuration - the advantage of this component is that it no longer needs APIs to fetch the data - data and expanded prejson config is passed via params.

### Parameters

- `data` (**object|array**): Fetched data in Omni format (array for multiple requests, object for only one).
- `prejson` (**object**): Expanded widget config (**required**).
- `showConfig` (**bool**): Visualize widget config and not expanded data requests. Default: `false`.
- `showConfigRevealed` (**bool**): Visualize widget config and expanded data requests. Default: `false`.
- `dataRequests` (**object**): Not expanded data requests.
- `expandedDataRequests` (**object|array**): Expanded request(s) (if only one request - object, otherwise array).

### Returns

A React element representing the visualization.

### Example Usage

```jsx
import React from 'react'
import WidgetVision from 'empliembed'

function App() {
	return (
		<div>
			<WidgetVision
				data={...}
				prejson={...}
				showConfig={true}
				showConfigRevealed={false}
				dataRequests={...}
				expandedDataRequests={...}
			/>
		</div>
	)
}
export default App
```
