import { useRef, useState } from 'react';
import { handleUpload } from './helpers/handleFileConvert';
import './assets/css/App.css';
import { ExplorationReportTemplate } from './Components/ExplorationReportTemplate';

function App() {
	const [file, setFile] = useState(null);
	const [fileData, setFileData] = useState(null);
	const fileInput = useRef();

	return (
		<>
			{console.log('File: ', file)}
			<div id='app-wrapper'>
				<h1 id='title'>XML a PDF</h1>
				<label id='file-input-label' htmlFor='file-input'>
					<span className='text'>Selecciona archivo</span>
				</label>
				<input
					id='file-input'
					ref={fileInput}
					type='file'
					name='fileInput'
					accept='text/xml'
					onChange={(e) => {
						setFile(e.target.files[0]);
					}}
					// value={file}
					style={{ display: 'none' }}
				/>
				{file ? (
					<p>{file.name}</p>
				) : (
					<p>Ningún Archivo seleccionado... todavía.</p>
				)}
				<button
					className='btn-2'
					disabled={!file ? true : false}
					onClick={async () => {
						const data = await handleUpload(file);
						setFile(null);
						setFileData(data);
						fileInput.current.value = null;
					}}
				>
					Convertir
				</button>
			</div>
			{fileData && <ExplorationReportTemplate {...fileData} />}
		</>
	);
}

export default App;
