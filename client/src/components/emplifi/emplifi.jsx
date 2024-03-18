import React, { useState } from 'react'
import Template from './template'
import {
	Box,
	Divider,
	FormControl,
	Grid,
	InputLabel,
	MenuItem,
	Select,
	Stack,
} from '@mui/material'
import { charListeningParams, chart1Params } from '../board-params'
import { Widget } from '../../../../lib/dist/empli-embed'

const Emplifi = () => {
	const [selectBoxValue, setSelectBoxValue] = useState('P60D/now[sD]')

	const handleChange = (e) => {
		setSelectBoxValue(e.target.value)
	}
	return (
		<Template>
			<Box
				textAlign='center'
				p={2}
				width='50%'
				marginX='auto'
				bgcolor='background.paper'
				borderRadius={8}
				border={2} // Thicker border
				boxShadow={1}
			>
				<h2>Who are we?</h2>
				<Divider />
				<Box p={2}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
					facilisis nunc augue, nec tempor dui varius sodales. Vivamus eget
					lacinia orci, at placerat elit. Duis lacinia augue ac ante dignissim
					dapibus. Maecenas a turpis eu purus scelerisque mollis at eget urna.
					Ut leo nulla, consectetur sed turpis id, efficitur faucibus tellus.
					Suspendisse potenti. Nunc dictum pharetra malesuada. Nunc luctus enim
					vel posuere sodales.
				</Box>
			</Box>

			<Box marginTop={10} textAlign='justify'>
				<h2 style={{ textAlign: 'center', marginBottom: 50 }}>Why Emplifi?</h2>
				<Box mt={2}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<img
								src='https://images.ctfassets.net/cpumif18y1gd/2U9kGVjmd226Ss10OQ7pto/5778c76a2b73f1f3c786829fc0569973/EMP282-TrustRadius_Award_Assets__625x417___1.png?fm=webp&q=100&w=2048'
								alt='Image'
								style={{ maxWidth: '100%', height: 'auto' }}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box p={2} bgcolor='background.paper'>
								<h3>Enjoy inovation</h3>
								<p>
									Fusce euismod sodales velit, in elementum sem luctus
									convallis. Proin eu quam porttitor, accumsan tellus in,
									tristique sapien. Praesent luctus egestas lacus ut rhoncus.
									Aliquam at viverra lorem, pulvinar volutpat est. Aenean ac est
									et nunc elementum porta. Quisque imperdiet augue justo, eget
									ultrices lectus facilisis sed. Cras venenatis vel justo sed
									rhoncus. Proin facilisis mi elit, nec semper urna ornare non.
									Aenean nec sagittis justo. Maecenas viverra non felis semper
									efficitur. Pellentesque habitant morbi tristique senectus et
									netus et malesuada fames ac turpis egestas. Sed posuere, velit
									in semper vulputate, ante nisi rutrum urna, vel bibendum
									lectus sem a augue. Maecenas laoreet lacus lacus, volutpat
									porta nisl cursus quis. Cras varius at lorem bibendum
									porttitor. Integer feugiat lectus id sodales malesuada.
									Pellentesque et lacinia diam, ut sodales sapien.
								</p>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box p={2} bgcolor='background.paper'>
								<h3>Embrace the growth mindset</h3>
								<p>
									Cras nisl orci, tempus vel bibendum id, euismod nec nulla. Sed
									eu porta felis. Nullam vitae velit eu augue blandit dictum at
									id justo. Vivamus pulvinar orci a felis hendrerit, faucibus
									placerat enim accumsan. Suspendisse sit amet consequat tortor.
									Nulla sodales sem libero, ac mattis metus euismod non. Quisque
									eget sapien ultrices, lobortis magna et, sagittis velit. Morbi
									id mollis dolor. Suspendisse egestas, nisl feugiat convallis
									gravida, mi nulla pretium elit, sed lobortis libero ante non
									risus.
								</p>
								<p>
									Nullam semper condimentum mi, eget iaculis ex eleifend auctor.
									Nam egestas eleifend velit in molestie. Vivamus aliquet vitae
									libero at convallis. Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Suspendisse ut nibh nec tortor hendrerit
									auctor. Aliquam id scelerisque quam. Vestibulum quis eleifend
									felis. Donec dapibus, sem et volutpat rhoncus, est lacus
									viverra mi, at blandit tortor justo at risus.
								</p>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<img
								src='https://www.allprodad.com/wp-content/uploads/2021/03/05-12-21-happy-people.jpg'
								alt='Image'
								style={{ maxWidth: '100%', height: 'auto' }}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<img
								src='https://www.theladders.com/wp-content/uploads/handshake_190617.jpg'
								alt='Image'
								style={{ maxWidth: '100%', height: 'auto' }}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box p={2} bgcolor='background.paper'>
								<h3>Build connections </h3>
								<p>
									Aenean venenatis vestibulum turpis, et rutrum lacus gravida
									sit amet. Ut accumsan risus vel augue pretium, vel iaculis leo
									dictum. Donec id tincidunt leo, vel fermentum urna. Maecenas
									efficitur dolor vitae libero molestie tristique. Proin
									ultricies venenatis eros, sed auctor purus sagittis eu.
									Vivamus velit orci, congue non nulla et, suscipit pretium
									sapien. Sed arcu metus, ornare sit amet nunc id, ornare
									maximus mauris. Sed scelerisque ipsum vel lorem ultricies, at
									lobortis libero facilisis. Nulla commodo porta sapien, id
									congue ligula dictum ut. Integer pulvinar turpis a elementum
									aliquet. Quisque id neque libero. Aliquam tristique, neque
									eget feugiat lobortis, est sapien venenatis ligula, sit amet
									mollis sem lorem sit amet nunc. Donec iaculis non massa a
									ornare. Cras id posuere enim. Sed nibh tortor, egestas in
									tellus eu, eleifend fringilla ligula. Ut augue lorem,
									elementum eu ipsum sed, aliquam sodales justo. Phasellus
									vulputate elit in felis varius lacinia. Suspendisse potenti.
									Integer elit turpis, iaculis id lorem eu, viverra facilisis
									est. Vestibulum maximus dolor mattis ornare malesuada. Quisque
									sit amet orci a elit condimentum scelerisque. Orci varius
									natoque penatibus et magnis dis parturient montes, nascetur
									ridiculus mus. Morbi in eros non lectus lobortis pharetra
									vitae id libero. Nullam aliquam augue eu metus accumsan
									convallis. Curabitur posuere est tortor, eget lacinia felis
									mattis eget.
								</p>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>

			<Box marginTop={10} textAlign='justify'>
				<h2 style={{ textAlign: 'center', marginBottom: 50 }}>
					We help you with managing content!
				</h2>
				<p>
					Aenean in placerat urna, sit amet feugiat dui. Aenean mollis sem vitae
					mauris egestas tempor. Nullam sed diam enim. Curabitur gravida enim ac
					sapien malesuada, non consectetur ante dignissim. Suspendisse vel
					rutrum ex, a varius sapien. Vestibulum posuere urna vitae arcu aliquet
					condimentum. Nunc eget varius arcu. Etiam lacinia congue risus, eu
					venenatis mi sodales in. Sed ornare, est quis vehicula egestas, sapien
					eros fermentum purus, vitae auctor lectus massa ac purus. Nullam ac
					malesuada dui. Mauris interdum massa est, ut semper urna dictum quis.
					Curabitur non luctus justo, ac maximus tortor. Praesent quis lacinia
					ligula. Vestibulum commodo cursus turpis, quis mattis orci aliquet et.
					Ut varius nisl vitae vehicula egestas. Integer sed lobortis metus.
					Maecenas erat elit, semper id mollis sit amet, consectetur volutpat
					ex.
				</p>
				<Box
					padding={1}
					flexDirection='column'
					justifyContent='center'
					flex={1}
					display='flex'
				>
					<Grid container spacing={2}>
						<Grid item xs={3}>
							<Box
								padding={1}
								flexDirection='column'
								justifyContent='center'
								flex={1}
								display='flex'
								height={350}
							>
								<Widget
									boardID={2197}
									widgetID={35918}
									params={chart1Params}
									style={{
										borderStyle: 'solid',
										borderRadius: '20px',
										padding: '10px',
									}}
								/>
							</Box>
						</Grid>
						<Grid item xs={3}>
							<Box
								padding={1}
								flexDirection='column'
								justifyContent='center'
								flex={1}
								display='flex'
								height={350}
							>
								<Widget
									boardID={2197}
									widgetID={35913}
									params={chart1Params}
									style={{
										borderStyle: 'solid',
										borderRadius: '20px',
										padding: '10px',
									}}
								/>
							</Box>
						</Grid>
						<Grid item xs={3}>
							<Box
								padding={1}
								flexDirection='column'
								justifyContent='center'
								flex={1}
								display='flex'
								height={350}
							>
								<Widget
									boardID={2197}
									widgetID={35921}
									params={chart1Params}
									style={{
										borderStyle: 'solid',
										borderRadius: '20px',
										padding: '10px',
									}}
								/>
							</Box>
						</Grid>
						<Grid item xs={3}>
							<Box
								padding={1}
								flexDirection='column'
								justifyContent='center'
								flex={1}
								display='flex'
								height={350}
							>
								<Widget
									boardID={2197}
									widgetID={35925}
									params={chart1Params}
									style={{
										borderStyle: 'solid',
										borderRadius: '20px',
										padding: '10px',
									}}
								/>
							</Box>
						</Grid>
					</Grid>
				</Box>
			</Box>

			<Box marginTop={10} textAlign='justify'>
				<h2 style={{ textAlign: 'center', marginBottom: 50 }}>
					We are monitoring your accounts!
				</h2>
				<Box mt={2}>
					<Grid container spacing={2}>
						<Grid item xs={12} sm={6}>
							<Widget
								boardID={795}
								widgetID={48004}
								params={charListeningParams}
								style={{
									borderStyle: 'solid',
									borderRadius: '20px',
									padding: '5px',
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box p={2} bgcolor='background.paper'>
								<h3>Multiple platforms</h3>
								<p>
									Fusce euismod sodales velit, in elementum sem luctus
									convallis. Proin eu quam porttitor, accumsan tellus in,
									tristique sapien. Praesent luctus egestas lacus ut rhoncus.
									Aliquam at viverra lorem, pulvinar volutpat est. Aenean ac est
									et nunc elementum porta. Quisque imperdiet augue justo, eget
									ultrices lectus facilisis sed. Cras venenatis vel justo sed
									rhoncus. Proin facilisis mi elit, nec semper urna ornare non.
									Aenean nec sagittis justo. Maecenas viverra non felis semper
									efficitur. Pellentesque habitant morbi tristique senectus et
									netus et malesuada fames ac turpis egestas. Sed posuere, velit
									in semper vulputate, ante nisi rutrum urna, vel bibendum
									lectus sem a augue. Maecenas laoreet lacus lacus, volutpat
									porta nisl cursus quis. Cras varius at lorem bibendum
									porttitor. Integer feugiat lectus id sodales malesuada.
									Pellentesque et lacinia diam, ut sodales sapien.
								</p>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box p={2} bgcolor='background.paper'>
								<h3>Gender</h3>
								<p>
									Cras nisl orci, tempus vel bibendum id, euismod nec nulla. Sed
									eu porta felis. Nullam vitae velit eu augue blandit dictum at
									id justo. Vivamus pulvinar orci a felis hendrerit, faucibus
									placerat enim accumsan. Suspendisse sit amet consequat tortor.
									Nulla sodales sem libero, ac mattis metus euismod non. Quisque
									eget sapien ultrices, lobortis magna et, sagittis velit. Morbi
									id mollis dolor. Suspendisse egestas, nisl feugiat convallis
									gravida, mi nulla pretium elit, sed lobortis libero ante non
									risus.
								</p>
								<p>
									Nullam semper condimentum mi, eget iaculis ex eleifend auctor.
									Nam egestas eleifend velit in molestie. Vivamus aliquet vitae
									libero at convallis. Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Suspendisse ut nibh nec tortor hendrerit
									auctor. Aliquam id scelerisque quam. Vestibulum quis eleifend
									felis. Donec dapibus, sem et volutpat rhoncus, est lacus
									viverra mi, at blandit tortor justo at risus.
								</p>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Widget
								boardID={795}
								widgetID={48018}
								params={charListeningParams}
								style={{
									borderStyle: 'solid',
									borderRadius: '20px',
									padding: '5px',
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Widget
								boardID={795}
								widgetID={48000}
								params={charListeningParams}
								style={{
									borderStyle: 'solid',
									borderRadius: '20px',
									padding: '5px',
								}}
							/>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box p={2} bgcolor='background.paper'>
								<h3>Proffesions</h3>
								<p>
									Aenean venenatis vestibulum turpis, et rutrum lacus gravida
									sit amet. Ut accumsan risus vel augue pretium, vel iaculis leo
									dictum. Donec id tincidunt leo, vel fermentum urna. Maecenas
									efficitur dolor vitae libero molestie tristique. Proin
									ultricies venenatis eros, sed auctor purus sagittis eu.
									Vivamus velit orci, congue non nulla et, suscipit pretium
									sapien. Sed arcu metus, ornare sit amet nunc id, ornare
									maximus mauris. Sed scelerisque ipsum vel lorem ultricies, at
									lobortis libero facilisis. Nulla commodo porta sapien, id
									congue ligula dictum ut. Integer pulvinar turpis a elementum
									aliquet. Quisque id neque libero. Aliquam tristique, neque
									eget feugiat lobortis, est sapien venenatis ligula, sit amet
									mollis sem lorem sit amet nunc. Donec iaculis non massa a
									ornare. Cras id posuere enim. Sed nibh tortor, egestas in
									tellus eu, eleifend fringilla ligula. Ut augue lorem,
									elementum eu ipsum sed, aliquam sodales justo. Phasellus
									vulputate elit in felis varius lacinia. Suspendisse potenti.
									Integer elit turpis, iaculis id lorem eu, viverra facilisis
									est. Vestibulum maximus dolor mattis ornare malesuada. Quisque
									sit amet orci a elit condimentum scelerisque. Orci varius
									natoque penatibus et magnis dis parturient montes, nascetur
									ridiculus mus. Morbi in eros non lectus lobortis pharetra
									vitae id libero. Nullam aliquam augue eu metus accumsan
									convallis. Curabitur posuere est tortor, eget lacinia felis
									mattis eget.
								</p>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Box p={2} bgcolor='background.paper'>
								<h3>Keywords</h3>
								<p>
									Cras nisl orci, tempus vel bibendum id, euismod nec nulla. Sed
									eu porta felis. Nullam vitae velit eu augue blandit dictum at
									id justo. Vivamus pulvinar orci a felis hendrerit, faucibus
									placerat enim accumsan. Suspendisse sit amet consequat tortor.
									Nulla sodales sem libero, ac mattis metus euismod non. Quisque
									eget sapien ultrices, lobortis magna et, sagittis velit. Morbi
									id mollis dolor. Suspendisse egestas, nisl feugiat convallis
									gravida, mi nulla pretium elit, sed lobortis libero ante non
									risus.
								</p>
								<p>
									Nullam semper condimentum mi, eget iaculis ex eleifend auctor.
									Nam egestas eleifend velit in molestie. Vivamus aliquet vitae
									libero at convallis. Lorem ipsum dolor sit amet, consectetur
									adipiscing elit. Suspendisse ut nibh nec tortor hendrerit
									auctor. Aliquam id scelerisque quam. Vestibulum quis eleifend
									felis. Donec dapibus, sem et volutpat rhoncus, est lacus
									viverra mi, at blandit tortor justo at risus.
								</p>
							</Box>
						</Grid>
						<Grid item xs={12} sm={6}>
							<Widget
								boardID={795}
								widgetID={48009}
								params={charListeningParams}
								style={{
									borderStyle: 'solid',
									borderRadius: '20px',
									padding: '5px',
								}}
							/>
						</Grid>
					</Grid>
				</Box>
				<Box mt={2} marginTop={10}>
					<Grid container alignItems='center' spacing={2}>
						<Grid item xs={12} md={4}></Grid>

						<Grid item xs={12} md={4} style={{ textAlign: 'center' }}>
							<h2> Monitoring 24/7 - 365 days a year!</h2>
						</Grid>

						<Grid item xs={12} md={4} style={{ textAlign: 'right' }}>
							<FormControl>
								<InputLabel id='demo-simple-select-label'>Period</InputLabel>
								<Select
									labelId='demo-simple-select-label'
									id='demo-simple-select'
									value={selectBoxValue}
									label='Date Range'
									onChange={handleChange}
								>
									<MenuItem value={'P60D/now[sD]'}>Last 60 Days</MenuItem>
									<MenuItem value={'P90D/now[sD]'}>Last 90 days</MenuItem>
									<MenuItem value={'P120D/now[sD]'}>Last 120 Days</MenuItem>
								</Select>
							</FormControl>
						</Grid>
					</Grid>
					{/* Widgets */}
					<Stack
						direction='row'
						alignItems='center'
						justifyContent='center'
						spacing={1}
						display='flex'
						padding={1}
						flex={1}
						height={450}
					>
						<Widget
							boardID={795}
							style={{
								borderStyle: 'solid',
								flex: 1,
								borderRadius: '20px',
								padding: '10px',
							}}
							widgetID={48021}
							params={[
								{
									value: selectBoxValue,
									name: 'daterange',
									type: 'daterange',
								},
								{
									value: 'Europe/Prague',
									name: 'userTimezone',
									type: 'string',
								},
								{
									value: [
										{
											value: 'LNQ_172196_64de627a6b3f096777cfb00b',
											title: 'cz sk pro spike',
											status: 'topic_custom_mention_limit',
										},
									],
									name: 'listeningQueries',
									type: 'array',
								},
							]}
						/>
						<Widget
							boardID={795}
							style={{
								borderStyle: 'solid',
								flex: 1,
								borderRadius: '20px',
								padding: '10px',
							}}
							widgetID={48006}
							params={[
								{
									value: selectBoxValue,
									name: 'daterange',
									type: 'daterange',
								},
								{
									value: 'Europe/Prague',
									name: 'userTimezone',
									type: 'string',
								},
								{
									value: [
										{
											value: 'LNQ_172196_64de627a6b3f096777cfb00b',
											title: 'cz sk pro spike',
											status: 'topic_custom_mention_limit',
										},
									],
									name: 'listeningQueries',
									type: 'array',
								},
							]}
						/>
					</Stack>
				</Box>
			</Box>
		</Template>
	)
}

export default Emplifi
