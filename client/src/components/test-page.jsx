import React from 'react'
import PageTemplate from './page-template'
import Widget from './widget'

const TestPage = () => {
	return (
		<PageTemplate title='Welcome to My Page'>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vulputate
				est ac augue tincidunt vehicula. Proin porttitor tellus in sem
				vulputate, ut consectetur nisl consectetur. Maecenas velit mi, dignissim
				a feugiat ac, porta eget felis. Maecenas cursus erat a convallis
				euismod. Sed sed urna vestibulum, varius urna vel, commodo purus.
				Pellentesque tempor tempus risus, vel lacinia ligula fermentum rutrum.
				Sed at metus ac arcu semper sodales. Morbi eget felis feugiat eros
				faucibus tincidunt nec ut orci. Sed tempus, turpis ac tempor vehicula,
				mi tortor vestibulum nibh, dapibus accumsan felis erat eget neque. Etiam
				auctor urna eu nunc feugiat, quis vulputate tortor porta. In semper
				fringilla ex, eget vestibulum lorem sodales in. Praesent nec ligula
				bibendum metus auctor consectetur pellentesque eget mauris. Mauris ut
				posuere diam. Nullam ut rutrum dolor, quis vulputate dui. Lorem ipsum
				dolor sit amet, consectetur adipiscing elit. Donec ultricies eros sed
				felis tempor molestie. Proin sit amet sem augue. Orci varius natoque
				penatibus et magnis dis parturient montes, nascetur ridiculus mus.
				Vivamus eu est ultricies, eleifend metus efficitur, porttitor velit.
				Suspendisse ultricies ipsum et rutrum elementum. Pellentesque pretium
				nec odio vel blandit. Integer sodales tellus risus, sed interdum urna
				semper quis. Sed ultrices felis id massa euismod pretium. Morbi et
				tellus lectus. Donec diam velit, auctor vel velit sed, malesuada aliquet
				orci. Ut euismod congue blandit. Fusce non accumsan eros, a egestas
				erat. Morbi non mattis felis. Phasellus ullamcorper ex nec metus
				ultrices auctor. Vivamus ac neque felis. Suspendisse laoreet mi et
				commodo suscipit. Curabitur fringilla velit non tempus consectetur.
				Quisque pulvinar semper urna. Fusce quis sollicitudin massa. Aenean
				vestibulum ligula eu metus pulvinar sollicitudin. Integer turpis enim,
				bibendum sit amet pharetra vitae, lobortis eget purus. Integer eget
				risus faucibus, venenatis mi vitae, egestas ante. Curabitur auctor
				blandit arcu sit amet posuere. Pellentesque congue massa nec fermentum
				sollicitudin. Donec consequat orci turpis, vitae congue enim porta eu.
				Donec commodo elementum erat, sit amet ultrices nisi ullamcorper sit
				amet. Donec venenatis ex finibus leo vestibulum scelerisque. Vestibulum
				sit amet est aliquet, efficitur diam a, viverra metus. Mauris finibus
				tempor ullamcorper. Aliquam eleifend, dolor eu lobortis imperdiet,
				sapien neque venenatis felis, in dignissim augue tortor in magna.
				Integer vel pellentesque ligula. Duis dui diam, efficitur quis lobortis
				et, fringilla ac ligula. Fusce ante felis, gravida non pulvinar id,
				commodo at libero. Nullam pellentesque quam ac ante convallis tempor.
				Nullam maximus elementum urna, pellentesque dapibus massa ullamcorper
				ut. Nullam dictum massa a sodales pretium. Nulla commodo, urna eu
				consectetur venenatis, tortor velit malesuada odio, sit amet gravida
				purus sapien in libero.
			</p>
			<Widget
				boardID={1684}
				widgetID={25633}
				params={`[
				{
					"value": "P30D/now[sD]",
					"name": "cas",
					"type": "daterange"
				}
				]`}
				height={300}
			/>
			<div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
				<Widget
					boardID={1684}
					widgetID={25620}
					params={`[
          {
            "value": "P30D/now[sD]",
            "name": "cas",
            "type": "daterange"
          }
        ]`}
					style={'{"borderStyle": "solid"}'}
				/>
				<Widget
					boardID={1684}
					widgetID={25621}
					params={`[
          {
            "value": "P30D/now[sD]",
            "name": "cas",
            "type": "daterange"
          }
        ]`}
					style={'{"borderStyle": "solid"}'}
				/>
				<Widget
					boardID={1684}
					widgetID={25630}
					params={`[
          {
            "value": "P30D/now[sD]",
            "name": "cas",
            "type": "daterange"
          }
        ]`}
					style={'{"borderStyle": "solid"}'}
				/>
				<Widget
					boardID={1684}
					widgetID={25623}
					params={`[
          {
            "value": "P30D/now[sD]",
            "name": "cas",
            "type": "daterange"
          }
        ]`}
					style={'{"borderStyle": "solid"}'}
				/>
			</div>
			<div style={{ display: 'flex', flexDirection: 'row', gap: '10px' }}>
				<Widget
					boardID={1684}
					widgetID={25749}
					params={`[
      {
        "value": "P30D/now[sD]",
        "name": "cas",
        "type": "daterange"
      }
    ]`}
					height={150}
					width={800}
					style={{ flex: '0 0 800px' }}
				/>
				<p style={{ flexGrow: 1, maxWidth: 'calc(100% - 810px)' }}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
					vulputate dictum neque, eget finibus lacus tempus sit amet. Mauris
					semper metus eu ante posuere, eu elementum lacus finibus. Vestibulum
					gravida pretium elementum. Mauris elementum quis nibh sed accumsan.
					Maecenas venenatis a nunc ut aliquet. Vivamus eu ligula lectus.
					Interdum et malesuada fames ac ante ipsum primis in faucibus. Nunc
					consequat magna arcu, sit amet faucibus sapien tincidunt ut. Aenean
					sed massa a enim ornare blandit eget nec metus. Cras sagittis molestie
					eros quis congue.
				</p>
			</div>
		</PageTemplate>
	)
}

export default TestPage
