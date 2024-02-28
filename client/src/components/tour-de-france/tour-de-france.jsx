import React from 'react'
import { Box, Divider, Grid } from '@mui/material'
import Widget from '../../../../lib/components/widget'
import { community_comands } from '../board-params'
import Template from './template'

const TourDeFrance = () => {
	return (
		<Template>
			<Box textAlign='justify'>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla euismod
					metus vel eros auctor egestas. Donec faucibus sapien ut massa
					tristique congue. Praesent leo ipsum, placerat aliquet tortor id,
					rhoncus malesuada magna. Nulla eros urna, elementum non consectetur
					vulputate, lacinia placerat diam. Ut congue lacus elit, a porta ipsum
					cursus sit amet. Nam sollicitudin massa a feugiat faucibus. Ut non
					iaculis sem, vel facilisis tortor. Donec feugiat, dui sit amet
					suscipit cursus, sem felis feugiat leo, blandit sagittis nulla sem ac
					magna. Pellentesque massa metus, sodales in sapien vitae, dapibus
					commodo diam. Praesent pulvinar vitae orci eget ullamcorper. Duis
					auctor id risus vitae euismod. Nullam ut accumsan dui. Vestibulum eu
					fermentum risus.
				</p>

				<p>
					Vestibulum lacinia velit non augue hendrerit faucibus. Proin tincidunt
					at libero nec dictum. Nam placerat odio congue ultricies viverra. Sed
					hendrerit turpis sed ex laoreet, eget auctor urna pellentesque. Aenean
					nec odio dictum, placerat nisl at, eleifend odio. Proin pellentesque,
					eros quis feugiat faucibus, sem dolor fringilla nisl, ut tristique
					dolor mi et neque. Ut placerat ultrices turpis non fermentum. Nullam
					interdum, tortor ultricies dapibus ultricies, ipsum elit dignissim
					erat, eu lobortis erat tellus non sapien. Donec rutrum quis metus sit
					amet venenatis. Etiam scelerisque tellus diam. Praesent iaculis ex ut
					magna euismod luctus nec non sem. Donec condimentum vel felis eu
					faucibus. Fusce scelerisque leo vitae quam tempor iaculis.
				</p>
				<p>
					Nulla non commodo urna, eget fermentum nibh. Orci varius natoque
					penatibus et magnis dis parturient montes, nascetur ridiculus mus.
					Donec quis rhoncus sapien, et dapibus nisi. Donec sed sagittis libero.
					Morbi mattis ipsum id ultricies lacinia. Donec semper ligula non metus
					rutrum facilisis. Vivamus eu rutrum justo. Etiam ullamcorper eleifend
					ornare. Phasellus vitae elit arcu. Cras cursus quam id eleifend
					scelerisque. Phasellus venenatis malesuada erat at pharetra. Quisque
					vitae dictum ante. Nullam magna nunc, consequat non pretium ac,
					tincidunt ultricies tortor.
				</p>
				<p>
					Aliquam efficitur maximus vulputate. Ut a lacus id sem aliquam
					fermentum. Phasellus tincidunt ullamcorper erat, sed elementum tortor
					pulvinar quis. Quisque dapibus, augue vel dictum volutpat, ligula
					ipsum tempor augue, pharetra elementum tortor nunc nec est. Proin
					vitae enim luctus, pulvinar diam id, molestie nulla. Vestibulum eu ex
					aliquam, lacinia purus eu, accumsan felis. Proin congue volutpat
					elementum. Sed ac arcu non risus malesuada molestie in ut metus.
					Vestibulum cursus elit in magna finibus mollis vel a est. Phasellus
					felis augue, lacinia quis erat a, semper varius lectus. Donec lorem
					risus, tempor ac tempor eget, dapibus malesuada massa. Vestibulum id
					ultrices magna, sed ultrices ex. Integer mattis quam nec lorem
					finibus, ut tempor arcu rutrum. Aliquam tempus ullamcorper dolor id
					iaculis. Nulla facilisi. Nam sit amet malesuada nibh.
				</p>
				<p>
					Nam sed blandit nunc. Sed ac pharetra metus. Mauris semper lobortis
					dui, vel blandit risus vulputate at. Nam at dapibus ex, a cursus
					velit. Curabitur ut eleifend mi. Etiam rutrum lorem vitae ipsum
					luctus, ac dapibus massa placerat. Nulla non metus enim. Ut commodo
					metus nec suscipit mollis. Morbi lacinia eros in diam accumsan varius.
					Aliquam erat volutpat. Nunc at pulvinar tellus.
				</p>
			</Box>
			<Box mt={2} style={{ height: 450 }}>
				<Grid container spacing={3} style={{ height: '100%' }}>
					<Grid item xs={3}>
						<Widget
							boardID={2198}
							widgetID={35944}
							params={community_comands}
							style={{
								borderStyle: 'double',
								flex: 1,
								borderRadius: '20px',
								padding: '10px',
							}}
						/>
					</Grid>
					<Grid item xs={3}>
						<Widget
							boardID={2198}
							widgetID={35945}
							params={community_comands}
							style={{
								borderStyle: 'double',
								flex: 1,
								borderRadius: '20px',
								padding: '10px',
							}}
						/>
					</Grid>
					<Grid item xs={3}>
						<Widget
							boardID={2198}
							widgetID={35938}
							params={community_comands}
							style={{
								borderStyle: 'double',
								flex: 1,
								borderRadius: '20px',
								padding: '10px',
							}}
						/>
					</Grid>
					<Grid item xs={3}>
						<Widget
							boardID={2198}
							widgetID={35934}
							params={community_comands}
							style={{
								borderStyle: 'double',
								flex: 1,
								borderRadius: '20px',
								padding: '10px',
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box
				textAlign='center'
				p={2}
				width='66%'
				marginX='auto'
				bgcolor='background.paper'
				borderRadius={8}
				border={2}
				boxShadow={1}
				marginTop={6}
			>
				<h2>Tour de France in charts!</h2>
				<Divider />
				<Box p={2}>
					Vivamus sed suscipit augue. Mauris odio purus, tincidunt vitae tempor
					iaculis, ultricies at felis. Fusce justo nisl, tincidunt sed maximus
					vitae, congue id eros. Curabitur tellus tortor, commodo sit amet
					hendrerit sed, blandit efficitur massa. Vivamus risus neque, interdum
					nec viverra in, lacinia ut orci. Integer nunc lectus, placerat sit
					amet rutrum nec, tristique vel odio. Duis auctor ex nunc, sed
					consequat mauris aliquet at. Cras dapibus euismod nisi ut tincidunt.
					Aliquam erat volutpat. Nulla vitae volutpat massa. Donec tellus
					ligula, rutrum non quam a, posuere viverra velit. Phasellus suscipit
					venenatis eleifend. Interdum et malesuada fames ac ante ipsum primis
					in faucibus. Phasellus faucibus pharetra diam. Aliquam vel finibus
					tortor. Nullam imperdiet tempor velit, non condimentum ligula mattis
					ut. Fusce nec elit ac enim dignissim consequat nec eu augue. Class
					aptent taciti sociosqu ad litora torquent per conubia nostra, per
					inceptos himenaeos. Fusce enim enim, blandit nec magna id, lobortis
					ultrices sapien. Proin non purus viverra, luctus elit at, luctus
					lectus. Maecenas venenatis, neque vitae porttitor consequat, enim enim
					iaculis metus, eu facilisis ipsum lectus ac libero. Curabitur pretium
					mauris at urna dignissim porta. Pellentesque nisl mi, maximus quis
					lobortis a, vehicula sed eros. Pellentesque gravida elit pulvinar
					purus sollicitudin, ac maximus ex finibus. Suspendisse laoreet odio
					urna, a iaculis orci placerat a. Fusce ut nibh ut tellus tristique
					posuere quis ac magna. Pellentesque eu nisi sed metus consectetur
					congue. Vestibulum ullamcorper malesuada nunc, non scelerisque orci
					dapibus ac. Ut convallis tempor erat, ac sodales dui aliquam quis.
					Nunc et ultrices orci. Sed ut orci at dolor suscipit pulvinar porta et
					mi. Nunc massa nunc, consectetur blandit laoreet quis, eleifend a
					augue. Etiam placerat sapien eu laoreet vulputate. Aenean et nisi
					metus. Proin vel nunc in leo dictum consectetur non id ex. Nulla
					facilisi. Mauris ut est commodo, mattis tellus at, blandit leo. Donec
					a libero sed ante ornare finibus quis vitae nibh.
				</Box>
			</Box>
			<Box height={800} marginTop={3}>
				<Grid container spacing={4} style={{ height: '100%' }}>
					<Grid item xs={6} style={{ height: '50%' }}>
						<Widget
							boardID={2198}
							widgetID={35939}
							params={community_comands}
							style={{
								borderStyle: 'groove',
								flex: 1,
								borderRadius: '20px',
								padding: '10px',
							}}
						/>
					</Grid>
					<Grid item xs={6} style={{ height: '50%' }}>
						<Widget
							boardID={2198}
							widgetID={35941}
							params={community_comands}
							style={{
								borderStyle: 'groove',
								flex: 1,
								borderRadius: '20px',
								padding: '10px',
							}}
						/>
					</Grid>
					<Grid item xs={6} style={{ height: '50%' }}>
						<Widget
							boardID={2198}
							widgetID={35943}
							params={community_comands}
							style={{
								borderStyle: 'groove',
								flex: 1,
								borderRadius: '20px',
								padding: '10px',
							}}
						/>
					</Grid>
					<Grid item xs={6} style={{ height: '50%' }}>
						<Widget
							boardID={2198}
							widgetID={35932}
							params={community_comands}
							style={{
								borderStyle: 'groove',
								flex: 1,
								borderRadius: '20px',
								padding: '10px',
							}}
						/>
					</Grid>
				</Grid>
			</Box>
			<Box marginTop={6} textAlign='justify'>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={6}>
						<Widget
							boardID={2198}
							widgetID={35931}
							params={community_comands}
							style={{
								borderStyle: 'ridge',
								flex: 1,
								borderRadius: '20px',
								padding: '10px',
							}}
						/>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box p={2} bgcolor='background.paper'>
							<h3>France</h3>
							<p>
								Fusce euismod sodales velit, in elementum sem luctus convallis.
								Proin eu quam porttitor, accumsan tellus in, tristique sapien.
								Praesent luctus egestas lacus ut rhoncus. Aliquam at viverra
								lorem, pulvinar volutpat est. Aenean ac est et nunc elementum
								porta. Quisque imperdiet augue justo, eget ultrices lectus
								facilisis sed. Cras venenatis vel justo sed rhoncus. Proin
								facilisis mi elit, nec semper urna ornare non. Aenean nec
								sagittis justo. Maecenas viverra non felis semper efficitur.
								Pellentesque habitant morbi tristique senectus et netus et
								malesuada fames ac turpis egestas. Sed posuere, velit in semper
								vulputate, ante nisi rutrum urna, vel bibendum lectus sem a
								augue. Maecenas laoreet lacus lacus, volutpat porta nisl cursus
								quis. Cras varius at lorem bibendum porttitor. Integer feugiat
								lectus id sodales malesuada. Pellentesque et lacinia diam, ut
								sodales sapien.
							</p>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box display='flex' flexDirection='row' height='100%'>
							<Widget
								boardID={2198}
								widgetID={35930}
								params={community_comands}
								style={{
									borderStyle: 'ridge',
									borderRadius: '20px',
									padding: '10px',
									flex: 1,
									margin: '10px',
								}}
							/>
							<Widget
								boardID={2198}
								widgetID={35926}
								params={community_comands}
								style={{
									borderStyle: 'ridge',
									borderRadius: '20px',
									padding: '10px',
									flex: 1,
									margin: '10px',
								}}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} sm={6}>
						<Box p={2} bgcolor='background.paper'>
							<h3>Italy</h3>
							<p>
								Fusce euismod sodales velit, in elementum sem luctus convallis.
								Proin eu quam porttitor, accumsan tellus in, tristique sapien.
								Praesent luctus egestas lacus ut rhoncus. Aliquam at viverra
								lorem, pulvinar volutpat est. Aenean ac est et nunc elementum
								porta. Quisque imperdiet augue justo, eget ultrices lectus
								facilisis sed. Cras venenatis vel justo sed rhoncus. Proin
								facilisis mi elit, nec semper urna ornare non. Aenean nec
								sagittis justo. Maecenas viverra non felis semper efficitur.
								Pellentesque habitant morbi tristique senectus et netus et
								malesuada fames ac turpis egestas. Sed posuere, velit in semper
								vulputate, ante nisi rutrum urna, vel bibendum lectus sem a
								augue. Maecenas laoreet lacus lacus, volutpat porta nisl cursus
								quis. Cras varius at lorem bibendum porttitor. Integer feugiat
								lectus id sodales malesuada. Pellentesque et lacinia diam, ut
								sodales sapien.
							</p>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Template>
	)
}

export default TourDeFrance
