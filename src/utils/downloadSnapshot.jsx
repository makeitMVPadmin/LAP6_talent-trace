import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

export const downloadSnapshotAsPDF = async (snapshotRef) => {
  if (!snapshotRef.current) return;

  try {
    const scale = 3; // Increase scale for better quality
    const canvas = await html2canvas(snapshotRef.current, {
      scale: scale,
      useCORS: true,
      logging: false,
    });

    const imgData = canvas.toDataURL('image/png');

    // Create a new PDF with jsPDF
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
    });

    const imgWidth = 210; // A4 width in mm
    const imgHeight = (canvas.height * imgWidth) / canvas.width; // Maintain aspect ratio

    pdf.addImage(imgData, 'PNG', 0, 10, imgWidth, imgHeight);

    pdf.save('snapshot.pdf');
  } catch (error) {
    console.error('Error generating PDF:', error);
  }
};
