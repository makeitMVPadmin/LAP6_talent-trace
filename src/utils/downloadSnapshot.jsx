import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const downloadSnapshotAsPDF = async (snapshotRef) => {
  if (!snapshotRef.current) return;

  try {
    const scale = 4;
    const canvas = await html2canvas(snapshotRef.current, {
      scale: scale,
      useCORS: true,
      backgroundColor: '#ffffff',
      width: snapshotRef.current.scrollWidth + 80,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');

    // Create a new PDF with jsPDF
    const pdf = new jsPDF({
      orientation: 'landscape',
      unit: 'mm',
      format: 'a4',
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (canvas.height * pdfWidth) / canvas.width;

    pdf.addImage(imgData, 'PNG', 5, 5, pdfWidth - 10, pdfHeight - 10);

    pdf.save('snapshot.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
