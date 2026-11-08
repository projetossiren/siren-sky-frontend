import { ImageDisplay } from '../ImageDisplay/ImageDisplay'
import './ImagesDisplay.css'

export function ImagesDisplay({ imageInfo, setImageInfo, setqImages, setProcessedImages, setNoGPSImages, setTrashFound}) {
	return (
		<div className='imagesdisplay'>
			<table>
				<thead>
					<tr>
						<th>Nome</th>
						<th>Situação</th>
						<th>Informações</th>
					</tr>
				</thead>
				<tbody>
					{
						imageInfo.map((i, index) => {
							return (
								<ImageDisplay
									imageInfo={imageInfo}
									setImageInfo={setImageInfo}
									setqImages={setqImages}
									setProcessedImages={setProcessedImages}
									setNoGPSImages={setNoGPSImages}
									setTrashFound={setTrashFound}
									index={index}
									key={i.id}
								/>
							);
						})
					}
				</tbody>
			</table>
		</div>
	)
}