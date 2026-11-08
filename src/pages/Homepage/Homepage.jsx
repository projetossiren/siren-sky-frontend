import './Homepage.css'
import { ImagesDisplay } from '../../components/ImagesDisplay/ImagesDisplay'
import { Header } from '../../components/Header/Header'
import { Buttons } from '../../components/Buttons/Buttons'
import { Advice } from '../../components/Advice/Advice'
import { Info } from '../../components/Info/Info'

export function Homepage({ imageInfo, setImageInfo, qImages, processedImages, noGPSImages, trashFound, setqImages, setProcessedImages, setNoGPSImages, setTrashFound}) {
	return (
		<>
			<Header />
			<Buttons
				imageInfo={imageInfo}
				setImageInfo={setImageInfo}
				qImages={qImages}
				processedImages={processedImages}
				noGPSImages={noGPSImages}
				trashFound={trashFound}
				setqImages={setqImages}
				setProcessedImages={setProcessedImages}
				setNoGPSImages={setNoGPSImages}
				setTrashFound={setTrashFound}
			/>
			<Info
				qImages={qImages}
				processedImages={processedImages}
				noGPSImages={noGPSImages}
				trashFound={trashFound}
			/>
			{imageInfo.length > 0 ?
				<ImagesDisplay
					imageInfo={imageInfo}
					setImageInfo={setImageInfo}
					setqImages={setqImages}
					setProcessedImages={setProcessedImages}
					setNoGPSImages={setNoGPSImages}
					setTrashFound={setTrashFound}
				/>
				:
				<Advice content="Envie as imagens para a verificação de lixo" />
			}
		</>
	)
}