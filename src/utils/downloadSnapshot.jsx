import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

export const downloadSnapshotAsPNG = async (snapshotRef) => {
  if (!snapshotRef.current) return;

  try {
    const blob = await domtoimage.toBlob(snapshotRef.current, {
      width: 1200, // Force desktop width
      height: snapshotRef.current.scrollHeight, // Adjust height dynamically
    });

    saveAs(blob, 'snapshot.png'); // Save the PNG file
  } catch (error) {
    console.error('Error generating PNG:', error);
  }
};
