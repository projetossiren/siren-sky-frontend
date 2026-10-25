import React from 'react'
import { createPortal } from "react-dom"
import './ImageDisplay.css'

export function ImageDisplay({ imageInfo, setImageInfo, index }) {
	const [showInfo, setShowInfo] = React.useState(false);
	function removeImage() {
		setImageInfo(imageInfo.filter((_, i) => i !== index))
	}
	return (
		<>
			<tr>
				<td>{imageInfo[index].name}</td>
				<td>{imageInfo[index].state}</td>
				<td><button onClick={() => setShowInfo(true)} className="showInfoButton"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" /></svg></button></td>
				<td><button onClick={removeImage} className='closeIcon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></button></td>
			</tr >
			{showInfo &&
				createPortal(
					<div className='pop-up'>
						<div>
							<img src={URL.createObjectURL(imageInfo[index].img)} alt="Imagem" />
							<button onClick={() => setShowInfo(false)} className='closeIcon'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" /></svg></button>
							<table className="informations">
								<tbody>
									<tr>
										<td>Latitude</td>
										<td>{imageInfo[index].latitude}</td>
									</tr>
									<tr>
										<td>Longitude</td>
										<td>{imageInfo[index].longitude}</td>
									</tr>
									<tr>
										<td>Tamanho</td>
										<td>{(imageInfo[index].size / 1024).toFixed(2)} KB</td>
									</tr>
									<tr>
										<td>Largura</td>
										<td>{imageInfo[index].width}</td>
									</tr>
									<tr>
										<td>Altura</td>
										<td>{imageInfo[index].height}</td>
									</tr>
								</tbody>
							</table>
						</div>
						<button onClick={() => setShowInfo(false)}>Fechar</button>
					</div>,
					document.body
				)
			}
		</>
	);
};