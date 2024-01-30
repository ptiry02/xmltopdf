import html2pdf from 'html2pdf.js/dist/html2pdf.min';
import ReactDOMServer from 'react-dom/server';
import { ExplorationReportTemplate } from '../Components/ExplorationReportTemplate';

const api = import.meta.env.VITE_API || 'http://localhost:5050/upload';

export const handleUpload = async (file) => {
	if (!file) return;
	const formData = new FormData();
	formData.append('file', file, file.name);

	const res = await fetch(api, {
		method: 'POST',
		body: formData
	});

	const data = await res.json();

	const docName = file.name.replace('.xml', '.pdf');

	const printElement = ReactDOMServer.renderToString(
		ExplorationReportTemplate(data)
	);

	const opts = {
		margin: 2,
		filename: docName,
		enableLinks: false,
		jsPDF: { putOnlyUsedFonts: true }
	};

	html2pdf().set(opts).from(printElement).save();
};
